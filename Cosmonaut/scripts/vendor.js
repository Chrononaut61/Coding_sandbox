const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtrack');
const multiplyBtn = document.getElementById('btn-multiply')
const multiplyBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('screen');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text){
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}