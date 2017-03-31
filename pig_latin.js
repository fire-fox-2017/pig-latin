"use strict"

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('masukan kata untuk di convert ke Pig Latin: ')
rl.prompt()

rl.on('line', (answer) => {
  if(completeSentence(answer)) {
    var splitAns = answer.split(' ')
    let str = ''
    console.log(`input: ${answer} `);
    for (var i = 0;i < splitAns.length; i++) {
      str += " " + pigLatin(splitAns[i])
    }
    console.log(`output: ${str}`);
  } else {
    console.log(`input: ${answer}`);
    console.log(`output: ${pigLatin(answer)} ${splitAns}`);
  }
  rl.prompt()
});

function pigLatin(answer) {
  if (isVowel(answer[0])) {
    return answer
  } else {
    let result = ''
    for (var i = 0;i < answer.length;i++) {
      if(!isVowel(answer[i])) {
        result += answer[i]
        // console.log(result);
      } else {
        break;
      }
    }
    return answer.substring(i,answer.length) + result + 'ay.'
  }
}

function isVowel(c) {
  let vowel = ['a', 'i', 'u', 'e', 'o']
  for (var i = 0;i < vowel.length; i++) {
    if (c == vowel[i]) {
      return true
    }
  }
  return false
}

function completeSentence (answer) {
  var splitAns = answer.split(' ')
  if (splitAns.length > 1) {
    return true
  }
    return false
}