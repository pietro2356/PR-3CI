//file JS per test

//andiamo a generare un numero pseudo-random
var randomNumber = Math.floor(Math.random()*100)+1;

//andiamo a dafinire le classi dell'html dove il JS deve agire
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var giessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

function checkGuess(){
    var userGuess = Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent = 'Previus guesses;
    }
}