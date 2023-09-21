import {setTime} from "./setTime.mjs"
import {getQuote} from "./getQuote.mjs"
import {watchDayState} from "./watchDayState.mjs"
import {setDetails} from "./setDetails.mjs"

const interval = 1000 * 60;

(function () {
  setTime();
  getQuote();
  watchDayState();
  setDetails();
})();

setTimeout(() => {
  watchDayState();
},interval);