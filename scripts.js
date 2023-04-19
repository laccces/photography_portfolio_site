const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideInterval = 9000; // Change this value to set the interval between slides (in milliseconds)

function nextSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
}

setInterval(nextSlide, slideInterval);
