"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
input : process.stdin,
output : process.stdout,
prompt : "HAI please input your word to process pigLatin>"
});

rl.prompt();
rl.on('line', (answer) => {
pigLatin(answer);
  });


function pigLatin(sentence) {
  var pigLatin = '';
    var regex = /[aeiou]/gi;
    if (sentence[0].match(regex)) {
      pigLatin = sentence;
    } else {
      var vowelIndice = sentence.indexOf(sentence.match(regex)[0]);
      pigLatin = sentence.substr(vowelIndice) + sentence.substr(0, vowelIndice) + 'ay.';
    }
    // return pigLatin;
    console.log(pigLatin);
  }

  function splitSentence(sentence){
    var Newsentence = pigLatin.split(' ').length;
      console.log(splitSentence(Newsentence));
  }
