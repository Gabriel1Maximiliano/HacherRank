
function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let pairs = 0;
    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {

            if ((ar[i] + ar[j]) % k === 0) {
                pairs += 1;
            }
        }
    }
    console.log(pairs)
    return pairs;
}

let n = 6; let k = 3;

let ar = [1, 3, 2, 6, 1, 2]
divisibleSumPairs(n, k, ar)