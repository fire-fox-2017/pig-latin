"use strict"

//use readline to fix this challenge
const readline = require('readline');

function pigLatin(sentence) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Hello >>"
  });

  rl.prompt()

  rl.on('line', (answer) => {
  latinSentence(answer)
  console.log(latinSentence(answer));
  rl.prompt()
  })


  function pigLatin(sentence) {
    const pig = "ay"
    var vowels = ["a","e","i","o","u"]
    var arr = sentence.split("");
    var firstVowel = []
    if (vowels.indexOf(sentence.charAt(0)) !== -1) {
      return sentence
    }
    for (var i=0; i<arr.length; i++) {
      if (vowels.indexOf(arr[i]) > -1) {
        firstVowel.push(i)
      }
    }
    var myFirstVowel = firstVowel[0]
    var vowelIndex = arr.splice(0,myFirstVowel)
    var str = arr.join("") + vowelIndex.join("") + pig
    return str
  }

  function latinSentence(sentence) {
    var result = []
    var newArr = sentence.split(" ")
    for (var j=0; j<newArr.length;j++) {
    result.push(pigLatin(newArr[j]))
    }
    return result.join(" ")
  }
}

pigLatin();
