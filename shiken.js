process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    let N = lines[0];
    let kei = 0;
    
    
      for(let i = 1; i <= N; i++){
         let line1 = lines[i].split(" ");
        // sum=350
          let sum = 0;
          for(let j = 1; j <= 5; j++){
             sum += Number(line1[j]);
           }
    
          let ri = Number(line1[2]) + Number(line1[3]);
          let bun = Number(line1[4]) + Number(line1[5]);
    
            
            if(sum >= 350){
              if(line1[0] === "s" && ri >= 160){
                kei++;
             }else if(line1[0] === "l" && bun >= 160){
                 kei++
            }
        
            }
       
        
     }
    
     console.log(kei);

 });
