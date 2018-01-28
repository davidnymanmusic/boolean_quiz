const bool1 = document.getElementById('bool1');
const bool2 = document.getElementById('bool2');
const bool3 = document.getElementById('bool3');
const bool4 = document.getElementById('bool4');

let boo = Math.random() >= 0.5;
let boo2 = Math.random() >= 0.5;
let boo3 = Math.random() >= 0.5;
let boo4 = Math.random() >= 0.5;
let boo5 = Math.random() >= 0.5;
let boo6 = Math.random() >= 0.5;

let orBoo = `${boo} || ${boo2}`;
let andBoo = `${boo3} && ${boo4}`;
let bigBoo = `${boo} && ${boo2} || ${boo3} && ${boo4}`;
let bigBoo2 = `${boo5} || ${boo6} && ${boo2} || ${boo}`;

let orBooA = (boo || boo2);
let andBooA = (boo3 && boo4);
let bigBooA = (boo && boo2 || boo3 && boo4);
let bigBoo2A = (boo5 || boo6 && boo2 || boo);

bool1.innerHTML = orBoo;
bool2.innerHTML = andBoo;
bool3.innerHTML = bigBoo;
bool4.innerHTML = bigBoo2;


let randNum1 = Math.floor(Math.random() * 10);
let randNum2 = Math.floor(Math.random() * 10);
let randNum3 = Math.floor(Math.random() * 10);
let randNum4 = Math.floor(Math.random() * 10);
let randNum5 = Math.floor(Math.random() * 10);
let randNum6 = Math.floor(Math.random() * 10);

function revealAnswer() {
  if(orBooA){
      bool1.style.color = "green";
  } else {
    bool1.style.color = "red";
  }

  if(andBooA){
      bool2.style.color = "green";
  } else {
    bool2.style.color = "red";
  }

  if(bigBooA){
      bool3.style.color = "green";
  } else {
    bool3.style.color = "red";
  }

  if(bigBoo2A){
      bool4.style.color = "green";
  } else {
    bool4.style.color = "red";
  }

};
