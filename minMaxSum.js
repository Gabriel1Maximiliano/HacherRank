/**
 * The numbers are 1, 2,3 , 4 and 5. Calculate the following sums using four of the five integers:

Sum everything except1  , the sum is 2+3+4+5.
Sum everything except , the sum is . 1+3+4+5
Sum everything except , the sum is . 1+2+4+5
Sum everything except , the sum is . 1+2+3+5
Sum everything except , the sum is   1+2+3+4
 */
const arr = [1,2,3,4,5]

function miniMaxSum(arr) {
    // Write your code here
  const sumArr = [];
  let aux;

 

  for(let i =0; i < arr.length ; i++){
        let sum =BigInt(0);
      
     aux= arr.filter((n, index)=> index !== i);

     console.log(aux)

   
    for (let index = 0; index < aux.length; index++) {
       
        sum = sum + BigInt(aux[index]);
        
    }
    sumArr.push(sum);
}
for (let k = 1; k < sumArr.length; k++) {
    for (let i = 0; i < (sumArr.length - k); i++) {
        if (sumArr[i] > sumArr[i + 1]) {
            aux = sumArr[i];
            sumArr[i] = sumArr[i + 1];
            sumArr[i + 1] = aux;
        }
    }
}
console.log(sumArr[0]+' '+sumArr[sumArr.length-1]); 
   
    }

let errorCase = [5,5,5,5,5]
miniMaxSum(errorCase)