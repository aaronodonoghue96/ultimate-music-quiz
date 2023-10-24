// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
// These are the possible answers to each question

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function() {
      checkChosenAnswer(event);
    });
  }
});

function checkChosenAnswer(event) {
  let answer = event.target.innerText;
  alert(`You clicked ${answer}`);
}
