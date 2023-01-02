
function utopianTree(n) {
    // Write your code here

    let contador =0;
    let alturaTotal =0;

    while( contador <= n ){
        if(contador === 0){

            alturaTotal = 1;
            contador= contador +1;
            continue;
        }
        console.log(contador % 2)
        if( contador % 2 ){
            alturaTotal = alturaTotal * 2;
        }else{
            alturaTotal = alturaTotal +1;
        }
        contador= contador +1;
    }
return alturaTotal;
}
{ n: 0 }
{ n: 1 }
let n = 1;
utopianTree(n);