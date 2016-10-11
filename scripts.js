var userGuess = document.querySelector(".guess");
var userGuessText = document.querySelector(".user-guess");
var guessButton = document.querySelector(".submit");
var clearButton = document.querySelector(".clear");
var resetButton = document.querySelector(".reset");
var submitRangeButton = document.querySelector(".submit-range");
var userHint = document.querySelector(".guess-status");
var randomNumber = Math.floor(Math.random()* 100);
var getMinRange = document.querySelector(".min-guess");
var getMaxRange = document.querySelector(".max-guess");

generateRandomNumber();

submitRangeButton.addEventListener("click", function(){
  getUserRange();
  disableRange();
  enablePlayerButtons();
})

guessButton.addEventListener("click", function(){
  checkUserGuess();
  clearButtonEnable();
  $(".guess-text").css("visibility", "visible");
  checkRange();
})

clearButton.addEventListener("click", function(){
  userGuess.value = "";
  clearButtonDisable();
})

resetButton.addEventListener("click", function(){
  resetProgram();
  resetButtonDisable();
})

function generateRandomNumber(){
  var numberToGuess = randomNumber;
  $(".guess-text").css("visibility", "hidden");
  console.log(randomNumber);
}

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

function getUserRange(){
  var minRangeInt = parseInt(getMinRange.value);
  var maxRangeInt = parseInt(getMaxRange.value);
  userHint.innerText = "Guess a number between " + minRangeInt + " & " + maxRangeInt;
  // console.log(minRangeInt);
  // console.log(maxRangeInt);
}

function checkRange(){
  var minNumber = parseInt(getMinRange.value);
  var maxNumber = parseInt(getMaxRange.value);
  // var minNumber = 1;
  // var maxNumber = 100;
  console.log(minNumber);
  console.log(maxNumber);

  var guessedNumber = parseInt(userGuess.value);
  if (guessedNumber < minNumber){
    userGuessText.innerText = "oops!"
    userHint.innerText = "Guess a number between " + minNumber + " & " + maxNumber;
  } else if (guessedNumber > maxNumber){
    userGuessText.innerText = "oops!"
    userHint.innerText = "Guess a number between " + minNumber + " & " + maxNumber;
  }
}

function disableRange(){
  submitRangeButton.disabled = true;
  getMinRange.disabled = true;
  getMaxRange.disabled = true;
  $(".range-container").css("opacity", .5);
}

function enablePlayerButtons(){
  guessButton.disabled = false;
  resetButton.disabled = false;
  userGuess.disabled = false;
  $(".submit").css("opacity", 1);
  $(".reset").css("opacity", 1);
  $(".guess").css("opacity", 1);
}

function resetProgram() {
  location.reload();
  $(".range-container").css("opacity", 1);
}

function clearButtonEnable(){
  clearButton.disabled = false;
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
