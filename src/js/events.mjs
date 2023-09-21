import {getQuote} from "./getQuote.mjs"
import {showDetails} from "./showDetails.mjs"

document.addEventListener("click", (element) => {
  element = element.target;
  element.closest("[data-quote-reload]") ?  getQuote() : null;
  element.closest("[data-info-toggle]") ? showDetails(element) : null;
});





