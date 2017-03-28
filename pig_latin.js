"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tuliskan sesuatu : '
})

function pigLatin(sentence, konsonan = [], akhiran = '') {
  if(/[aiueo]/gi.test(sentence[0])){
    return sentence + konsonan + akhiran
  } else {
      konsonan.push(sentence[0])
      akhiran = 'ay'
      return pigLatin(sentence.slice(1), konsonan, akhiran)
  }
}

rl.prompt();

rl.on('line', (line) => {
  line = line.trim().split(" ")
  if(line.length == 1) {
    console.log("your pig latin result >>", pigLatin(line[0]))
  } else {
    let result = []
    for (let i = 0; i < line.length; i++) {
      result.push(pigLatin(line[i]))
    }
    console.log("your pig latin result >>", result.join(" "))
  }

  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
