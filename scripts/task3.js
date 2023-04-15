// js task#3

 var secretNumber= "6";

 var guessNumber=prompt("Guess the secret number between 1-10");

 if (guessNumber == secretNumber)
 {
     alert("Congratulation! You guessed the secret number")
 }
 else if(guessNumber > secretNumber)
 {
     alert("guessed number is too higher than the secret number. Please guess again")
 }
 else if(guessNumber < secretNumber)
 {
     alert("guessed number is too lower than the secret number. Please guess again")
 }
 else{
     alert("Invalid Output.")
 }