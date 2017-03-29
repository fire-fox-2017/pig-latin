// "use strict"
//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'INPUT>>'
})

rl.prompt();

rl.on('line', (line) => {
    console.log(kalimat(line))
    rl.prompt();
});

function kalimat(input) {
  if (input === '') {
    return 'Error';
  } else {
    input = input.split(' ');
    for (let i = 0; i < input.length; i++) {
      input[i] = satuKata(input[i]);
    }
    return input.join(' ');
  }
  rl.prompt()
}

function satuKata(input) {
  let pattern = /[aiueo]/gi;
  let ditemukan = input.search(pattern);
  if (ditemukan > 0) {
    return input.slice(ditemukan) + '' + input.slice(0, ditemukan) + 'ay';
  } else {
    if (ditemukan === 0) {
      return input;
    }
    return "Error";
  }
}
