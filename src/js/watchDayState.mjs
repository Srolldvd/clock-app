import {clockElem} from "./setTime.mjs";

export const watchDayState = () => {
  const controlBgElem = document.querySelector("[data-control-bg]");
  const clockHeaderElem = clockElem.previousElementSibling;
  const dayStateText = clockHeaderElem.lastElementChild;
  const dayStateIcon = clockHeaderElem.querySelector("[data-day-state-icon]"); 
  const getHours = new Date().getHours();

   if (getHours >= 18 || getHours <= 6) {
    controlBgElem.classList.add("night-theme");
    dayStateIcon.classList.add("fa-moon");
    dayStateText.textContent = "NIGHT";
  } else if (getHours >= 12 && getHours <= 18) {
    controlBgElem.classList.add("afternoon-theme");
    dayStateIcon.classList.add("fa-sun");
    dayStateText.textContent = "AFTERNOON";
  } else if (getHours >= 6 || getHours <= 12) {
    controlBgElem.classList.add("morning-theme");
    dayStateIcon.classList.add("fa-mug-saucer");
    dayStateText.textContent = "MORNING";
  } 
}

