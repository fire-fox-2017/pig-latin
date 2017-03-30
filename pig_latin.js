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
    let temp_kata = kata.split(' ');
    let str = '';

    for (var i = 0; i < temp_kata.length; i++) {
        str = str + pigLatin(temp_kata[i]) + ' ';
    }

    console.log(str);
}

function pigLatin(sentence) {
    // Your pig latin implementation here...
    let newStr = "";
    let konsonan = "";
    let pola_vokal = /[aiueo]/i;
    let pola_konsonan = /[^aiueo]/i;

    if(pola_vokal.test(sentence[0])){ //cek awal huruf apakah vokal
      newStr = sentence;
    } else {
      for(var i = 0; i < sentence.length; i++){
        if(sentence[i].match(pola_konsonan)){
          konsonan += sentence[i]; //tambah konsonan
        } else {
          newStr = sentence.slice(i) + konsonan + 'ay'; 
          break;
        }
      }
    }

    return newStr;

}
