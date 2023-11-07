# Ultimate Music Quiz
The ultimate quiz in music

## Fixed Bugs:
Adding 'event' to function (i.e. 'e => function(event)') in loop for adding event listeners to answer buttons caused checkAnswer() not to be called. This has been fixed by removing that piece of code and leaving both functions without parameters.
Score was not being updated after last question. This has been fixed by getting the DOM element with the id "score" and updating it.
Wrong answers were being treated as invalid because the "in" keyword was used to check for list membership, rather than the includes() method. This has been fixed by updating the check to use the includes() method instead of "in".

## Credits:
The image of a record used in the quiz logo was taken from the following link: https://www.vecteezy.com/png/9313617-vinyl-record-vector-illustration-isolated-on-white-background <a href="https://www.vecteezy.com/free-png/vinyl-record">Vinyl Record PNGs by Vecteezy</a>, is under the Free License, and was created by Ovidiu Timplaru.
All other code in this project is my own original work.
