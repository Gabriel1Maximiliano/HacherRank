/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = 1+5+9= 15. The right to left diagonal = 3+5+9= 17 Their absolute difference is |15 - 17| = 2;.


 */
  let arr = [[1,2,3],[4,5,6],[9,8,9]];
let primaryDiagonal=0;
let secondaryDiagonal=0;
let difference =0;

let absDiagDiff = (arr) => {
    
    for(let i=0 ;i< arr.length; i++){
       
         primaryDiagonal  = primaryDiagonal + arr[i][i];
       
  }
  for(let i = arr.length - 1; i >= 0; i--){
    
   secondaryDiagonal = secondaryDiagonal + arr[i][2-i];
}
  
 difference = primaryDiagonal - secondaryDiagonal;

 if( difference < 0){
   difference =   difference*-1;
  
   return difference;
  }else{
    return difference;
 }
  
}

absDiagDiff(arr);
