let firstNum;
let secondNum;
function getNumberOne() {
    firstNum = document.querySelector('#number1').value;   
}
function getNumberTwo() {
    secondNum = document.querySelector('#number2').value;   
}
function totalResult(result) {
    document.querySelector('#total_result').innerHTML = (`Your result = ${result}!`);
    if (secondNum == 0) {
        document.querySelector('#total_result').innerHTML = ('Dividing by zero is not allowed!');
        document.querySelector('#total_result').style.color = "red";
    }
    else {
        document.querySelector('#total_result').style.color = "black";
    }
}
function getSum() {
    getNumberOne(firstNum);
    getNumberTwo(secondNum);
    let result = +firstNum + +secondNum;
    totalResult(result);
}
function getDiff() {
    getNumberOne(firstNum);
    getNumberTwo(secondNum);
    let result = +firstNum - +secondNum;
    totalResult(result);
}
function getDivison() {
    getNumberOne(firstNum);
    getNumberTwo(secondNum);
    let result = +firstNum / +secondNum;
    totalResult(result);
}
function getProd() {
    getNumberOne(firstNum);
    getNumberTwo(secondNum);
    let result = +firstNum * +secondNum;
    totalResult(result);
}
function clearInput() {
    document.querySelector('#number1').value = "";
    document.querySelector('#number2').value = "";
}