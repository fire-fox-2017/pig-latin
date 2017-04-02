"use strict"

//use readline to fix this challenge

const readline = require('readline');

const rl = readline.createInterface({
  input : process.stdin,
  output: process.stdout,
  prompt: 'Input Kata / Kalimat :'
});


function pigLatin(sentence) {
  // Your pig latin implementation here...
  var findvokal = /(a|i|u|e|o)/ig;
  var vokal = [];
  var konsonan = [];
  var newVokal;

  if (findvokal.test(sentence[0])) {
    return sentence;
  } else {
    for (var i=0; i < sentence.length; i++) {
      if(findvokal.test(sentence[i])) {
        vokal.push(i);
      }
    }
    newVokal = vokal[0];
    var text = sentence.slice(newVokal, sentence.length) + sentence.slice(0, newVokal) + 'ay.';
  }
  return text;
  }


  function processJoin(kata) {
    var hasil = [];
    var kataArr = kata.split(' ');
    for(var i = 0; i < kataArr.length; i++) {
        hasil.push(pigLatin(kataArr[i]));
      }
    return hasil.join(' ');
  }


  function pigLatinInReadline() {
    rl.prompt();
    rl.on('line', (userInput) => {
      console.log(processJoin(userInput));
      rl.prompt();
    });

  }

  pigLatinInReadline();
