


function circularArrayRotation(a, k, queries) {
    // Write your code here
    console.log({a})
    console.log({k})
    console.log({queries})

    for (let i = 0; i < k; i++) {
       // rootacon
        let ultimo = a.pop();
        console.log(ultimo)
        a.unshift(ultimo)
        console.log(a)
    }
     let resp = [];
     for (let i = 0; i < queries.length; i++) {
       resp.push(a[queries[i]])
        
     }
console.log(resp)
    return resp

}




let a = [ 1, 2, 3 ] 
let k= 2 
let queries= [ 0, 1, 2 ] 
circularArrayRotation(a, k, queries)