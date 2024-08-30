// variables
let dateEl = document.querySelector("input");
let calculateBtn = document.querySelector("button");
let resultEl = document.querySelector("p");

//logic

function calculateAge() {
  let userAge = dateEl.value.split("-");

  let calAge = 2024 - Number(userAge[0]);

  resultEl.innerHTML = `Your age is ${calAge} years old`;
}

// event listeners

calculateBtn.addEventListener("click", calculateAge);
