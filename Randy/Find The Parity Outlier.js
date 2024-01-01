function findOutlier(integers){
    let groupOdd = [];
    let groupEven = [];
    for (let i = 0; i < integers.length; i++) {
        if(integers[i] % 2 == 0){
            groupEven.push(integers[i]);
            continue
        }
        groupOdd.push(integers[i]);
    }
    if (groupOdd.length > groupEven.length){
        return Number(groupEven.join(''))
    }
    return Number(groupOdd.join(''))


}

console.log(findOutlier([2,6,8,10,3]))