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
  console.log("PL start: " + sentence);

/*
Iteration One: CONVERT SINGLE WORD

GET a word from user input.
// IF the word starts with a vowel, don't change it.
// ELSE replace the word with its pig latin equivalent.
//   GET all of the consonants before the first vowel in the word.
//   SET the consonants at the end of the word and add the suffix "ay."
// ENDIF
PRINT the pig-latin-ified word.
*/

  let result = "";
  // IF the word starts with a vowel, don't change it.
  if(/^[aiueo]/.test(sentence)) {
    result = sentence + "yay";
  } else { // ELSE replace the word with its pig latin equivalent.
    //   GET all of the consonants before the first vowel in the word.
    let n = sentence.search(/[aiueo]/);
    console.log("n=" + n);
    let first = sentence.slice(0, n);
    let second = sentence.slice(n);
    console.log("first = " + first);
    console.log("second = " + second);

    //   SET the consonants at the end of the word and add the suffix "ay."
    result = second + first + "ay";
    // ENDIF
  }


  return result;
}

rl.prompt();
rl.on('line', (input) => {
  console.log('User input: ' + input);
  // call pigLatin function
  console.log("Calling pigLatin function(" + input + ")");

  console.log("Pig Latin : " + pigLatin(input));
  
  // prompt user again for input
  rl.prompt();

});
