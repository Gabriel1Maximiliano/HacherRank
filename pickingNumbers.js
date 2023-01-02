function pickingNumbers(a) {
    // Write your code here
    let actual =0;
    let posterior = 1;
    
    let contador =0;
    let maximo =0;
    a.sort(function(a,b){
        return a-b
    })
    console.log(a)
    for (let puntero1 = 0; puntero1 < a.length; puntero1++) {
        let resta = a[actual] - a[posterior];
        console.log( resta)
        if( resta === 1 || resta === 0 || resta === -1 ){
            contador++ ;console.log(contador)
            posterior++
         }else{
             if( contador > maximo ){
                 maximo= contador;
                }
                
                contador=0
                actual++;
                posterior= actual+1;
            }
    }
    if(posterior === a.length){
       if(contador > max){
          maximo = contador;
       }
    }
 console.log(maximo)
       //return maximo +1
       let puntero1 = 0;
       let puntero2 = 1;
       
       while(puntero1 < a.length && puntero2 < a.length) {
           if(Math.abs(a[puntero1] - a[puntero2]) > 1) {
               puntero1++;
               puntero2++;
           } else {
               puntero2++;
           }
       }
       console.log(Math.abs(puntero1 - puntero2));
       //return Math.abs(puntero1 - puntero2)
   let masUNo = 1;
   let menosUno =1;
   let max=0;
   for (let i = 0; i < a.length; i++) {
    masUNo = 1;
    menosUno =1;
     for (let j = i+1; j < a.length; j++) {
        if(a[j] == a[i]+1){
            masUNo++;
        }else if(a[j] == a[i]-1){
            menosUno++
        }else if(a[j] == a[i]){
            masUNo++;
            menosUno++;
        }       
        
     }
    if( masUNo >= menosUno && masUNo > max ){
        max = masUNo;
    }else if(masUNo < menosUno && menosUno > max){
        max = menosUno;
    }
   }
   console.log(max)
return max;
}

let a = [4, 6, 5, 3, 3, 1]
let b = [7 ,12 ,13 ,19 ,17 ,7 ,3 ,18 ,9 ,18, 13 ,12 ,3 ,13 ,7 ,9 ,18 ,9 ,18, 9 ,13 ,18 ,13 ,13 ,18 ,18 ,17 ,17 ,13 ,3 ,12 ,13 ,19 ,17 ,19 ,12 ,18 ,13 ,7 ,3 ,3 ,12 ,7 ,13 ,7 ,3 ,17 ,9 ,13 ,13 ,13 ,12 ,18 ,18 ,9 ,7 ,19 ,17 ,13 ,18 ,19 ,9 ,18 ,18 ,18 ,19 ,17 ,7 ,12 ,3 ,13 ,19 ,12 ,3 ,9 ,17 ,13 ,19 ,12 ,18 ,13 ,18 ,18 ,18 ,17 ,13 ,3 ,18 ,19 ,7 ,12 ,9 ,18 ,3 ,13 ,13 ,9 ,7]
// 30 es la respuetsa
pickingNumbers(b);