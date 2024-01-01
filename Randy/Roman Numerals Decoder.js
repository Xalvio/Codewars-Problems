// XIV      10     1   5             =  14
// XLV      10    50   5             =  45
// CMXCVI  100  1000  10  100  5  1  =  996
// MMV    1000  1000   5             =  2005
// XCIX     10   100   1   10        =  99

function romanNumeralConverter(roman) {
    // declares an empty array to push in any subtraction notations like 'IV, IX, CM, CD'
    let subtractionNotation = [];

    // converting the input string into an array that can digest each key on its own
    let values = [roman].toString().split('');
    
    // declaring every roman numeral and their corresponding value
    let numerals = new Map();
    numerals.set('I', 1);
    numerals.set('V', 5);
    numerals.set('X', 10);
    numerals.set('L', 50);
    numerals.set('C', 100);
    numerals.set('D', 500);
    numerals.set('M', 1000);

    // converts the letters into numeric values
    for (let i = 0; i < values.length; i++) {
        values[i] = numerals.get(values[i]);
    }

    // in case we get an input with only 1 letter in it we can just return the letters value without wasting more time or energy
    if (values.length <= 1){
        return values[0]
    }
    
    // check for subtraction notation before adding everything together
    for (let i = 0; i < values.length; i++) {
        if (values[i] < values[i+1]){
            subtractionNotation.push(values[i+1] - values[i]);
            i = i+1;
            continue
        }
        subtractionNotation.push(values[i]);
    }

    // finally adding every value with and or without subtraction notation together
    let sum = 0;
    for (let i = 0; i < subtractionNotation.length; i++) {
        sum = sum + subtractionNotation[i];
    }
    
    return sum
}

console.log(romanNumeralConverter('I'))