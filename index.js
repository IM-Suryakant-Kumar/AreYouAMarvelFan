// Import
const readlinesync = require("readline-sync");
const chalk = require("chalk");

// Productivity
const log = console.log;
const success = chalk.bgHex("#3ae374").black;
const warning = chalk.bgHex("#ff4d4d").black;
const highlight = chalk.bgBlueBright.black;

// Variables
let userName;
let score = 0;

// Object declarations
const scores = [];

const questions = [
  {
    question: "\nWho is TonyStark? ",
    answer: "Ironman",
  },
  {
    question: "\nWhat is the captain weapon name? ",
    answer: "Shield",
  },
  {
    question: "\nHow many infinity stones in the movie? ",
    answer: "6",
  },
  {
    question: "\nHulk power boosted when he is? ",
    answer: "Angry",
  },
  {
    question: "\nWhich avenger have the power of thunder? ",
    answer: "Thor",
  },
];

// Main code Started
// Function declarations
function welcome() {
  userName = readlinesync.question("What is your name? ");
  log("\nWelcome", userName, "to ARE YOU A TRUE MARVEL FAN QUIZ! ");
  log("Do you know marvel cinematic universe? let's play a quiz and see");
}

function play(question, answer) {
  const userAnswer = readlinesync.question(question);

  if (userAnswer.toLocaleLowerCase() === answer.toLocaleLowerCase()) {
    score++;
    log(success("Yay!, You are right"));
    log("Your current score is", score);
  } else {
    log(warning("Sorry!, You are wrong"));
  }
}

function game() {
  for (let i = 0; i < questions.length; i++) {
    let currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function pushScore() {
  scores.push({
    name: userName,
    score: score,
  });
}

function showScores() {
  scores.map((data) => log(highlight(`\nYour final score ${data.score} `)));
}

// Invoke functions
welcome();
game();
pushScore();
showScores();
