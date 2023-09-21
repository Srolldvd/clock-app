export const clockElem = document.querySelector("[data-set-clock]");

export const setTime = () => {
  let currentTime, hours, minutes;

  setInterval(()=> {
    currentTime = new Date();
    hours = currentTime.getHours();
    minutes = currentTime.getMinutes();
    clockElem.firstElementChild.textContent = hours;
    clockElem.lastElementChild.textContent = (minutes > 9) ? `${minutes}` : `0${minutes}`
  }, 1000)
}

