var userGuess = document.querySelector(".guess");
var userGuessText = document.querySelector(".user-guess");
var guessButton = document.querySelector(".submit");
var clearButton = document.querySelector(".clear");
var resetButton = document.querySelector(".reset");
var uesrHint = document.querySelector(".guess-status");
var randomNumber = Math.floor(Math.random()*100);

generateRandomNumber();

guessButton.addEventListener("click", function(){
  checkUserGuess();
  clearButton.disabled = false;
  resetButton.disabled = false;

})

clearButton.addEventListener("click", function(){
  userGuess.value = "";
  clearButton.disabled = true;
})

function generateRandomNumber(){
  var numberToGuess = randomNumber;
  console.log(randomNumber);
}

function checkUserGuess(){
  var guessedNumber = parseInt(userGuess.value);
  userGuessText.innerText = guessedNumber;
  console.log(guessedNumber);
  if (guessedNumber > randomNumber){
    uesrHint.innerText = "That is too high";
  } else if (guessedNumber < randomNumber){
    uesrHint.innerText = "That is too low";
  } else {
    uesrHint.innerText = "You got it!";
  }
}
