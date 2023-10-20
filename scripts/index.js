"use strict";

window.onload = init;

function init(){
    const addBtn = document.getElementById("addBtn");
    const subtractBtn = document.getElementById("subtractBtn");
    const multiplyBtn = document.getElementById("multiplyBtn");
    const divideBtn = document.getElementById("divideBtn");

    addBtn.onclick = onAddBtnClicked;
    subtractBtn.onclick = onSubtractBtnClicked;
    multiplyBtn.onclick = onMultiplyBtnClicked;
    divideBtn.onclick = onDivideBtnClicked;
}

function onAddBtnClicked(){
    const inputNum1 = Number(document.getElementById("number1Field").value);
    const inputNum2 = Number(document.getElementById("number2Field").value);

    var answer = inputNum1 + inputNum2;
    document.getElementById("answerField").value = answer;

}

function onSubtractBtnClicked(){
    const inputNum1 = Number(document.getElementById("number1Field").value);
    const inputNum2 = Number(document.getElementById("number2Field").value);

    var answer = inputNum1 - inputNum2;
    document.getElementById("answerField").value = answer;
}

function onMultiplyBtnClicked(){
    const inputNum1 = Number(document.getElementById("number1Field").value);
    const inputNum2 = Number(document.getElementById("number2Field").value);

    var answer = inputNum1 * inputNum2;
    document.getElementById("answerField").value = answer;
}

function onDivideBtnClicked(){
    const inputNum1 = Number(document.getElementById("number1Field").value);
    const inputNum2 = Number(document.getElementById("number2Field").value);

    var answer = inputNum1 / inputNum2;
    document.getElementById("answerField").value = answer;
}