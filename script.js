const screen = document.querySelector(".display");
screen.textContent = "0";

let n1 = 4;
let n2 = 2;
let operand = '+';

function add(n1,n2){
    return n1 + n2;
}

function sub(n1,n2){
    return  n1 - n2;
}

function multi(n1,n2){
    return n1 * n2;
}

function div(n1,n2){
    return n1 / n2;
}

function operate(operand){
    if (operand == "+")
    return screen.textContent = add(n1,n2);

    if (operand =="-")
    return screen.textContent = sub(n1,n2);

    if (operand == "*")
    return screen.textContent = multi(n1,n2);

    if (operand == "/")
    return screen.textContent = div(n1,n2);
}

