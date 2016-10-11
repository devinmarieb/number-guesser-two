
var userGuess = document.querySelector(".guess");
var userGuessText = document.querySelector(".user-guess");
var guessButton = document.querySelector(".submit");
var clearButton = document.querySelector(".clear");
var resetButton = document.querySelector(".reset");
var submitRangeButton = document.querySelector(".submit-range");
var userHint = document.querySelector(".guess-status");
var getMinRange = document.querySelector(".min-guess");
var getMaxRange = document.querySelector(".max-guess");
var randomNumber = Math.floor((Math.random() * 100) + 1);;
console.log(randomNumber);

$(".guess-text").css("visibility", "hidden");

guessButton.addEventListener("click", function(){
  enablePlayerButtons();
  checkUserGuess();
  checkRange();
  $(".guess-text").css("visibility", "visible");
})

clearButton.addEventListener("click", function(){
  userGuess.value = "";
  clearButtonDisable();
})

resetButton.addEventListener("click", function(){
  resetProgram();
  resetButtonDisable();
})

function checkUserGuess(){
  var guessedNumber = parseInt(userGuess.value);
  userGuessText.innerText = guessedNumber;
  if (guessedNumber > randomNumber){
    userHint.innerText = "That is too high";
  } else if (guessedNumber < randomNumber){
    userHint.innerText = "That is too low";
  } else if (guessedNumber === randomNumber){
    userHint.innerText = "You got it!";
  }
}

function checkRange(){
  var minNumber = 1;
  var maxNumber = 100;
  var guessedNumber = parseInt(userGuess.value);
  if (guessedNumber < minNumber){
    userGuessText.innerText = "oops!";
    userHint.innerText = "Guess a number between " + minNumber + " & " + maxNumber;
  } else if (guessedNumber > maxNumber){
    userGuessText.innerText = "oops!";
    userHint.innerText = "Guess a number between " + minNumber + " & " + maxNumber;
  } else if (userGuessText.innerText = "NaN") {
    userHint.innerText = "That's not a number";
  }
}

function enablePlayerButtons(){
  guessButton.disabled = false;
  resetButton.disabled = false;
  userGuess.disabled = false;
  clearButton.disabled = false;
  $(".submit").css("opacity", 1);
  $(".reset").css("opacity", 1);
  $(".guess").css("opacity", 1);
  $(".clear").css("opacity", 1);
}

function clearButtonDisable(){
  clearButton.disabled = true;
  $(".clear").css("opacity", .5);
}

function resetButtonDisable(){
  resetButton.disabled = true;
  $(".reset").css("opacity", .5);
}

function resetProgram() {
  location.reload();
}
