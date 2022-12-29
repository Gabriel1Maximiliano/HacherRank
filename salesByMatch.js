
function sockMerchant(n, ar) {
    // Write your code here
    let contadorDePares =0;
    const pares = new Set();
    for (const sock of ar) {
        if(pares.has(sock)   ){
            console.log(sock)
            contadorDePares++
            pares.delete(sock)
        }else{

            pares.add(sock)
        }
      
           
        
    }
    console.log(contadorDePares )
  console.log(pares)
}
n=9;
ar = [10, 20 ,20 ,10, 10, 30, 50, 10, 20]

sockMerchant(n, ar)