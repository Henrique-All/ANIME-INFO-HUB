const slider = document.querySelectorAll(".slide");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const sliderContainer = document.getElementById("slider-container");

let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;

function hideSlider() {
  slider.forEach((item) => item.classList.remove("on"));
}

function showSlider() {
  slider[currentSlide].classList.add("on");
}

function nextSlider() {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
}

function prevSlider() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
}

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  touchEndX = event.changedTouches[0].clientX;
  const touchDistance = touchStartX - touchEndX;

  if (touchDistance > 0) {
    // Swipe esquerda (próximo slide)
    nextSlider();
  } else if (touchDistance < 0) {
    // Swipe direita (slide anterior)
    prevSlider();
  }
}

sliderContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

sliderContainer.addEventListener("touchmove", (e) => {
  e.preventDefault(); // Impede o comportamento padrão de rolagem durante o deslize.
});

sliderContainer.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  const touchDistance = touchStartX - touchEndX;

  if (touchDistance > 50) {
    nextSlider(); // Swipe esquerda (próximo slide)
  } else if (touchDistance < -50) {
    prevSlider(); // Swipe direita (slide anterior)
  }
});

btnNext.addEventListener("click", nextSlider);
btnPrev.addEventListener("click", prevSlider);
