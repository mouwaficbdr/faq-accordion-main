const button = document.querySelectorAll(".section-head");
const minusIcon = "assets/images/icon-minus.svg"
const plusIcon = 'assets/images/icon-plus.svg';

button.forEach((btn) => {
  btn.addEventListener('click', () => {
    toggleDetails(btn);
  });
})

const toggleDetails = (element) => {
  const exclude = element;//The active and clicked element that should be excluded
  if (element.lastElementChild.getAttribute('src') !== plusIcon) {
    element.lastElementChild.setAttribute('src', plusIcon);
  } else {
    element.lastElementChild.setAttribute('src', minusIcon);
  }
  element.nextElementSibling.classList.toggle("hidden");
  button.forEach((btn) => {
    if (btn != exclude) {
      btn.nextElementSibling.classList.add("hidden");  
      btn.lastElementChild.setAttribute('src', plusIcon);
    }
  })//Hide all other details section, shows only the one which the element had been clicked on and updates the icons
}