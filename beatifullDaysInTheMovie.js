
function beautifulDays(i, j, k) {
    // Write your code here
    //i: dia de inicio 
//j: dia de fin 
//k:  divisor
// hacemos la resta entre el numero y su reverso 
    let diasHermosso=0

    for(let x=i;x<=j;x++)
    {
       let reverso =x.toString().split('').reverse().join('');// lo doy vuelta
        let resp =Math.abs((x-reverso)/k)
        if(Number.isInteger(resp)) // me fijo si es esntero 
        {
          diasHermosso+=1
        }
    }
    return diasHermosso
}
let  i= 20 
 let j=23 
let  k= 6 
beautifulDays(i, j, k)
