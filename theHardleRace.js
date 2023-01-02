function hurdleRace(k, height) {
    // Write your code here

    height.sort(function(a,b){
        return a-b;
    })
    let valor = height[height.length -1]
   let resta = k - valor 
    if(resta >= 0){
        console.log('hola')
    return 0;
  }else{
    console.log(Math.abs(height[height.length -1] - k))
    return Math.abs(height[height.length -1] - k)
  }
}
{ k: 4 }
{ height: [ 1, 6, 3, 5, 2 ] }
let k =4
let height =[ 1, 6, 3, 5, 2 ] 
hurdleRace(k, height)