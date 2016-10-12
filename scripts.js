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

$(".guess-text").css("visibility", "hidden");

submitRangeButton.addEventListener("click", function(){
  lowNumber = parseInt(minRange.value);
  highNumber = parseInt(maxRange.value);
  randomNumber = generateRandomNumber(lowNumber, highNumber);
  guessSectionEnable();
  disableRange();
  userHint.innerText = "Guess a number between " + lowNumber + " & " + highNumber;
  console.log(randomNumber);
})

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

function generateRandomNumber(lowNumber, highNumber){
 return Math.floor(Math.random() * (lowNumber - highNumber)) + highNumber;
}

function checkUserGuess(){
  var guessedNumber = parseInt(userGuess.value);
  userGuessText.innerText = guessedNumber;
  if (guessedNumber > randomNumber){
    userHint.innerText = "That is too high";
  } else if (guessedNumber < randomNumber){
    userHint.innerText = "That is too low";
  } else if (guessedNumber === randomNumber){
      increaseNumberRange();
      userHint.innerText = "You got it! Now guess between " + lowNumber + " & " + highNumber + ", or hit reset to enter range";
      minRange.value = lowNumber;
      maxRange.value = highNumber;
    } else {
      userHint.innerText = "*ahem* That's not a number";
    }
  }

function checkRange(){
  var guessedNumber = parseInt(userGuess.value);
  if (guessedNumber < lowNumber || guessedNumber > highNumber){
    userGuessText.innerText = "oops!";
    userHint.innerText = "Guess a number between " + lowNumber + " & " + highNumber;
  }
}

function increaseNumberRange(){
  var guessedNumber = parseInt(userGuess.value);
  if (guessedNumber === randomNumber) {
    highNumber = highNumber + 10;
    lowNumber = lowNumber - 10;
    randomNumber = generateRandomNumber(lowNumber, highNumber);
    userHint.innerText = "You got it! Now guess between " + lowNumber + " & " + highNumber + ", or hit reset to enter range";
    console.log(highNumber);
    console.log(lowNumber);
    console.log(randomNumber);
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
