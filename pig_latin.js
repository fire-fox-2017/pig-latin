"use strict"

//use readline to fix this challenge
const readline = require('readline');
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'INSERT YOUR WORD(S) HERE >>'
});


function processWord(word) {
  var vowel = /(a|i|u|e|o)/ig;
  var vowelContainer = [];
  var consonantContainer = [];
  var firstVowelInWord;

  if(vowel.test(word[0])) {
    return word;
  } else {
    for(var i = 0; i < word.length; i++) {
      if(vowel.test(word[i])) {
        vowelContainer.push(i);
      }
    }

    firstVowelInWord = vowelContainer[0];
    var pigLatinWord = word.slice(firstVowelInWord, word.length) + word.slice(0, firstVowelInWord) + 'ay';

  }

  return pigLatinWord;

}

function processSentence(sentence) {
  var result = [];
  var arrOfWords = sentence.split(' ');
  for(var i = 0; i < arrOfWords.length; i++) {
      result.push(processWord(arrOfWords[i]));
    }
  return result.join(' ');
}


function pigLatinInReadline() {
  readlineInterface.prompt();
  readlineInterface.on('line', (userInput) => {
    console.log(processSentence(userInput));
    readlineInterface.prompt();
  });

}


pigLatinInReadline();