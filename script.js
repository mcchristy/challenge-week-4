var quizContainer = document.getElementById("quiz-container");
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var timer = document.getElementById("timer");
var startButton = document.getElementById("start");
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
            { answer: "Puréeing", isItCorrect: false},
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
        question: "CMeat is firmest when it is cooked:",
        answers: [
            { answer: "Medium", isItCorrect: false },
            { answer: "Medium Well", isItCorrect: false},
            { answer: "Well done", isItCorrect: true},
            { answer: "Medium Rare", isItCorrect: false},
        ] 
    },
]
