"use strict"

//use readline to fix this challenge
const readline = require('readline');

const rl = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout,
    prompt: " Masukin Kata? "
  });

  rl.prompt();
  rl.on('line', (user_input) => {
    console.log(`KATANYA : ${user_input}`);
    console.log('HASILNYA : '+ pigLatin(user_input));
    rl.prompt();
  });

function pigLatin(sentence) {
  let perkata = sentence.split(' ');
  let hasilAkhir=[];
  let kataFinish='';

  //SEMUA KATA
  for(let i=0;i<perkata.length;i++)
  {
    let panjangPerkata = perkata[i].length;

    //PERKATA CHECK VOKAL
    let tampungIndeksVokal=null;
    for(let j=0;j<panjangPerkata;j++){
      if(perkata[i][j] === 'a' || perkata[i][j] === 'i' || perkata[i][j] === 'u' || perkata[i][j] === 'e' || perkata[i][j] === 'o'){
        if(tampungIndeksVokal==null){
            tampungIndeksVokal=j;
          }
      }
    }

    //PROSES EDIT PIG
    let kataEditAwal="";
    let kataEditAkhir="";
    let kataSelesai="";
    for(let j=0;j<panjangPerkata;j++){
      if(j>=tampungIndeksVokal){
        kataEditAwal+=''+perkata[i][j];
      }

      else if(j<tampungIndeksVokal){
        kataEditAkhir+=''+perkata[i][j];
      }
    }

    if(tampungIndeksVokal==null){
      kataSelesai = 'ERROR';
    }

    else if(tampungIndeksVokal==0){
      kataSelesai = kataEditAwal+''+kataEditAkhir;
    }

    else{
      kataSelesai = kataEditAwal+''+kataEditAkhir+'ay';
    }

  kataFinish+=kataSelesai+' ';
  }
  //AKHIR FOR
  return kataFinish;
}
