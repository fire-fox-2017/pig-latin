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
    let pola_konsonan = /[^aiueo]/gi;
    let newStr = "";
    let konsonan = '';
    let vokal = '';
    let kalimat = '';

    let temp_sentence = sentence.split('');

    for(var i = 0; i < temp_sentence.length; i++){
      if(temp_sentence[0].match(pola_vokal)){
        newStr = sentence;
        break;
      }

      if(temp_sentence[i].match(pola_konsonan)){
        konsonan += temp_sentence[i];
      } else {
        newStr = sentence.slice(i) + konsonan + 'ay';
        break;
      }
    }

    return newStr;

}
