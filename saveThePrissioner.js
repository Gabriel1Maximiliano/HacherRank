/**
 * 
 *        n: un número entero, el número de prisioneros
          m: un número entero, el número de dulces
          s: un número entero, el número de la silla para comenzar a repartir dulces de} n 
 * 
 *  
 */
function saveThePrisoner(n, m, s) {
    // Write your code here
console.log({n})
console.log({s})
console.log({m})
// const r = (((m + n) % n) + (s % n) - 1) % n
// return r == 0 ? n : ((r+n) % n)
let resto = m%n 
// si da cero
if(( resto +s-1 )%n === 0){
 return n; // todos reciben igual cantidad de dulces
}else {
  return ( resto +s-1 )%n  
}
}

 let n= 5 
 let s= 1 
let  m= 2 
{ n: 5 }
{ s: 2 }
{ m: 2 }
saveThePrisoner(n, m, s)