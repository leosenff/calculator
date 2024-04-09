const display = document.querySelector(".display");
const btnNumbers = document.querySelectorAll(".numbers");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
const clearbtn = document.querySelector(".clear-btn");
const decimal = document.querySelector(".decimal");
display.textContent = 0;

let num1 = "";
let num2 = "";
let operator = "";
let operatorAux = "";
let result = null;
let currentNum = "";

function add(num1, num2){
    return Number(num1) + Number(num2);
}

function sub(num1, num2){
    return num1 - num2;
}

function mult(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1 / num2; 
}

function disableAll() {
    for (let i = 0; i < btnNumbers.length; i++){
        btnNumbers[i].disabled = true;
    }
    for (let i = 0; i < operatorBtns.length; i++){
        operatorBtns[i].disabled = true;
    }
    equalsBtn.disabled = true;
}

function operate(num1, num2, operate){
    if (operate == "+")
        result = add(num1, num2)
    if (operate == "-")
        result = sub(num1, num2); 
    if (operate == "*")
        result = mult(num1, num2);
    if (operate == "/"){
        if (Number(num2) === 0){
            disableAll();
            return display.textContent = "lol";
        } else {
            result = div(num1, num2);
        }
    }

    display.textContent = Math.round (result * 1e6) / 1e6;
}

for (let btn of btnNumbers){
    btn.addEventListener('click', () => {
        if (num1.length <= 12 && operator == ""){
            if (num1.length === 12){
                display.textContent = "Number is too big";
                num1 = "";
            } else {
                num1 += btn.value;
                currentNum = num1;
                display.textContent = num1; 
            } 
        } else if (num1 !== "" && operator !== "") {
            if (num2.length === 12){
                display.textContent = "Number is too big";
                num2 = "";
            } else {
                num2 += btn.value;
                currentNum = num2;
                display.textContent = num2;
            }
        } else if (num1 !== "" && num2 == "" && result !== null){
            num2 += btn.value;
            currentNum = num2;
            display.textContent = num2;        
        }
    });
}

for (let btnOperator of operatorBtns) {
    btnOperator.addEventListener('click', () => {
    if (num1 !== ""){
        if (operator == ""){
            operator = btnOperator.value;
            operatorAux = operator;
        } else {
            operator = btnOperator.value;
            display.textContent = operator;
        }
        
        if (operator !== operatorAux) {
            operate(num1, num2, operatorAux);
            num1 = result;
            num2 = "";
            console.log("Previous Operator :", operatorAux);
            operatorAux = operator;
        } else if (num2 !== ""){
            operate(num1, num2, operator);
            num1 = result;
            num2 = "";
        }
        console.log("Selected Operator :", operator);
    }    
  });
}

equalsBtn.addEventListener('click', () => {
    if (num1 !== "" && num2 !== "" && operator !== ""){
        operate(num1, num2, operator);
        num1 = result;
        num2 = "";
        operator = "";
    }
});

clearbtn.addEventListener('click', () => {
    clearAll();
}) 

decimal.addEventListener('click', () => {
    displayDot();
})

function displayDot(){
    if (currentNum == num1 && !num1.includes(".")){
        num1 += ".";
        display.textContent = num1;
    } else if (currentNum == num2 && !num2.includes(".")){
        num2 += ".";
        display.textContent = num2;
    }
}

function clearAll(){
    display.textContent = 0;
    num1 = "";
    num2 = "";
    operator = "";
    result = null;
    for (let i = 0; i < btnNumbers.length; i++){
        btnNumbers[i].disabled = false;
    }
    for (let i = 0; i < operatorBtns.length; i++){
        operatorBtns[i].disabled = false;
    }
    equalsBtn.disabled = false;
}