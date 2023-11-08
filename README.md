# Ultimate Music Quiz

![Ultimate Music Quiz shown on a variety of screen sizes](assets/screenshots/ultimate-music-quiz.png)

Visit the deployed site: https://aaronodonoghue96.github.io/ultimate-music-quiz/

Music is known as the universal language, and it is a form of entertainment that has been with us for centuries, and is found in all corners of the world. Music has been available in a variety of different recorded forms throughout the ages, from records to cassettes to CDs to digital formats like mp3 files. According to [Headphones Addict](https://headphonesaddict.com/listening-to-music-statistics/), roughly 7.11 billion people in the world listen to music, the average person will hear 1.3 million songs in their lifetime, and listens to 961 hours and 10 minutes of music a year, which is equivalent to slightly over 40 days straight of listening to music!

This quiz was designed for lovers of music to test their knowledge, with questions covering a wide array of genres, eras of music, and artists. My love for music and quizzes, the wide variety, long history, and universality of music, as well as playing several music-related quizzes, such as the video game "Buzz! The Music Quiz" for the PlayStation 2, all came together to give me the idea to make a music quiz of my own using JavaScript, HTML and CSS.

## Features:

The website has just a single page, which is responsive, and has a favicon, a logo which is made up of the title with an image of vinyl record on either side, and the game area, whose contents change depending on where the player is in the quiz.

### Favicon:

### Logo:

### Game Area:

- Main Menu
 - At the main menu, where the player lands upon first opening the website, the game area contains just a welcome message, the Play buttons, and four buttons for selecting the length of the quiz.
- Asking a Question
 - When a question is posed to the user, the game area will display the question, the current score, the timer (which updates every second after the question is asked until reaching 0), four answer buttons with possible answers to the question, each in a different colour, and the Quit Game button which will take you back to the main menu.
- Feedback on Answer
 - When the user is given feedback on whether their answer is right or wrong (or if they ran out of time), the game area will display a message to indicate if the answer is right, wrong, or if the user was out of time, as well as the Next button to advance to the next question, and the Quit Game button to return to the main menu.
- End of Game
 - When the game is over, the user is shown their final score, a message to thank them for playing the game, and the Play button (which now says "Play Again"), which will restart a new game of the same length, and the Quit Game button, which will return the user to the main menu.

### Play Button:

### Score:

### Timer:

### Answer Buttons:

### Quit Game Button:

### Feedback:

### Next Button:

## Technologies Used:

- Languages used:
 - JavaScript
 - HTML
 - CSS

- Other technologies used:
 - Git: version control
 - GitHub: store files and committed changes
 - Google Developer Tools: check responsiveness and display on different device sizes
 - Favicon.io: create favicon for website
 - Am I Responsive?: display website on different device types
 - GitHub Pages: deployment

 ## Deployment:

 This site is deployed using GitHub Pages - [Ultimate Music Quiz](https://aaronodonoghue96.github.io/ultimate-music-quiz/)

 To deploy the site to GitHub Pages:
 - Login to GitHub.
 - Go to the project repository aaronodonoghue96/ultimate-music-quiz.
 - Click on the Settings button.
 - Select the Pages option in the vertical menu on the left.
 - Select "main" as the branch from the source dropdown menu.
 - Click Save.
 - The site is now deployed.

## Fixed Bugs:
Adding 'event' to function (i.e. 'e => function(event)') in loop for adding event listeners to answer buttons caused checkAnswer() not to be called. This has been fixed by removing that piece of code and leaving both functions without parameters.
Score was not being updated after last question. This has been fixed by getting the DOM element with the id "score" and updating it.
Wrong answers were being treated as invalid because the "in" keyword was used to check for list membership, rather than the includes() method. This has been fixed by updating the check to use the includes() method instead of "in".

## Credits:
- The image of a record used in the quiz logo was taken from the following link: https://www.vecteezy.com/png/9313617-vinyl-record-vector-illustration-isolated-on-white-background [Vinyl Record PNGs by Vecteezy](https://www.vecteezy.com/free-png/vinyl-record), is under the Free License, and was created by Ovidiu Timplaru.
- The favicon of a music note used in this website is from [favicon.io](https://favicon.io/emoji-favicons/musical-note), and is distributed under the [Creative Commons BY 4.0 license](https://creativecommons.org/licenses/by/4.0/). No changes were made to the favicon files in this project.
- All other code in this project is my own original work.
