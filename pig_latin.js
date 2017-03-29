"use strict"

//use readline to fix this challenge
const readline = require('readline');

function pigLatin(sentence) {
  if(sentence === ""){
    return "Please write down a sentence!";
  }
  var pl="";
  var vow = /[aeiou]/gi;
  if (sentence[0].match(vow)){
  return sentence;
} else {
  var con=sentence.indexOf(sentence.match(vow)[0]);
  pl=sentence.substr(con) + sentence.substr(0,con) + "ay";
}
return pl;
}

var rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout,
  prompt : "What would you like to piglatinise?",
});
rl.prompt();
var res=[];
var wor;
rl.on('line', (line) => {
  wor=line.split(" ");
  for(var i=0; i<wor.length; i++){
      res.push(pigLatin(wor[i]));
    }
  console.log(res.join(" "));
  res=[];
  rl.prompt();
}).on('close', () => {
  console.log(" Have a great day!");
  process.exit(0);
});
