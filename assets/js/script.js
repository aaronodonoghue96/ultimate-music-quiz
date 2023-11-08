// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
// These are the possible answers to each question

/* Get all DOM elements that will be used in the quiz so they can be accessed
  during the quiz */
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

/* Define chosen length variable, which will be determined by the value the
  user chose before starting the game, the timer interval which restarts on
  each new question, and the amount of time per question. */
let chosenLength;
let interval;
let secondsLeft = 15;

/* Define questionNumber and score variables */
let questionNumber;
let score;

// Add event listener for all answer buttons to stop timer and check chosen answer
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    clearInterval(interval);
    checkChosenAnswer();
  });
}

// Add event listener for Play button to start game
playButton.addEventListener("click", function() {
  startGame();
});

// Add event listener for Next button to advance to next question
nextButton.addEventListener("click", function() {
  nextQuestion();
});

// Add event listener for Quit button to stop timer and return to main menu
quitButton.addEventListener("click", function() {
  clearInterval(interval);
  mainMenu();
});

// The list of questions asked in the quiz
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

// The list of possible answers for each question
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

// The list of correct answers for each question
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

// Load up the main menu when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
  mainMenu();
});

/* Display the main menu. Only show the opening sentence "Welcome to the
  Ultimate Music Quiz!", the play button, and the quiz length selection buttons */
function mainMenu() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "none";
  }
  scoreArea.style.display = "none";
  timerArea.style.display = "none";
  nextButton.style.display = "none";
  quitButton.style.display = "none";
  playButton.style.display = "inline";
  playButton.innerText = "Play";
  playButton.title = "Play";
  question.innerText = "Welcome to the Ultimate Music Quiz!";
  quizLengthSelection.style.display = "block";
}

/* Start a new game whose length is determined by the quiz length chosen by
  the user. Reset the question number and score at the start of each game.
  Hide the quiz length options, and ask the first question. */
function startGame() {
  for(var i = 0; i < quizLengthOptions.length; i++){
      if(quizLengthOptions[i].checked){
          chosenLength = quizLengthOptions[i].value;
      }
  }
  questionNumber = 0;
  score = 0;
  total.innerText = score;
  quizLengthSelection.style.display = "none";
  nextQuestion();
}

/* Check the answer given by the user to see is it correct */
function checkChosenAnswer() {
  let answer = event.target.innerText;
  let possibleAnswers = answers[questionNumber];
  let rightAnswer = rightAnswers[questionNumber];
  // if the user picked the right answer
  if (answer === rightAnswer)
  {
    correctAnswer(answer);
  }
  // if the user picked the wrong answer
  else if (possibleAnswers.includes(answer)) {
    wrongAnswer(answer, rightAnswer);
  }
  else {
    throw `Invalid answer ${answer}! Quiz cancelled!`;
  }
  // hide the answer buttons and show the Next button
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "none";
  }
  nextButton.style.display = "inline";
}

/* Handles a correct answer by awarding points based on time remaining,
  and gives feedback to the user */
function correctAnswer(answer)
{
  question.innerText = `You got it right! The answer is ${answer}.`;
  score += Number.parseInt(time.innerText); //add score to total
  total.innerText = score;
}

/* Handles a wrong answer by giving feedback to the user and providing the
  correct answer but awarding no points */
function wrongAnswer(answer, rightAnswer)
{
  question.innerText = `Better luck next time! You picked ${answer} but the correct answer is ${rightAnswer}`;
}

/* Handles the user running out of time by giving feedback to them and providing
  the correct answer but awarding no points */
function outOfTime()
{
  question.innerText = `You ran out of time! The correct answer was ${rightAnswers[questionNumber]}`;

  // hide answer buttons and show Next button
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "none";
  }
  nextButton.style.display = "inline";
}

/* Display next question, show score, timer, answer buttons and Quit button,
  hide Play and Next buttons. Increase question number and display it alongside
  the question. Provide the four possible answers and start the timer.

  If the user runs out of time, handle that. If the last question has been
  answered, display the end screen. */
function nextQuestion() {
  secondsLeft = 15;
  time.innerText = secondsLeft;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "inline";
  }
  scoreArea.style.display = "inline";
  timerArea.style.display = "inline";
  playButton.style.display = "none";
  nextButton.style.display = "none";
  quitButton.style.display = "inline";

  questionNumber++;
  if (questionNumber > chosenLength)
  {
    endGame();
  }
  else {
    question.innerText = "Question " + questionNumber + " of " + chosenLength + ": " + questions[questionNumber];
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].innerText = answers[questionNumber][i];
      buttons[i].title = answers[questionNumber][i];
    }
    interval = setInterval(function(){
      secondsLeft--;
      time.innerText=secondsLeft;
      if (secondsLeft === 0){
        clearInterval(interval);
        outOfTime();
      }
    }, 1000);
  }
}

/* Hide the timer and all buttons except Quit, and Play, which now serves as
  Play Again, which will start a new game of the same length, and display a
  message thanking the user for playing. */
function endGame() {
  question.innerText = "Thanks for playing!";
  timerArea.style.display = "none";
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.display = "none";
  }
  playButton.style.display = "inline";
  playButton.innerText = "Play Again";
  playButton.title = "Play Again";
}
