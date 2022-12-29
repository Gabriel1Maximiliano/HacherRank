function bonAppetit(bill, k, b) {
    // Write your code here
    let response = ''
    bill.splice(k,1)// aca digo que empiece a eliminar desde el k y solamente 1 qeu es ese k 
    console.log(bill)
    const billCost = bill.reduce((previous, next) => previous+next, 0) / 2
    if (billCost == b){
        response = 'Bon Appetit'
    } else {
        response = b - billCost
    }
    console.log(response)

} 
let bill = [3, 10, 2, 9] // boleta
let k =1;// elemento que ana no come
let b = 12;// dinero que trae para la cuenta
bonAppetit(bill, k, b)