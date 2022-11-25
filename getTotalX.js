/**
 * este ejercicio nos pide sacar los divisores comunes de el primer array 
 * 2
 *    -> 2 , 4 , 8, 16 
 * 4
 * 
 * y luego en el segundo array sacar lo multiplos de los numeros
 * 16
 * 
 * 32    ---> 2,4,8 ,16  notemos que la condicion de borde nos la da el menor numero 
 *                       del array dos en este caso 16 por o que no tiene sentido seguir 
 *                       buscando divisores en el array 1
 * 
 * 96
 */

// let a = [2, 4]
// let b = [16, 32, 96]
let a =[3, 4]
let b =[24, 48]

function getTotalX(a, b) {
    // Write your code here
let finalArray1 =[];

    a.forEach(element => {
        console.log(element)
        let aux1 =[];
        for (let index = 0; index <= 100; index++) {
            if(index % element === 0){
                aux1.push(index);
            }
        }
        finalArray1.push(aux1);
    });
console.log(finalArray1)


let finalArray2 =[];
finalArray1.forEach((el)=>{
   let aux2 = [];
    el.forEach((el2)=>{
       if(el2 <= b[b.length-1]){
           console.log(el2)
           aux2.push(el2);
       }
    })
    finalArray2.push(aux2);
})
console.log(finalArray2)
  
b.forEach((el)=>{
    console.log(el)
   let aux3= [];
   for (let index = 0; index < el; index++) {
    if(el % index === 0){
        aux3.push(index);
    }
    
   }
   finalArray2.push(aux3);
})
let finalArray3 = finalArray2.flat(10).sort((a,b)=>a-b);
console.log(finalArray3)


let finalArray4 =[];

// tiene que haber un numero por cada elemento de la matriz 

let cant = a.length + b.length;
finalArray3.forEach((el)=>{
    
    let contador =0;
    finalArray3.forEach((el2)=>{
        if(el === el2){
            contador++;
           console.log(contador)
           if(contador == cant){
            console.log(el)
            finalArray4.push(el);
        }
        }
       
     })
  

})
const set = new Set(finalArray4);
let rta = Array.from(set);
console.log(rta)

/**
 *  const ints = [];
    
    for (let i = 1; i <= 100; i++) {
        const aCondition = a.every(num => i % num === 0);
        const bCondition = b.every(num => num % i === 0);
        
        if (aCondition && bCondition) ints.push(i);
    }
    
    return ints.length
 */
//     console.log(obj2)
//    let divisores = Object.values(obj)
//    let multiplos = Object.values(obj2)
//    console.log(divisores.flat());
//    console.log(multiplos.flat());
//    let divFiltrados =divisores.flat()
//    let multFiltrados =multiplos.flat()
//    let auxdiv=[];
//    let auxMul= [];
//    for(let i =0; i < multFiltrados.length;i++){
   
//     if(   b[0] % multFiltrados[i] === 0 ){
//         auxMul.push(multFiltrados[i]);
//     }
// } 
// console.log(divFiltrados)
//    for(let i =0; i < divFiltrados.length;i++){
   
//            if( divFiltrados[i] % a[a.length-1] === 0 ){
//             auxdiv.push(divFiltrados[i]);
//            }
//    } 
//    console.log(auxdiv.sort()) 
//    const dataArr = new Set(auxdiv);
//    const dataArr2 = new Set(auxMul);
//    let div = [...dataArr];
//    let mul = [...dataArr2]
  
//    let nuevo = div.filter(n => n!== a[0] )
//    console.log(nuevo)
//    console.log(mul)
//    const array3 = nuevo.concat(mul);
//    console.log(array3)
//    let duplicados = [];
 
// const tempArray = [...array3].sort();
 
// for (let i = 0; i < tempArray.length; i++) {
//   if (tempArray[i + 1] === tempArray[i]) {
//     duplicados.push(tempArray[i]);
//   }
// }
 
// console.log(duplicados);
// let respuesta = duplicados.length;
}
getTotalX(a, b);