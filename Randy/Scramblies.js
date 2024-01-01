function scramble(str1, str2) {
    let gibberish = str1.split('');
    let desiredWord = str2.split('');

    let result = desiredWord.filter((word) => word.length > 6);

    let boolChecker = [];
    for (let i = 0; i < gibberish.length; i++) {
        if (desiredWord.includes(gibberish[i]) == true && !boolChecker.includes(gibberish[i])){
            boolChecker.push(gibberish[i]);
            continue
        }

    }
    
    if (boolChecker.length >= desiredWord.length){
        console.log(boolChecker)
        return true
    }
    console.log(boolChecker)
    return false
}

function hasMoreThanOneEntry(frofk){
    let sum;
    let result = [];
    frofk.forEach((frug) => {
        sum = 0;
        for (let frof in frofk){
            if (frug == frofk[frof]){
                sum += 1
            }
        }
        if (sum > 1){
            result.push(`there are ${sum} '${frug}'s`);
        }
    })
    return result
}

// console.log(scramble('rwwwww','rww'))
// console.log(hasMoreThanOneEntry(['r','w','w']))

const words = ['spray', 'elite', 'exuberant','spray','exuberant', 'destruction','exuberant', 'present'];

const result = words.filter((word) => word == word);

function duplicate(element, index, array){

    let shadowArr = array.toSpliced(index, 1);

    for (let val in shadowArr){
        if(element == shadowArr[val]){
            return true
        }
    }
    return false

}
console.log(words.filter(duplicate));
// console.log(result);
// console.log(duplicate('spray', 0, words));