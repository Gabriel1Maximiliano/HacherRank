function birthday(s, d, m) {
  
    let counter =0;
   /** // Write your code here
// primera linea e el numero de cuadrados de la barra de chocolate
// número de cuadrados de chocolate
// la terera linea tiene el dia y mes de Ron 

 */
 if(m > s.length ){
       return counter
 }
 
 if(s.length === 1 && m === 1){
      if (s[0] === d) {
           return 1
      }
  }

for(let i = 0; i < s.length ; i++){
    let aux = s.slice(i, i+m)
   
    if (aux.length === m) {
       let sum = aux.reduce((a,b) => a + b, 0)
       if(sum === d){
            counter += 1          
        }
     }
}
console.log(counter)
return counter
}


let s = [1, 2, 1, 3, 2]
 let d = 3;
 let m = 2;
 //3 2
 birthday(s, d, m)