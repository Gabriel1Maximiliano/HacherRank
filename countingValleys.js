function countingValleys(steps, path) {
    // Write your code here
    let valles =0;
    let referenciaCero=0;

    for (let i = 0; i < path.length; i++) {
       if(path[i] == 'D'){
        referenciaCero--;
       }else{
        if(referenciaCero === -1){
            valles++;
        }
        referenciaCero++;
       }
        
    }
    return valles;

}
let steps =8
let path  =[U,D,D,D,U,D,U,U]
countingValleys(steps, path)