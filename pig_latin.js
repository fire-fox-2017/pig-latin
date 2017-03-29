"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Convert your words into Pig Latin Here ==>'
});

function pigread() {
  rl.prompt();
  rl.on('line', (tulisan) => {
    console.log(pigLatin2(tulisan));
    rl.close()
  });

}
pigread();

// converting pig latin word
function pigLatin(word) {
  var hurufhidup = /[aiueo]/gi;
  {
    if (hurufhidup === null) {
      return word + "ay";
    }
  }
    if (word.charAt(0) === "a" || word.charAt(0) === "i" || word.charAt(0) === "u" || word.charAt(0) === "e" || word.charAt(0) === "O"
    || word.charAt(0) === "A" || word.charAt(0) === "I" || word.charAt(0) === "U" || word.charAt(0) === "E" || word.charAt(0) === "O"){
      return word;
  }
    else {
      var hurufmati= word.indexOf(word.match(hurufhidup)[0]);
      var pig =  word.substr(hurufmati) + word.substr(0,hurufmati) + "ay";
    }

    return pig;
}

// converting pig latin sentence
function pigLatin2(sentence) {
  var result = [];
  var split = sentence.split(' ');
  for(var i = 0; i < split.length; i++) {
      result.push(pigLatin(split[i]));
    }
  return result.join(' ');
}
