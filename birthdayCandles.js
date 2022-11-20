


function birthdayCakeCandles(candles) {
    // Write your code here
    // let candles =[3,2,1,3]  las mas altas son dos de 3 unidades de /// altura por lo que el return debe ser un dos
    let mayor = 0;
    let biggestCandle =[]; 
   for(let i = 0; i < candles.length; i++){
       if( candles[i] > mayor ){
        mayor=candles[i];
       
           biggestCandle=[];
           biggestCandle.push(candles[i]);
       }else if(candles[i] == mayor){
        biggestCandle.push(candles[i]);
       }
   }
  
   return biggestCandle.length;

}
let candles =[3,2,1,3]  
birthdayCakeCandles(candles);