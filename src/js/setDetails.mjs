import {getWeekNumber, getDayNumber, getWeekdayNumber} from "./getDate.mjs";

export async function setDetails() {
  const url = 'https://api.ipgeolocation.io/ipgeo?apiKey=b489d9a334444e01877e9a0bb468d7bc';
  const response = await fetch(url);
  const timeData = await response.json();

  const HTML = `<div class="clock-app__info">
    <span class="clock-app__label">CURRENT TIMEZONE</span>
    <span class="clock-app__label">${timeData.time_zone.name}</span>
  </div>
  <div class="clock-app__info">
    <span class="clock-app__label">DAY OF THE WEEK</span>
    <span class="clock-app__label">${getWeekdayNumber()}</span>
  </div>
  <div class="clock-app__info">
    <span class="clock-app__label">DAY OF THE YEAR</span>
    <span class="clock-app__label">${getDayNumber()}</span>
  </div>
  <div class="clock-app__info">
    <span class="clock-app__label">WEEK NUMBER</span>
    <span class="clock-app__label">${getWeekNumber()}</span>
  </div>`

document.querySelector("[data-destination]").textContent = `IN ${timeData.city}, ${timeData.country_code2}`;
document.querySelector("[data-more-info]").innerHTML = HTML;
};

