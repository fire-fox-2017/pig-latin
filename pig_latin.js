"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: "Enter Phrase > "
});

rl.prompt();

rl.on('line', (line) => {
  pigLatin(line.trim());
  console.log("If you want to end this program, press Ctrl + C !");
  rl.prompt();
}).on('close', () => {
  console.log("Congratulations! You have learnt Pig Latin Words.");
  process.exit(0);
});

function pigLatin(phrase) {
  // Your pig latin implementation here...
  let words = phrase.match(/[a-z]+/gi);
  let pigLatinPhrase = "";
  for (let i = 0; i < words.length; i++) {
	  let word = words[i].toLowerCase();
	  console.log("*" + word + "*");
	  let firstVowelIndex = word.search(/[aeiou]/);
	  if (firstVowelIndex == -1 || firstVowelIndex == 0) {
		  pigLatinPhrase += word +" ";
	  } else {
		  for (let j = firstVowelIndex; j <  word.length; j++) {
			  pigLatinPhrase += word[j];
		  }
		  for (let j = 0; j < firstVowelIndex; j++) {
			  pigLatinPhrase += word[j];
		  }
		  pigLatinPhrase += "ay ";
	  }
  }
  console.log("Converted Phrase into Pig Latin : " + pigLatinPhrase);
  console.log("Number of Words Converted : " + words.length);
}