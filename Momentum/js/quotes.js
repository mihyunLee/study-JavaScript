const quotes = [
  {
    quote: "Well done is better than well said.",
    author: "Benjamin Franklin",
  },
  {
    quote: "A minute's success pays the failure of years.",
    author: "Robert Browning",
  },
  {
    quote:
      "A definite purpose, like blinders on a horse, inevitably narrows its possessor's point of view.",
    author: "Robert Frost",
  },
  {
    quote:
      "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius",
  },
  {
    quote: "Always laugh when you can. It is cheap medicine.",
    author: "Lord Byron",
  },
  {
    quote: "Nothing shows a man's character more than what he laughs at.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote: "The greatest risk is the risk of riskless living.",
    author: "Stephen Covey",
  },
  {
    quote:
      "Don't worry about people stealing an idea. If it's original, you will have to ram it down their throats.",
    author: "Howard Aiken",
  },
  {
    quote: "Blaze with the fire that is never extinguished.",
    author: "Luisa Sigea",
  },
  {
    quote: "If you would be loved, love and be lovable",
    author: "Benjamin Franklin",
  },
];

const quote = document.querySelector("div#quote span:first-child");
const author = document.querySelector("div#quote span:last-child");

const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;
