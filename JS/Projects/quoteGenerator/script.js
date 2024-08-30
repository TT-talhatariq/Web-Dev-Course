// Variables
let quote = document.querySelector("p");
let button = document.querySelector("button");
// Logic

let quotations = [
  "Practice makes a man Perfect",
  "Good things takes time",
  "Hard work is key to success",
  "Believe in yourself and all that you are",
  "Success is not final, failure is not fatal: It is the courage to continue that counts",
  "Don't watch the clock; do what it does. Keep going",
  "The only way to do great work is to love what you do",
  "Your limitation—it's only your imagination",
  "Push yourself, because no one else is going to do it for you",
  "Dream it. Wish it. Do it",
  "Great things never come from comfort zones",
];

const generateQuote = () => {
  let randomIndex = Math.floor(Math.random() * quotations.length);
  quote.innerHTML = quotations[randomIndex];
};

// Event Listener
button.addEventListener("click", generateQuote);
