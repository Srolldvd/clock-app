export const showDetails = (element) => {
  element = element.closest("[data-control-bg]");
  element.classList.toggle("toggled");
}

