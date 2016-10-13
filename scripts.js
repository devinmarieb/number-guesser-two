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
  rangeError();
  minMaxError();
  disableRange();
  resetButtonEnable();
  console.log(randomNumber);
})

guessButton.addEventListener("click", function(){
  $(".guess-text").css("visibility", "visible");
  clearButtonEnable();
  checkUserGuess();
  checkRange();
})

clearButton.addEventListener("click", function(){
  clearButtonDisable();
})

resetButton.addEventListener("click", function(){
  resetProgram();
})

function generateRandomNumber(lowNumber, highNumber){
  return Math.floor(Math.random() * (lowNumber - highNumber)) + highNumber;
}

function rangeError(){
  if(minRange.value === "" || maxRange.value === "") {
    userGuessText.innerText = "oops!";
    userHint.innerText = "What are you doing? Hit reset and enter a range to play";
    guessButtonDisable();
  } else {
    userHint.innerText = "Guess a number between " + lowNumber + " & " + highNumber;
  }
}

function minMaxError(){
  if(minRange.value > maxRange.Value || maxRange.value < minRange.value){
    userGuessText.innerText = "oops!";
    userHint.innerText = "That's not how numbers work";
    guessButtonDisable();
  }
}

function checkRange(){
  var guessedNumber = parseInt(userGuess.value);
  if (guessedNumber < lowNumber || guessedNumber > highNumber){
    userGuessText.innerText = "oops!";
    userHint.innerText = "Guess a number between " + lowNumber + " & " + highNumber;
  }
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
    winTheGame();
    $(".guess-text").css("visibility", "hidden");
  } else {
    userHint.innerText = "*ahem* That's not a number";
  }
}

function winTheGame(){
  userHint.innerText = "You got it! Now guess between " + lowNumber + " & " + highNumber + ", or hit reset to enter range";
  minRange.value = lowNumber;
  maxRange.value = highNumber;
  userGuess.value = "";
  clearButtonDisable();
}

function increaseNumberRange(){
  var guessedNumber = parseInt(userGuess.value);
  if (guessedNumber === randomNumber) {
    highNumber = highNumber + 10;
    lowNumber = lowNumber - 10;
    randomNumber = generateRandomNumber(lowNumber, highNumber);
    userHint.innerText = "You got it! Now guess between " + lowNumber + " & " + highNumber + ", or hit reset to enter range";
    console.log(lowNumber);
    console.log(highNumber);
    console.log(randomNumber);
  }
}

function disableRange(){
  $(".range-container").css("opacity", .5);
  submitRangeButton.disabled = true;
  minRange.disabled = true;
  maxRange.disabled = true;
}

function guessSectionEnable(){
  guessButton.disabled = false;
  userGuess.disabled = false;
  $(".guess").css("opacity", 1);
  $(".submit").css("opacity", 1);
}

function clearButtonEnable(){
  clearButton.disabled = false;
  $(".clear").css("opacity", 1);
}

function clearButtonDisable(){
  clearButton.disabled = true;
  userGuess.value = "";
  $(".clear").css("opacity", .5);
}

function resetButtonEnable(){
  resetButton.disabled = false;
  $(".reset").css("opacity", 1);
}

function guessButtonDisable(){
  guessButton.disabled = "true";
  userGuess.disabled = "true";
  $(".submit").css("opacity", .5);
  $(".guess").css("opacity", .5);
}

function resetProgram() {
  location.reload();
  resetButton.disabled = true;
  $(".reset").css("opacity", .5);
}
