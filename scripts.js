var userGuess = document.querySelector(".guess");
var userGuessText = document.querySelector(".user-guess");
var guessButton = document.querySelector(".submit");
var clearButton = document.querySelector(".clear");
var resetButton = document.querySelector(".reset");
var submitRangeButton = document.querySelector(".submit-range");
var userHint = document.querySelector(".guess-status");
var minRange = document.querySelector(".min-guess");
var maxRange = document.querySelector(".max-guess");

var lowNumber;
var highNumber;
var newLowNum;
var newHighNum;
var randomNumber;
var increasedRandomNumber;

$(".guess-text").css("visibility", "hidden");

submitRangeButton.addEventListener("click", function(){
  lowNumber = getMinUserInput();
  highNumber = getMaxUserInput();
  randomNumber = generateRandomNumber(lowNumber, highNumber);
  console.log(randomNumber)
  guessSectionEnable();
  disableRange();
  userHint.innerText = "Guess a number between " + lowNumber + " & " + highNumber;
})

guessButton.addEventListener("click", function(){
  enablePlayerButtons();
  checkUserGuess();
  checkRange(lowNumber, highNumber);
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

function generateRandomNumber(lowNumber, highNumber){
 return Math.floor(Math.random() * (lowNumber - highNumber)) + highNumber;
}

function getMinUserInput(){
  return parseInt(minRange.value);
}

function getMaxUserInput(){
  return parseInt(maxRange.value);
}

function checkUserGuess(){
  var guessedNumber = parseInt(userGuess.value);
  userGuessText.innerText = guessedNumber;
  if (guessedNumber > randomNumber){
    userHint.innerText = "That is too high";
  } else if (guessedNumber < randomNumber){
    userHint.innerText = "That is too low";
  } else if (guessedNumber === randomNumber){
      userHint.innerText = "You got it! Hit reset to play again!";
      generateRandomNumber(lowNumber, highNumber);
    } else {
      userHint.innerText = "*ahem* That's not a number";
    }
    console.log(increasedRandomNumber);

  }

function checkRange(){
  var minNumber = lowNumber;
  var maxNumber = highNumber;
  var guessedNumber = parseInt(userGuess.value);
  if (guessedNumber < minNumber){
    userGuessText.innerText = "oops!";
    userHint.innerText = "Guess a number between " + minNumber + " & " + maxNumber;
  } else if (guessedNumber > maxNumber){
    userGuessText.innerText = "oops!";
    userHint.innerText = "Guess a number between " + minNumber + " & " + maxNumber;
  }
}

function increaseNumberRange(){
  debugger
  var guessedNumber = parseInt(userGuess.value);
  if (guessedNumber === randomNumber) {
    highNumber = newHighNum = highNumber + 10;
    lowNumber = newLowNum = lowNumber - 10;
    console.log(newHighNum);
    console.log(newLowNum);
  }
}

function enablePlayerButtons(){
  resetButton.disabled = false;
  clearButton.disabled = false;
  $(".reset").css("opacity", 1);
  $(".clear").css("opacity", 1);
}

function clearButtonDisable(){
  clearButton.disabled = true;
  $(".clear").css("opacity", .5);
}

function guessSectionEnable(){
  guessButton.disabled = false;
  userGuess.disabled = false;
  $(".guess").css("opacity", 1);
  $(".submit").css("opacity", 1);
}

function resetButtonDisable(){
  resetButton.disabled = true;
  $(".reset").css("opacity", .5);
}

function disableRange(){
  $(".range-container").css("opacity", .5);
  submitRangeButton.disabled = true;
  minRange.disabled = true;
  maxRange.disabled = true;
}

function resetProgram() {
  location.reload();
}
