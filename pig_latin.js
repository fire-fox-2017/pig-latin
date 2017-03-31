"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt:'>>>'
});
rl.prompt();
rl.on('line',(answer) => {
  pigLatin(answer);
  rl.prompt();
});
rl.on('close',()=>{
  console.log('Thank you');
})

function pigLatin(sentence) {
  // Your pig latin implementation here...
  var words = sentence.split(" ");
  var regex =/[aiueo]/gi;
  var textPigLatin ='';
  var numConvert = 0;

  for(let i=0;i<words.length;i++){
    var word = words[i];
    if(word[0].match(regex)){
      textPigLatin += word+" ";
    }else{
      numConvert = numConvert +1;
      var firstVowelInWord = word.search(regex);
      textPigLatin += word.substr(firstVowelInWord,word.length)+word.substr(0,firstVowelInWord)+"ay. ";
    }
  }
  console.log("Converted into Pig Latin : "+textPigLatin);
  console.log("Number of Words Converted : "+numConvert);
}
