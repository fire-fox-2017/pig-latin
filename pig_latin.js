"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> '
});

rl.prompt();

rl.on('line', (line) => {
  switch(line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(ConvertCompleteSentence(line));
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
function ConvertSingleWord(word) {
  // Your pig latin implementation here...
  let tempChar='';
  let listVowel = ['a','i','u','e','o','A','I','U','E','O']
  if(listVowel.indexOf(word[0])==-1){
    while(listVowel.indexOf(word[0])==-1){
      tempChar = word[0];
      word=word.substr(1);
      word=word+tempChar;
    }
      word=word+"ay";
  }
  return word;
}

function ConvertCompleteSentence(sentence){
  var tempWord='';
  var tempSentence=[];
  var words = sentence.split(" ");
  for(var i =0;i<words.length;i++){
          tempWord=ConvertSingleWord(words[i]);
          tempSentence.push(tempWord);
  }
  return tempSentence.join(" ");

}
