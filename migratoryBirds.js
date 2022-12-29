function migratoryBirds(arr) {
    // Write your code here

let obj ={}

  
for (let i = 0; i < arr.length; i++) {
    if(!Object.hasOwn(obj, arr[i])){

        obj[arr[i]] = 1
    }else{
        obj[arr[i]]= obj[arr[i]]+1
    }
    
}
let mayor =0;
let indice = 0;
console.log(obj)
for(const [key, value] of Object.entries(obj)){
    if(value > mayor){
        mayor = value;
        indice= key
console.log(value)
    }
    console.log(value)
    console.log(key)
  }
console.log(indice)
}
let arr = [1,1,1, 4, 4, 4, 5, 3,3,3]
migratoryBirds(arr)

