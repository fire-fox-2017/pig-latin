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
rl.prompt();
  }).on('close', () => {
    console.log('You did great Thank you!!');
    process.exit(0);
  });


function pigLatin(sentence) {
  let pigText = sentence.split(" ");
  let indexVocal = null;
  let firstText = '';
  let secondText = '';
  let fixText = [];
  let x = '';
  for (let i = 0; i <pigText.length ; i++){

    for (let j = 0; j < pigText[i].length ; j ++){
      if(pigText[i][j] == 'a' || pigText[i][j] == 'i' || pigText[i][j] == 'u' || pigText[i][j] == 'e' || pigText[i][j] == 'o'){
         indexVocal = j;
         firstText = pigText[i].slice(0, indexVocal);
         secondText = pigText[i].slice(indexVocal, pigText[i].length);
         break;
      }
    }
    if(firstText == ''){
      fixText.push(pigText[i])
    }
    else if(secondText == ''){
      fixText.push('ERROR');
    }
    else{
      x = secondText + firstText + 'ay.'
      fixText.push(x);
    }
  }
  var finalText = fixText.join(" ");
  console.log(finalText);
  }
