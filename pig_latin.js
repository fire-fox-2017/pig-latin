"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Enter your input: "
});

function pigLatin(sentence) {
  // Your pig latin implementation here...
  // console.log("PL start: " + sentence);

  var splitSentence = sentence.split(' ');
  var finalResult = [];
  for (let i=0 ; i < splitSentence.length ; i++) {
    let result = "";
    // IF the word starts with a vowel, don't change it.
    if(/^[aiueo]/.test(splitSentence[i])) {
      result = sentence + "yay";
    } else { // ELSE replace the word with its pig latin equivalent.
      //   GET all of the consonants before the first vowel in the word.
      let n = splitSentence[i].search(/[aiueo]/);
      // console.log("n=" + n);
      let first = splitSentence[i].slice(0, n);
      let second = splitSentence[i].slice(n);
      // console.log("first = " + first);
      // console.log("second = " + second);

      //   SET the consonants at the end of the word and add the suffix "ay."
      result = second + first + "ay";
      // ENDIF
    }

    // store each word in the sentence in finalResult array
    finalResult.push(result);
  }

  // return the converted Pig Latin words as a string.
  return finalResult.join(' ');
}

rl.prompt();
rl.on('line', (input) => {
  console.log('User input: ' + input);
  console.log("Calling pigLatin(" + input + ")...");
  console.log("Pig Latin : " + pigLatin(input) + "\n");

  // prompt user again for input
  rl.prompt();
});
