let operators = new Map();
    operators.set('plus', plus);
    operators.set('minus', minus);
    operators.set('times', times);
    operators.set('dividedBy', dividedBy);

let a;
let b;
let operator;

function zero() {
    if (b == undefined){
        b = 0;
        return
    }
    if (a == undefined){
        a = 0; 
        let brumsk = operators.get(operator);
        return brumsk()
    }
}
function one() {
    if (b == undefined){
        b = 1;
        return
    }
    if (a == undefined){
        a = 1; 
        let brumsk = operators.get(operator);
        return brumsk()
    }
}
function two() {
    if (b == undefined){
        b = 2;
        return
    }
    if (a == undefined){
        a = 2; 
        let brumsk = operators.get(operator);
        return brumsk()
    }
}
function three() {
    if (b == undefined){
        b = 3;
        return
    }
    if (a == undefined){
        a = 3; 
        let brumsk = operators.get(operator);
        return brumsk()
    }
}
function four() {
    if (b == undefined){
        b = 4;
        return
    }
    if (a == undefined){
        a = 4; 
        let brumsk = operators.get(operator);
        return brumsk()
    }
}
function five() {
    if (b == undefined){
        b = 5;
        return
    }
    if (a == undefined){
        a = 5; 
        let brumsk = operators.get(operator);
        return brumsk()
    }
}
function six() {
    if (b == undefined){
        b = 6;
        return
    }
    if (a == undefined){
        a = 6; 
        let brumsk = operators.get(operator);
        return brumsk()
    }
}
function seven() {
    if (b == undefined){
        b = 7;
        return
    }
    if (a == undefined){
        a = 7; 
        let brumsk = operators.get(operator);
        return brumsk()
    }
}
function eight() {
    if (b == undefined){
        b = 8;
        return
    }
    if (a == undefined){
        a = 8; 
        let brumsk = operators.get(operator);
        return brumsk()
    }
}
function nine() {
    if (b == undefined){
        b = 9;
        return
    }
    if (a == undefined){
        a = 9; 
        let brumsk = operators.get(operator);
        return brumsk()
    }
}

function plus() {
    operator = 'plus'
    if (a != undefined && b != undefined){
        let sum = a + b;
        a = undefined;
        b = undefined;
        return sum
    }
}
function minus() {
    operator = 'minus'
    if (a != undefined && b != undefined){
        let sum = a - b;
        a = undefined;
        b = undefined;
        return sum
    }
}
function times() {
    operator = 'times'
    if (a != undefined && b != undefined){
        let sum = a * b;
        a = undefined;
        b = undefined;
        return sum
    }
}
function dividedBy() {
    operator = 'dividedBy'
    if (a != undefined && b != undefined){
        let sum = Math.floor(a / b);
        a = undefined;
        b = undefined;
        return sum
    }
}
console.log(seven(times(five())))
console.log(four(plus(nine())))