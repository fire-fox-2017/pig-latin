"use strict"

//use readline to fix this challenge
const readline = require('readline');
const prompts = readline.createInterface({
                input: process.stdin,
                output : process.stdout,
                prompt : 'Masukkan text '
});

prompts.prompt();
prompts.on('line',(sentence) => {
  processJoin(sentence);
  prompts.prompt();
});

function pigLatin(sentence) {
let regex_vokal = /([aiueo])/i;
let vokal = [];
let konsonan = [];
let vokal_baru ="";

if (regex_vokal.test(sentence[0])){
  return sentence;
} else {
  // for (let i = 0; i < sentence.length; i++){
  //   if (regex_vokal.test(sentence[i])){
  //     vokal.push(sentence[i]);
  //   }
  // }
  // vokal_baru = vokal[0];
  // let text = sentence.slice(vokal_baru, sentence.length) + sentence.slice(0, vokal_baru) + "ay";
  let text = "";
  for (let i = 1; i < sentence.length ; i++){
    text += sentence[i];
  }
  text += sentence[0] + "ay";
  return text;
}
}

function processJoin(text) {
  let hasil = [];
  let kataArr = text.split(' ');
  for(var i = 0; i < kataArr.length; i++) {
    hasil.push(pigLatin(kataArr[i]))
  }
  console.log(hasil.join(" ")) ;
}




//prompts.question('Masukkan kalimat yang akan di pig-latin ', processJoin());
