function maxSequence(arr){
    let sum = 0;
    let total;

    for (let i = 0; i < arr.length; i++) {
        for (let z = 0; z < arr.length; z++) {
            let mrafk = arr.slice(i, (arr.length) - z);
            total = 0;
            for (let y = 0; y < mrafk.length; y++){
                total = total + mrafk[y]
            }
            if (total > sum){
                sum = total
            }
        }
    }
    return sum
}

console.log(maxSequence([7,4,11,-11,39,36,10,-6,37,-10,-32,44,-26,-34,43,43]))