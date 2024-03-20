const plusBtns = document.querySelectorAll(".plus-icon");
const minusIcon = "assets/images/icon-minus.svg"
const plusIcon = 'assets/images/icon-plus.svg';

plusBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    toggleDetails(btn);
  });
})

const toggleDetails = (button) => {
  const exclude = button;//The active and clicked button that should be excluded
  if (button.getAttribute('src') !== plusIcon) {
    button.setAttribute('src', plusIcon);
  } else {
    button.setAttribute('src', minusIcon);
  }
  button.parentElement.nextElementSibling.classList.toggle("hidden");
  plusBtns.forEach((btn) => {
    if (btn != exclude) {
      btn.parentElement.nextElementSibling.classList.add("hidden");  
      btn.setAttribute('src', plusIcon);
    }
  })//Hide all other details section, shows only the one which the button had been clicked on and updates the icons
}