
function breakingRecords(scores) {
   
    //const dataArr = new Set(data);

    //let result = [...dataArr];
    let bigger =scores[0];
    let lower =scores[0];// Write your code here  2  4 veces rompe el record de mas bajo6
    let min =[];
    let max=[];
    // scores.sort(function(a, b) {
    //     return a - b;
    //   });
    console.log(scores)
    for (const value of scores) {
        if(value > bigger){
            bigger = value;
            max.push(value);
            console.log(max)
 

   }else if( value < lower ){
    lower= value
   min.push(value);
   
   console.log(min)
   } 
}
const myLowerSet = new Set(min);
const myHigherSet= new Set(max);
console.log([...myLowerSet].length)
console.log([[...myHigherSet].length,[...myLowerSet].length])
return [[...myHigherSet].length,[...myLowerSet].length]
}
const scores = [  // 4 0
    3, 4, 21, 36, 10, 28, 35, 5, 24, 42
]
breakingRecords(scores);