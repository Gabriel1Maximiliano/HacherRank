
function angryProfessor(k, a) {
    // Write your code here
console.log({k})
console.log({a})
let presentes =0;
 a.sort(function(a,b){
    return a-b
 })
console.log(a)
for (let i = 0; i < a.length; i++) {
   if(a[i] <= 0){
    presentes = presentes +1;
   }else{
    break;
   }
    
}
console.log(presentes)
if (presentes >= k) {
   
    return 'NO';
}else{
   

    return 'YES';
}
}





{ k: 3 }
{ a: [ -1, -3, 4, 2 ] }
{ k: 2 }
{ a: [ 0, -1, 2, 1 ] }
let k=3;
let a = [ -1, -3, 4, 2 ]
angryProfessor(k, a);