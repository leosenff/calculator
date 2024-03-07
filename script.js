const display = document.querySelector(".display");
const btnNumbers = document.querySelectorAll(".numbers");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equals");
display.textContent = 0;

let num1 = "";
let num2 = "";
let operator = "";
let equals = "";
let result = 0;

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

function operate(num1, num2, operate){
    if (operate == "add"){
    result = add(num1, num2);
    display.textContent = result;
}
    if (operate == "sub")
    result = sub(num1, num2);

    if (operate == "mult")
    result = mult(num1, num2);

    if (operate == "div")
    result = div(num1, num2);
}

for (let btn of btnNumbers){
    btn.addEventListener('click', () => {
        if (num1 == "" || operator == ""){
            num1 += btn.value;
            display.textContent = num1; 
        } else if (equals !== "equals"){
            num2 += btn.value;
            display.textContent = num2;
         }
    });
}

for (let btnOperator of operatorBtns) {
    btnOperator.addEventListener('click', () => {
        operator = btnOperator.value;
        if (operator == "+"){
            display.textContent = operator;
            return operator = "add";
        } if (operator == "-"){
            display.textContent = operator;
            return operator = "add";
        }
        
    });
}

equalsBtn.addEventListener('click', () => {
    equals = "equals";
    operate(num1, num2, operator);
});