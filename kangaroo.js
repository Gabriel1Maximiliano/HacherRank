
let x1 =0 ;  //0 2 5 3
let v1 =2
let x2 = 5
let v2 = 3
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
  console.log('funciona')

 let flag = false;

 if( x1 == x2 && v1 == v2 ){
    return 'YES'
 }

 if(v1 == v2 && x1 > x2){
    return 'NO'
 }
 if(v1 == v2 && x1 < x2){
    return 'NO'
}else{
    
  let jumps = (x1-x2)/(v2-v1);
  if(Number.isInteger(jumps) && jumps > 0 ){
    return 'YES'
  }else{
    return 'NO'
  }
}
 
}
kangaroo(x1, v1, x2, v2);