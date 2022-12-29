function pageCount(n, p) {
    // Write your code here
//     let totalPagdelLibro = n/2;
//    let voyDeFrente = p/2;
//    let voyDetras= 0;
//    let minimo=0;
//    voyDetras = totalPagdelLibro - voyDeFrente;
   
//    if(voyDeFrente > voyDetras){
//     minimo= voyDetras;
//    }else{
//     minimo = voyDeFrente
//    }
//     console.log(parseInt(minimo))
//  return parseInt(minimo)  

let frente = p/2;
let atras =0;
if(n%2 === 1){
   atras=(n-p)/2;
}else{
    atras = (n-p+1)/2
}
console.log(Math.min(frente,atras))
return Math.min(frente,atras);
}

let n = 5;// cant de pag del libro
let p = 3// pag a la que quiero llegar
 pageCount(n, p);