/**
 * 
 * La primera línea contiene tres números enteros separados por espacios b, y n,m el presupuesto, 
 * la cantidad de modelos de teclado y la cantidad de modelos de unidades USB.
 * b= presupuesto
 * n=modelo de teclado a comprar
 * m= modelo del drive a comprar
 *          10 2 3
            3 1
            5 2 8
 */


function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let suma =0;
    let mayor =0;
    for (let i = 0; i < keyboards.length; i++) {
       for (let j = 0; j < drives.length; j++) {
        suma= (keyboards[i]+ drives[j]) 
     
         if( suma <= b){
            if(mayor < suma){
              
                mayor=suma
            }
         }
       }
     
        
    }
    if(mayor === 0){
        return -1
      }else{
        return mayor
      }
   
}
{ b: 10 }
{ drives: [ 5, 2, 8 ] }
{ keyboards: [ 3, 1 ] }
let b= 10
let drives= [ 5, 2, 8 ]
let keyboards= [ 3, 1 ]
getMoneySpent(keyboards, drives, b)