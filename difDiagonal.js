/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = 1+5+9= 15. The right to left diagonal = 3+5+9= 17 Their absolute difference is |15 - 17| = 2;.
-1 1 -7 -8 (0,3)(1,2)(2,1)(3,0)
-1-8 -5 -2
 0 9 7 -1
 4 4 -2 1

 */
  let arr1 = [[1,2,3],[4,5,6],[9,8,9]];
  let arr2 = [[-1, 1, -7 ,-8],[-10, -8, -5 ,-2],[0 ,9, 7 ,-1],[4, 4 ,-2,1]];
let primaryDiagonal=0;
let secondaryDiagonal=0;
let difference =0;
let aux = [];

let absDiagDiff = (arr) => {
  console.log(arr[3][3])
    
    for(let i=0 ;i< arr.length; i++){
       console.log(arr[i][i])
         primaryDiagonal  = primaryDiagonal + arr[i][i];
       
  }
  for( let i=0 ;i< arr.length; i++ ){
   aux.push(arr[i].reverse());
   
  }
  for(let i=0 ;i< aux.length; i++){
   
      secondaryDiagonal  = secondaryDiagonal + arr[i][i];
    
}
  
 difference = primaryDiagonal - secondaryDiagonal;

 if( difference < 0){
   difference =   difference*-1;
  
  }
  console.log(difference)
    return difference;
 
  
}
let arr = arr2;

absDiagDiff(arr);
