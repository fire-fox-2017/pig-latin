"use strict"

//use readline to fix this challenge
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: "input kata  : "
});

rl.prompt();

rl.on('line', (line) => {
		pigLatin(line);
	  console.log("input lagi atau keluar (Ctrl+c)!");
	  rl.setPrompt("input :")
	  rl.prompt();
}).on('close', () => {
  console.log("Terima kasih");
  rl.close();
});

function pigLatin(sentence) {
  // Your pig latin implementation here...
  var arrVowel=["a","i","u","e","o"];
  var oldKata=sentence.toLowerCase();
  var newKata="",status=false;
  for(var i=0;i<oldKata.length;i++){
    for(var j=0;j<arrVowel.length;j++){
      var temp=oldKata.charAt(i);
      if(temp===arrVowel[j]&&status===false){
        if(i===0){
          newKata=oldKata.slice(i,oldKata.length)+oldKata.slice(0,i)+"way";
          status=true;
        }else if(i>0){
          newKata=oldKata.slice(i,oldKata.length)+oldKata.slice(0,i)+"ay";
          status=true;
        }else{
					newKata=oldKata.split("").reverse().join("")+"ay";
					status=true;
				}
      }
    }
  }
  console.log(newKata) ;
}
