var quizContainer = document.getElementById("quiz-container");
var questions = document.getElementById("question");
var answers = document.getElementById("answers");
var timer = document.getElementById("timer");
var startButton = document.getElementById("start");
var message = document.getElementById("message");
console.log(document.getElementById("start"));

var actualQuiz= [
    {
        question: "At what internal temperature should raw meat, poultry, and seafood be stored?",
        answers: [
            { answer: "41°F and below", isItCorrect: true },
            { answer: "45°F and below", isItCorrect: false},
            { answer: "50°F and below", isItCorrect: false},
            { answer: "36°F and below", isItCorrect: false},
        ]
    },
    {
        question: "What thickens Hollandaise?",
        answers: [
            { answer: "Blonde roux", isItCorrect: false },
            { answer: "Emulsification", isItCorrect: true},
            { answer: "White roux", isItCorrect: false},
            { answer: "Pureeing", isItCorrect: false},
        ]
    },
    {
        question: "What is the temperature range of the temperature danger zone?",
        answers: [
            { answer: "50°F- 130°F", isItCorrect: false },
            { answer: "41°F- 135°F", isItCorrect: true},
            { answer: "41°F- 125°F", isItCorrect: false},
            { answer: "45°F- 135°F", isItCorrect: false},
        ] 
    },
    {
        question: "Connective tissue that connects the meat to the bone and will not break down during cooking is called:",
        answers: [
            { answer: "Fibrous", isItCorrect: false },
            { answer: "Emittance", isItCorrect: false},
            { answer: "Cartilage", isItCorrect: false},
            { answer: "Elastance", isItCorrect: true},
        ] 
    },
    {
        question: "Meat is firmest when it is cooked:",
        answers: [
            { answer: "Medium", isItCorrect: false },
            { answer: "Medium Well", isItCorrect: false},
            { answer: "Well done", isItCorrect: true},
            { answer: "Medium Rare", isItCorrect: false},
        ] 
    },
]

startButton.style.position = "absolute";
startButton.style.left = "50%";
startButton.style.transform = "translateX(-50%)";
startButton.style.top = "50%";
startButton.style.transform = "translateY(-50%)";

var highscores = document.getElementById("scores");
highscores.style.position = "absolute";
highscores.style.color = "black";
highscores.style.fontSize = "20px";

var timeLeft = 75;
function countDown() {
    var interval = setInterval(function() {
        timer.textContent=timeLeft;
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(interval);
            timer.textContent = displayMessage();
        }
    } ,1000);
};

var count = 0;
var score = 0;

function nextQuestion() {
    while (answers.firstChild) {
        answers.firstChild.remove();
    };

    if (count >= actualQuiz.length) {
        quizContainer.style.display = "none";
        console.log("Quiz completed! Score: " + score);

        saveScoreToLocalStorage();
        window.location.href= "highscores.html";
        return;
    }
    questions.textContent = actualQuiz[count].question;
    for (i=0; i<actualQuiz[count].answers.length; i++) {
        var button = document.createElement("button");
        button.innerText = actualQuiz[count].answers[i].answer;
        button.setAttribute("data-isItCorrect", actualQuiz[count].answers[i].isItCorrect);
        button.addEventListener("click", checkAns);
        answers.appendChild(button);
    };
    count++
};

function checkAns(event) {
    var selectedButton = event.target;
    var isCorrect = selectedButton.getAttribute("data-isItCorrect") === "true";
    
    if (isCorrect) {
        score++;
        message.textContent = "Correct!";
    } else {
        timeLeft-= 10;
        message.textContent = "Incorrect!"
    }

    setTimeout(function(){
        message.textContent = "";
    },1500);

    setTimeout(function(){
        nextQuestion();
    },1500);
    
}

function startQuiz() {
    countDown();
    nextQuestion();
    quizContainer.style.display = "block";
    startButton.style.display = "none";
}

startButton.addEventListener("click", startQuiz);

var viewHighScores = document.getElementById("viewHighScores");

function saveScore() {
  var userScore = { score: score }; 
  localStorage.setItem("userScore", JSON.stringify(userScore));

  var savedScore = localStorage.getItem("userScore");

  var scoreDisplay = document.createElement("p");
  scoreDisplay.style.color = "rgb(186, 109, 186)";
  scoreDisplay.textContent = "Your score: " + savedScore;
  document.getElementById("scorelist").appendChild(scoreDisplay);
};