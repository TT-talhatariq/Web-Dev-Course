let nameEl = document.querySelector(".name");
let paraEl = document.querySelector(".info");
let linkEl = document.querySelector("a");
let imgEl = document.querySelector("img");
let btn = document.querySelector("button");
let name2El = document.querySelector(".title");
let imgBtn = document.querySelector(".img-btn");

console.log(nameEl);
console.log(paraEl);
console.log(name2El);

// change content
nameEl.innerHTML = "Tariq";
nameEl.textContent = "Ali";

paraEl.textContent = "I Am ALi";

// change attributes
linkEl.setAttribute(
  "href",
  "https://www.instagram.com/talha_tariq_tt/?next=%2F"
);

imgEl.setAttribute(
  "src",
  "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
);

//change style
nameEl.style.color = "red";
nameEl.style.backgroundColor = "yellow";
nameEl.style.padding = "20px";

name2El.classList.remove("test");

function handleClick() {
  paraEl.style.color = "red";
}

function resizePic() {
  imgEl.style.width = "200px";
  imgEl.style.height = "200px";
}

btn.addEventListener("click", handleClick);
imgBtn.addEventListener("click", resizePic);
