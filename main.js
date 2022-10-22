const selected1 = document.querySelector("#number1");
const selected2 = document.querySelector("#number2");
const selected3 = document.querySelector("#number3");
const selected4 = document.querySelector("#number4");
const selected5 = document.querySelector("#number5");

const submit = document.querySelector(".submit");
const mainContainer = document.querySelector(".main-container");
const aside = document.querySelector("aside");

const span = document.querySelector("span");

selected1.addEventListener("click", select1);
selected1.addEventListener("click", () => {
  //   selected1 = true;
});
selected1.addEventListener("click", imprimir1);
selected2.addEventListener("click", select2);
selected2.addEventListener("click", imprimir2);
selected3.addEventListener("click", select3);
selected3.addEventListener("click", imprimir3);
selected4.addEventListener("click", select4);
selected4.addEventListener("click", imprimir4);
selected5.addEventListener("click", select5);
selected5.addEventListener("click", imprimir5);

submit.addEventListener("click", sending);

function imprimir1() {
  span.innerHTML = "1";
}
function imprimir2() {
  span.innerHTML = "2";
}
function imprimir3() {
  span.innerHTML = "3";
}
function imprimir4() {
  span.innerHTML = "4";
}
function imprimir5() {
  span.innerHTML = "5";
}

function select1() {
  selected1.classList.replace("number", "selected");
  selected2.classList.replace("selected", "number");
  selected3.classList.replace("selected", "number");
  selected4.classList.replace("selected", "number");
  selected5.classList.replace("selected", "number");
}

function select2() {
  selected2.classList.replace("number", "selected");
  selected1.classList.replace("selected", "number");
  selected3.classList.replace("selected", "number");
  selected4.classList.replace("selected", "number");
  selected5.classList.replace("selected", "number");
}

function select3() {
  selected3.classList.replace("number", "selected");
  selected1.classList.replace("selected", "number");
  selected2.classList.replace("selected", "number");
  selected4.classList.replace("selected", "number");
  selected5.classList.replace("selected", "number");
}
function select4() {
  selected4.classList.replace("number", "selected");
  selected1.classList.replace("selected", "number");
  selected2.classList.replace("selected", "number");
  selected3.classList.replace("selected", "number");
  selected5.classList.replace("selected", "number");
}
function select5() {
  selected5.classList.replace("number", "selected");
  selected1.classList.replace("selected", "number");
  selected2.classList.replace("selected", "number");
  selected3.classList.replace("selected", "number");
  selected4.classList.replace("selected", "number");
}

function sending(event) {
  event.preventDefault();
  mainContainer.classList.replace("main-container", "inactive");
  aside.classList.replace("inactive", "active");
}
