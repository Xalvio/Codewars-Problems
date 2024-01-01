function numbersToRoman(numbers){

    // this just converts numbers into strings and keys that can be iterable
    let digits = [numbers].toString().split('');

    let numerals = new Map();
    numerals.set(1, 'I');
    numerals.set(4, 'IV');
    numerals.set(5, 'V');
    numerals.set(9, 'IX');
    numerals.set(10, 'X');
    numerals.set(40, 'XL');
    numerals.set(50, 'L');
    numerals.set(90, 'XC');
    numerals.set(100, 'C');
    numerals.set(400, 'CD');
    numerals.set(500, 'D');
    numerals.set(900, 'CM');
    numerals.set(1000, 'M');

    let digitSize = new Map();
    digitSize.set(1, 1);
    digitSize.set(2, 10);
    digitSize.set(3, 100);
    digitSize.set(4, 1000);

    let sum = []; 
    let plark = digits.reverse();

    // the main system will check the digit of the number and for every digit of the number it will fetch the digit value and multiply it with the digits numeric value
    for (let i = 1; i <= digits.length; i++) {
        let multiplier = digitSize.get(i);

        // this is in charge of printing the "1s" in every digit
        if(plark[i - 1] < 4){
            for (let x = 1; x <= plark[i - 1]; x++) {
                sum.push(numerals.get(1 * multiplier));
            }
        }
        // this is in charge of printing the "4s" in every digit
        if(plark[i - 1] == 4){
            sum.push(numerals.get(4 * multiplier));
        }
        // this is in charge of printing the "5s and 1s" in every digit
        if(plark[i - 1] < 9 && plark[i - 1] > 4){
            for (let y = 1; y <= plark[i - 1] - 5; y++) {
                sum.push(numerals.get(1 * multiplier));
            }
            sum.push(numerals.get(5 * multiplier));
        }
        // this is in charge of printing the "9s" in every digit
        if(plark[i - 1] == 9){
            sum.push(numerals.get(9 * multiplier));
        }
    }
    return sum.reverse().join('')
}
console.log(numbersToRoman(7))