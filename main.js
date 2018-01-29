const bool1 = document.getElementById('bool1');
const bool2 = document.getElementById('bool2');
const bool3 = document.getElementById('bool3');
const bool4 = document.getElementById('bool4');

const trueSpan = document.getElementsByClassName('true');
const falseSpan = document.getElementsByClassName('false');

const numExp1 = document.getElementById('numExp1');
const numExp2 = document.getElementById('numExp2');
const numExp3 = document.getElementById('numExp3');
const numExp4 = document.getElementById('numExp4');
const numExp5 = document.getElementById('numExp5');
const numExp6 = document.getElementById('numExp6');

let boo1 = Math.random() >= 0.5;
let boo2 = Math.random() >= 0.5;
let boo3 = Math.random() >= 0.5;
let boo4 = Math.random() >= 0.5;
let boo5 = Math.random() >= 0.5;
let boo6 = Math.random() >= 0.5;

const andOr = [
  '||',
  '&&',
];

var randOr1 = andOr[Math.floor(Math.random() * andOr.length)];
var randOr2 = andOr[Math.floor(Math.random() * andOr.length)];
var randOr3 = andOr[Math.floor(Math.random() * andOr.length)];
var randOr4 = andOr[Math.floor(Math.random() * andOr.length)];

let orBoo = `${boo1} ${randOr1} ${boo2}`;
let andBoo = `${boo3} ${randOr2} ${boo4}`;
let bigBoo = `${boo1} ${randOr3} ${boo2} || ${boo3} ${randOr4} ${boo4}`;
let bigBoo2 = `${boo5} ${randOr2} ${boo6} && ${boo2} ${randOr1} ${boo1}`;


let orBooA = eval(orBoo);
let andBooA = eval(andBoo)
let bigBooA = eval(bigBoo)
let bigBoo2A = eval(bigBoo2)


bool1.innerHTML = orBoo;
bool2.innerHTML = andBoo;
bool3.innerHTML = bigBoo;
bool4.innerHTML = bigBoo2;

let randNum1 = Math.floor(Math.random() * 10) + 1;
randNum1 *= Math.floor(Math.random() * 2) == 1
  ? 1
  : -1;
let randNum2 = Math.floor(Math.random() * 10) + 1;
randNum2 *= Math.floor(Math.random() * 2) == 1
  ? 1
  : -1;
let randNum3 = Math.floor(Math.random() * 10) + 1;
randNum3 *= Math.floor(Math.random() * 2) == 1
  ? 1
  : -1;
let randNum4 = Math.floor(Math.random() * 10) + 1;
randNum4 *= Math.floor(Math.random() * 2) == 1
  ? 1
  : -1;
let randNum5 = Math.floor(Math.random() * 10) + 1;
randNum5 *= Math.floor(Math.random() * 2) == 1
  ? 1
  : -1;
let randNum6 = Math.floor(Math.random() * 10) + 1;
randNum6 *= Math.floor(Math.random() * 2) == 1
  ? 1
  : -1;

const ops = [
  '<',
  '>',
  '>=',
  '<=',
  '<',
  '>',
  '>=',
  '<=',
  '===',
  '!=='
];

const x = [0,1,2,3,4,5,6,7,8,9,10];
const y = [0,1,2,3,4,5,6,7,8,9,10];


var randOp1 = ops[Math.floor(Math.random() * ops.length)];
var randOp2 = ops[Math.floor(Math.random() * ops.length)];
var randOp3 = ops[Math.floor(Math.random() * ops.length)];
var randOp4 = ops[Math.floor(Math.random() * ops.length)];
var randOp5 = ops[Math.floor(Math.random() * ops.length)];
var randOp6 = ops[Math.floor(Math.random() * ops.length)];

var randX = x[Math.floor(Math.random() * x.length)];
var randY = y[Math.floor(Math.random() * y.length)];

console.log(`let x = ${randX};`);
console.log(`let y = ${randY};`);

console.log(`x ${randOp1} y`);
let alg1 = `x ${randOp1} y`;
let alg1A = eval(`${randX} ${randOp1} ${randY}`)
console.log(alg1A);




let exp1 = `${randNum1} ${randOp1} ${randNum2}`;
let exp2 = `${randNum3} ${randOp2} ${randNum4}`;
let exp3 = `${randNum5} ${randOp3} ${randNum6}`;
let exp4 = `${randNum4} ${randOp4} ${randNum2}`;
let exp5 = `(${randNum3} + ${randNum5}) ${randOp5} (${randNum1} + ${randNum4})`
let exp6 = `(${randNum1} + ${randNum2}) ${randOp6} (${randNum4} + ${randNum5})`
let exp7 = `(${randNum2} + ${randNum4}) ${randOp2} (${randNum1} + ${randNum6})`
let exp8 = `(${randNum6} + ${randNum3}) ${randOp1} (${randNum5} + ${randNum4})`

let hard1 = `(${boo6} ${randOr3} ${boo3}) ${randOr2} ((${randNum6} + ${randNum3}) ${randOp1} (${randNum5} + ${randNum4})) `
let hard2 = `((${randNum1} + ${randNum2}) ${randOp1} (${randNum5} + ${randNum4})) ${randOr4}  (${boo1} ${randOr3} ${boo2}) `

// let harder1 = `let x = ${randX}; let y = ${randY}; `
// let harder2 =


let exp1A = eval(exp1)
let exp2A = eval(exp2)
let exp3A = eval(exp3)
let exp4A = eval(exp4)
let exp5A = eval(exp5)
let exp6A = eval(exp6)
let exp7A = eval(exp7)
let exp8A = eval(exp8)

let hard1A = eval(hard1);
let hard2A = eval(hard2);

// console.log(hard1A);
// console.log(hard2A);

numExp1.innerHTML = exp1;
numExp2.innerHTML = exp2;
numExp3.innerHTML = exp3;
numExp4.innerHTML = exp4;
numExp5.innerHTML = hard1;
numExp6.innerHTML = hard2;


// console.log(exp1, exp1A);
// console.log(exp2, exp2A);
// console.log(exp3, exp3A);
// console.log(exp4, exp4A);
// console.log(exp5, exp5A);
// console.log(exp6, exp6A);
// console.log(exp7, exp7A);
// console.log(exp8, exp8A);

function revealAnswer() {
  if (orBooA) {
    bool1.style.color = "blue";
  } else {
    bool1.style.color = "orange";
  }

  if (andBooA) {
    bool2.style.color = "blue";
  } else {
    bool2.style.color = "orange";
  }

  if (bigBooA) {
    bool3.style.color = "blue";
  } else {
    bool3.style.color = "orange";
  }

  if (bigBoo2A) {
    bool4.style.color = "blue";
  } else {
    bool4.style.color = "orange";
  }

  if (exp1A) {
    numExp1.style.color = "blue";
  } else {
    numExp1.style.color = "orange";
  }

  if (exp2A) {
    numExp2.style.color = "blue";
  } else {
    numExp2.style.color = "orange";
  }
  if (exp3A) {
    numExp3.style.color = "blue";
  } else {
    numExp3.style.color = "orange";
  }
  if (exp4A) {
    numExp4.style.color = "blue";
  } else {
    numExp4.style.color = "orange";
  }
  if (hard1A) {
    numExp5.style.color = "blue";
  } else {
    numExp5.style.color = "orange";
  }
  if (hard2A) {
    numExp6.style.color = "blue";
  } else {
    numExp6.style.color = "orange";
  }




var answer1 = document.querySelector('input[name="boolean1"]:checked').value;
var answer2= document.querySelector('input[name="boolean2"]:checked').value;
var answer3= eval(document.querySelector('input[name="boolean3"]:checked').value);
var answer4= eval(document.querySelector('input[name="boolean4"]:checked').value);
var answer5= eval(document.querySelector('input[name="boolean5"]:checked').value);
var answer6= eval(document.querySelector('input[name="boolean6"]:checked').value);
var answer7= eval(document.querySelector('input[name="boolean7"]:checked').value);
var answer8= eval(document.querySelector('input[name="boolean8"]:checked').value);
var answer9= eval(document.querySelector('input[name="boolean9"]:checked').value);
var answer10= eval(document.querySelector('input[name="boolean10"]:checked').value);


if((orBooA === eval(answer1))){
  document.getElementById("solution").innerText = "Correct!";
  document.getElementById("solution").style.color = "green"

} else {
    document.getElementById("solution").innerText = "Wrong!"
    document.getElementById("solution").style.color = "red"
}

if((andBooA === eval(answer2))){
  document.getElementById("solution2").innerText = "Correct!";
  document.getElementById("solution2").style.color = "green"

} else {
    document.getElementById("solution2").innerText = "Wrong!"
    document.getElementById("solution2").style.color = "red"
}
if((bigBooA === eval(answer3))){
  document.getElementById("solution3").innerText = "Correct!";
  document.getElementById("solution3").style.color = "green"

} else {
    document.getElementById("solution3").innerText = "Wrong!"
    document.getElementById("solution3").style.color = "red"
}

if((bigBoo2A === eval(answer4))){
  document.getElementById("solution4").innerText = "Correct!";
  document.getElementById("solution4").style.color = "green"

} else {
    document.getElementById("solution4").innerText = "Wrong!"
    document.getElementById("solution4").style.color = "red"
}
if((exp1A === eval(answer5))){
  document.getElementById("solution5").innerText = "Correct!";
  document.getElementById("solution5").style.color = "green"

} else {
    document.getElementById("solution5").innerText = "Wrong!"
    document.getElementById("solution5").style.color = "red"
}

if((exp2A === eval(answer6))){
  document.getElementById("solution6").innerText = "Correct!";
  document.getElementById("solution6").style.color = "green"

} else {
    document.getElementById("solution6").innerText = "Wrong!"
    document.getElementById("solution6").style.color = "red"
}
if((exp3A === eval(answer7))){
  document.getElementById("solution7").innerText = "Correct!";
  document.getElementById("solution7").style.color = "green"

} else {
    document.getElementById("solution7").innerText = "Wrong!"
    document.getElementById("solution7").style.color = "red"
}

if((exp4A === eval(answer8))){
  document.getElementById("solution8").innerText = "Correct!";
  document.getElementById("solution8").style.color = "green"

} else {
    document.getElementById("solution8").innerText = "Wrong!"
    document.getElementById("solution8").style.color = "red"
}
if((hard1A === eval(answer9))){
  document.getElementById("solution9").innerText = "Correct!";
  document.getElementById("solution9").style.color = "green"

} else {
    document.getElementById("solution9").innerText = "Wrong!"
    document.getElementById("solution9").style.color = "red"
}

if((hard2A === eval(answer10))){
  document.getElementById("solution10").innerText = "Correct!";
  document.getElementById("solution10").style.color = "green"

} else {
    document.getElementById("solution10").innerText = "Wrong!"
    document.getElementById("solution10").style.color = "red"
}

};
