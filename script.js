const display = document.querySelector(".display");
const btnNumbers = document.querySelectorAll(".numbers");
const operateBtn = document.querySelectorAll(".operator");
display.textContent = 0;

let num1;
let num2;
let operator;


function add(num1, num2){
    return num1 + num2;
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
    if (operate == "+")
    result = add(num1, num2);

    if (operate == "-")
    result = sub(num1, num2);

    if (operate == "*")
    result = mult(num1, num2);

    if (operate == "/")
    result = div(num1, num2);
}

for (let btn of btnNumbers){
    btn.addEventListener('click', () => {
        num1 = btn.value;
        display.textContent = btn.value;
    });
}