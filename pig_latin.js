"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Input your word >'
});

rl.prompt();

rl.on('line', (line) => {
  let tempInput = line.trim();
  let tempSplit = tempInput.split(' ');
  let result = '', final;
  for (let i = 0; i < tempSplit.length; i++) {
    result += pigLatin(tempSplit[i])+' ';
  }
  console.log(result);
  rl.prompt();
}).on('close', () => {
  console.log('Good bye');
  process.exit(0);
});

function pigLatin(sentence) {
  // Your pig latin implementation here...
  let tempConst = '', resultPig;
  var tempIndex = sentence.search(/[aiueo]/);
  var tempSlice = sentence.slice(tempIndex);

  if (/[aiueo]/i.test(sentence[0])) {
    resultPig = sentence;
  } else {
    for (var i = 0; i < sentence.length; i++) {
      if (/[^aiueo]/gi.test(sentence[i])) {
        tempConst += sentence[i];
      } else {
        break;
      }
    }
    resultPig = tempSlice+tempConst+'ay';
  }

  return resultPig;
}
