// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
// These are the possible answers to each question

let questionNumber = 1;
let score = 0;
let question = document.getElementById("question");
let buttons = document.getElementsByTagName("button");
let total = document.getElementById("total");

document.addEventListener("DOMContentLoaded", function() {
  startGame();
});

function startGame() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      checkChosenAnswer(event);
    });
  }
}

function checkChosenAnswer(event) {
  let answer = event.target.innerText;
  let rightAnswer = rightAnswers[questionNumber];
  if (answer === rightAnswer)
  {
    alert(`You got it right! The answer is ${answer}.`);
    score++;
  }
  else {
    alert(`Better luck next time! The correct answer is ${rightAnswer}`)
  }
  questionNumber++;
}

const questions = {
  1: 'Which band released the song "I Want It That Way" in 1999?',
  2: '',
  3: '',
  4: '',
  5: ''
}

const answers = {
  1: ['NSYNC', 'Backstreet Boys', 'Westlife', 'Boyzone'],
  2: ['', '', '', ''],
  3: ['', '', '', ''],
  4: ['', '', '', ''],
  5: ['', '', '', '']
}

const rightAnswers = {
  1: 'Backstreet Boys',
  2: '',
  3: '',
  4: '',
  5: ''
}
