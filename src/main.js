const calcValue = document.getElementById("calc-value");

let sum = document.getElementById("sum");
let subtract = document.getElementById("subtract");
let division = document.getElementById("division");
let multiplication = document.getElementById("multiplication");
let point = document.getElementById("point");
let del = document.getElementById("del");
let reset = document.getElementById("reset");
let result = document.getElementById("result");

const insert = (num) => {
    let num02 = calcValue.innerHTML;
    calcValue.innerHTML = num02 + num;
};
