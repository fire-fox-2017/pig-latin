"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Your Text Here >>'
});


function olahKata(kalimat) {
  var huruf = /(a|i|u|e|o)/ig;
  var hurufHidup = [];
  var hurufMati= [];
  var hurufHidup1;

  if(huruf.test(kalimat[0])) {
    return kalimat;
  } else {
    for(var i = 0; i < kalimat.length; i++) {
      if(huruf.test(kalimat[i])) {
        hurufHidup.push(i);
      }
    }

    hurufHidup1 = hurufHidup[0];
    var text = kalimat.slice(hurufHidup1, kalimat.length) + kalimat.slice(0, hurufHidup1) + 'ay';

  }

  return text;

}

function processJoin(kata) {
  var hasil = [];
  var kataArr = kata.split(' ');
  for(var i = 0; i < kataArr.length; i++) {
      hasil.push(olahKata(kataArr[i]));
    }
  return hasil.join(' ');
}


function pigLatinInReadline() {
  rl.prompt();
  rl.on('line', (userInput) => {
    console.log(processJoin(userInput));
    rl.prompt();
  });

}


pigLatinInReadline();
