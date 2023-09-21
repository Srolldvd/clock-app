const url = "https://api.quotable.io/quotes/random";

export async function getQuote() {
  const quoteElems = document.querySelector("[data-quote]");
  const response = await fetch(url);
  let quote = await response.json()

  quoteElems.firstElementChild.textContent = quote[0].content;
  quoteElems.lastElementChild.textContent = quote[0].author;
}