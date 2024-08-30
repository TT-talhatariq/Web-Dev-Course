// variables
let btnEl = document.querySelector(".test");
let nameEl = document.querySelector("h1");

//logic

function changeColor() {
  nameEl.style.color = "red";
  nameEl.style.background = "yellow";
}

// event listners
btnEl.addEventListener("click", changeColor);
