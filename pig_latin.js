"use strict"

//use readline to fix this challenge
const readline = require('readline');
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Silahkan Masukan Kata atau Kalimat:'
});


function pigLatin(sentence) {
  // Your pig latin implementation here...

    var kalimatSplit=sentence.split(" ");
    var kataSplit =kalimatSplit.join("").split("");
    var hasilKata=[];

  if(kalimatSplit.length>1)
    {
      for(let i=0; i<kalimatSplit.length;i++)
        {
          if((/[aiueo]/g).test(kalimatSplit[i][0]))
          {
            hasilKata.push(kalimatSplit[i]);
          }
          else
            {
              let kata=kalimatSplit[i].split("");
              let hasil=[];
              for(let j=0; j<kata.length;j++){
                if((/[^aiueo]+/g).test(kata[j])){
                    hasil.push(kata[j]);
                }else
                  {
                    hasil.unshift(kata.splice(j,kata.length).join(""));
                    j=kataSplit.length;
                  }
               }
               hasilKata.push(hasil.join("")+"ay");
            }
        }
      return hasilKata.join(" ");
     }


  else{

  if((/[aiueo]/g).test(kataSplit[0]))
    {
      return kataSplit.join("");
    }else{
        for(let i=0; i<kataSplit.length;i++)
        {
          if((/[^aiueo]+/g).test(kataSplit[i])){
              hasilKata.push(kataSplit[i]);
          }else
          {
              hasilKata.unshift(kataSplit.splice(i,kataSplit.length).join(""));
            i=kataSplit.length;
          }
        }
      return hasilKata.join("")+"ay";
    }
  }

}


function pigLatinInReadline() {
  readlineInterface.prompt();
  readlineInterface.on('line', (masukan) => {
    console.log(pigLatin(masukan));
    readlineInterface.prompt();
  });

}

pigLatinInReadline();
