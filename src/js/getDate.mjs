export const getWeekNumber = () => {
const currentDate = new Date();
const startDate = new Date(currentDate.getFullYear(), 0, 1);
const days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));

 return Math.ceil(days / 7);
}

export const getDayNumber = () => {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 0);
  const diff = currentDate - startDate;
  const oneDay = 1000 * 60 * 60 * 24;

  return Math.floor(diff / oneDay);
}


export const getWeekdayNumber = () => {
  const currentDate = new Date();
  return currentDate.getDay();
}






