// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
// These are the possible answers to each question

let questionNumber = 1;
let score = 0;
let question = document.getElementById("question");
let buttons = document.getElementsByTagName("button");
let total = document.getElementById("total");

const questions = {
  1: 'Which band released the song "I Want It That Way" in 1999?',
  2: 'Who sang the song "Sk8er Boi"?',
  3: 'What genre is known for artists like AC/DC and Led Zeppelin?',
  4: 'What year was the song "Hips Don\'t Lie" by Shakira released in?',
  5: 'Which of these songs was not released by Eminem?'
};

const answers = {
  1: ['NSYNC', 'Backstreet Boys', 'Westlife', 'Boyzone'],
  2: ['Avril Lavigne', 'Britney Spears', 'Hilary Duff', 'P!nk'],
  3: ['Pop', 'Country', 'Rock', 'Rap'],
  4: ['2000', '2003', '2006', '2009'],
  5: ['Lose Yourself', 'Not Afraid', 'The Real Slim Shady', 'In Da Club']
};

const rightAnswers = {
  1: 'Backstreet Boys',
  2: 'Avril Lavigne',
  3: 'Rock',
  4: '2006',
  5: 'In Da Club'
};

let maxQuestionNumber = Object.keys(questions).length;

document.addEventListener("DOMContentLoaded", function() {
  startGame();
});

function startGame() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      checkChosenAnswer();
    });
  }
  nextQuestion();
}

function checkChosenAnswer() {
  let answer = event.target.innerText;
  let possibleAnswers = answers[questionNumber];
  let rightAnswer = rightAnswers[questionNumber];
  //if the user picked the right answer
  if (answer === rightAnswer)
  {
    alert(`You got it right! The answer is ${answer}.`);
    score++;
  }
  //if the user picked the wrong answer
  else if (possibleAnswers.includes(answer)) {
    alert(`Better luck next time! The correct answer is ${rightAnswer}`);
  }
  else {
    alert(`Invalid answer ${answer}!`);
    throw `Invalid answer ${answer}! Quiz cancelled!`;
  }
  questionNumber++;
  if (questionNumber <= maxQuestionNumber)
  {
    nextQuestion();
  }
  else {
    endGame();
  }
}

function nextQuestion() {
  total.innerText = score;
  question.innerText = questions[questionNumber];
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerText = answers[questionNumber][i];
  }
}

function endGame() {
  let scoreArea = document.getElementById("score");
  scoreArea.innerText = `Your final score is ${score}`;
  question.innerText = "Thanks for playing!";
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "none";
  }
}
