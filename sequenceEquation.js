

function permutationEquation(p) {
    // Write your code here
   let result = [];
    for (const i of p) {
        console.log(i)
        console.log(p[p[i-1]-1]-1)
        result[p[p[i-1]-1]-1] =i
 console.log(result)
    }
}
 //let p=  [ 2, 3, 1 ] 
 let p = [4, 3, 5 ,1 ,2]
 permutationEquation(p)