var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const hamburgerButton = document.querySelector(".hamburger-menu span");
const hamburgerMenu = document.querySelector(".hamburger-menu-active");
const hamburgerMenuClose = document.querySelector(".hamburger-menu-close");
const date = document.querySelector(".top-bar p");

const dateYear = new Date().getFullYear();
const dateMonth = new Date().getMonth();
const dateDay = new Date().getDate();

date.textContent = `${dateDay} / ${dateMonth} / ${dateYear}`;

function hamburger() {
  hamburgerMenu.classList.toggle("active");
}

function hamburger_inside() {
  hamburgerMenu.classList.remove("active");
}

hamburgerButton.addEventListener("click", hamburger);
hamburgerMenuClose.addEventListener("click", hamburger_inside);
