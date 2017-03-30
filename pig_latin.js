"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

rl.prompt();

rl.on('line', (line) => {
  let inputSentence = line.split(' ');
  var outputSentence = '';
  for (let i=0 ; i < inputSentence.length ; i++){
    outputSentence += `${pigLatin(inputSentence[i])} `;
  }
  console.log(outputSentence.trim());
  rl.prompt();
}).on('close', () => {
  process.exit(0);
});

function pigLatin(sentence){
  let temp = '';
  let wordSlice = sentence.slice(sentence.search(/[aiueo]/i));

  for(let i=0 ; i<sentence.length ; i++){
    if(/[^aiueo]/i.test(sentence[i])){
      temp += sentence[i];
    } else
      break;
  }

  if(/[aiueo]/i.test(sentence[0])){
    return wordSlice;
  } else {
    return wordSlice + temp + 'ay'
  }
}
