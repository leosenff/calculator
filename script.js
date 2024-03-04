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
    return add(n1,n2);

    if (operand =="-")
    return sub(n1,n2);

    if (operand == "*")
    return multi(n1,n2);

    if (operand == "/")
    return div(n1,n2);
}