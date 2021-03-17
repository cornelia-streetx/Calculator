function add() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  n1 = parseInt(n1 , 10);
  n2 = parseInt(n2 , 10);
  let add = n1 + n2;
  let result = document.getElementById("res").value = add;
}

function sub() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  n1 = parseInt(n1 , 10);
  n2 = parseInt(n2 , 10);
  let add = n1 - n2;
  let result = document.getElementById("res").value = add;
}

function mult() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  n1 = parseInt(n1 , 10);
  n2 = parseInt(n2 , 10);
  let add = n1 * n2;
  let result = document.getElementById("res").value = add;
}

function div() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  n1 = parseInt(n1 , 10);
  n2 = parseInt(n2 , 10);
  let add = n1 / n2;
  let result = document.getElementById("res").value = add;
}

