// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
// These are the possible answers to each question

let questionNumber = 0;
let score = 0;
let question = document.getElementById("question");
let buttons = document.getElementsByClassName("answer-button");
let nextButton = document.getElementById("next-button");
let playButton = document.getElementById("play-button");
let quitButton = document.getElementById("quit-button");
let total = document.getElementById("total");
let scoreArea = document.getElementById("score");
let time = document.getElementById("time");
let timerArea = document.getElementById("timer");
let quizLengthSelection = document.getElementById("quiz-length-selection");
let quizLengthOptions = document.getElementsByName('quiz-length');
let chosenLength;
let interval;
let secondsLeft = 15;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    clearInterval(interval);
    checkChosenAnswer();
  });
}

playButton.addEventListener("click", function() {
  startGame();
});

nextButton.addEventListener("click", function() {
  nextQuestion();
});

quitButton.addEventListener("click", function() {
  clearInterval(interval);
  mainMenu();
})

const questions = {
  1: 'Which band released the song "I Want It That Way" in 1999?',
  2: 'Who sang the song "Sk8er Boi"?',
  3: 'What genre is known for artists like AC/DC and Led Zeppelin?',
  4: 'What year was the song "Hips Don\'t Lie" by Shakira released in?',
  5: 'Which of these songs was not released by Eminem?',
  6: 'Which of these songs by Ed Sheeran was released earliest?',
  7: 'Which member of Take That went on to release "Angels" as a solo artist?',
  8: 'Fill in this missing word in this Michael Jackson song: Black or _____',
  9: 'Which of these songs was not released in 2011?',
  10: 'Which song by Miley Cyrus was released most recently?',
  11: 'What band was Harry Styles previously a member of?',
  12: 'How many members are in the band Steps?',
  13: 'Which of these was not one of the Spice Girls?',
  14: 'Which of these songs was not released by Lady Gaga?',
  15: 'In what year was the song "Despacito" released?',
  16: 'Who sang the song "Please Don\'t Stop the Music"?',
  17: 'Which member of Queen had the real name of Farrokh Bulsara?',
  18: 'What country is the band ABBA from?',
  19: 'Which of these songs was not sung by Elvis?',
  20: 'Which singer changed his name to an unpronounceable symbol?'
};

const answers = {
  1: ['NSYNC', 'Backstreet Boys', 'Westlife', 'Boyzone'],
  2: ['Avril Lavigne', 'Britney Spears', 'Hilary Duff', 'P!nk'],
  3: ['Pop', 'Country', 'Rock', 'Rap'],
  4: ['2000', '2003', '2006', '2009'],
  5: ['Lose Yourself', 'Not Afraid', 'The Real Slim Shady', 'In Da Club'],
  6: ['Galway Girl', 'Photograph', 'The A Team', 'Shape Of You'],
  7: ['Gary Barlow', 'Robbie Williams', 'Jason Orange', 'Mark Owen'],
  8: ['Red', 'Blue', 'Green', 'White'],
  9: ['On the Floor', 'Titanium', 'Wake Me Up', 'Moves Like Jagger'],
  10: ['Party in the USA', 'Flowers', 'Wrecking Ball', 'The Climb'],
  11: ['One Direction', 'The Wanted', 'The Vamps', 'The Jonas Brothers'],
  12: ['5', '6', '7', '8'],
  13: ['Baby Spice', 'Ginger Spice', 'Feisty Spice', 'Posh Spice'],
  14: ['Bad Romance', 'I Gotta Feeling', 'Poker Face', 'Just Dance'],
  15: ['2016', '2017', '2018', '2019'],
  16: ['Rihanna', 'Britney Spears', 'P!nk', 'Katy Perry'],
  17: ['Freddie Mercury', 'Brian May', 'John Deacon', 'Roger Taylor'],
  18: ['Norway', 'Denmark', 'Sweden', 'Iceland'],
  19: ['Hound Dog', 'Suspicious Minds', 'Blue Suede Shoes', 'I Walk The Line'],
  20: ['David Bowie', 'Prince', 'Elton John', 'Michael Jackson']
};

const rightAnswers = {
  1: 'Backstreet Boys',
  2: 'Avril Lavigne',
  3: 'Rock',
  4: '2006',
  5: 'In Da Club',
  6: 'The A Team',
  7: 'Robbie Williams',
  8: 'White',
  9: 'Wake Me Up',
  10: 'Flowers',
  11: 'One Direction',
  12: '5',
  13: 'Feisty Spice',
  14: 'I Gotta Feeling',
  15: '2017',
  16: 'Rihanna',
  17: 'Freddie Mercury',
  18: 'Sweden',
  19: 'I Walk The Line',
  20: 'Prince'
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
    correctAnswer(answer);
  }
  //if the user picked the wrong answer
  else if (possibleAnswers.includes(answer)) {
    wrongAnswer(answer, rightAnswer);
  }
  else {
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

function correctAnswer(answer)
{
  alert(`You got it right! The answer is ${answer}.`);
  score++;
}

function wrongAnswer(answer, rightAnswer)
{
  alert(`Better luck next time! You picked ${answer} but the correct answer is ${rightAnswer}`);
}

function nextQuestion() {
  total.innerText = score;
  question.innerText = "Question " + questionNumber + ": " + questions[questionNumber];
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
