"use strict"

//use readline to fix this challenge
const readline = require('readline');

function pigLatin(sentence) {
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

var rl = readline.createInterface(process.stdin, process.stdout);
var recursiveAsyncReadLine = function(){
  rl.question("What would you like to piglatinise?", function(wor){
    wor=wor.split(" ");
    var res=[];
      for(var i=0; i<wor.length; i++){
        res.push(pigLatin(wor[i]));
      }
    console.log(res.join(" "));
    recursiveAsyncReadLine();
  });
};
recursiveAsyncReadLine();
