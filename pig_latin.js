"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Masukkan Input> '
});

rl.prompt();

rl.on('line', (line) => {
  convertKata(line.trim());
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

function convertKata(kata) {
    let temp_sentence = kata.split(' ');
    let str = '';

    for (var i = 0; i < temp_sentence.length; i++) {
        str = str + pigLatin(temp_sentence[i]) + ' ';
    }
    
    console.log(str);
}

function pigLatin(sentence) {
  // Your pig latin implementation here...
let pola_vokal = /[aiueo]/gi;
    let newStr;
    
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i].match(pola_vokal)) {
            newStr = sentence + 'yay';
            break;
        } else {
            let konsonan = sentence[i];
            newStr = sentence.slice(1) + konsonan + 'ay';
            break;
        }
    }
    return newStr;

}
