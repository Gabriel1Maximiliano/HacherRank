function viralAdvertising(n) {
    // Write your code here
    let advertidos = 5, like = 0, totalLikes = 0;
    for (let i = 1; i <= n; i++) {
        like = Math.floor(advertidos / 2);
        advertidos = like * 3;
        totalLikes += like;
    }
    return totalLikes;
}
let  n=  3 
viralAdvertising(n)