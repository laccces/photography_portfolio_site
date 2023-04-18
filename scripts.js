const carousel = document.querySelector('.carousel');
let carouselImages = Array.from(carousel.children);
let currentIndex = 0;

function updateCarousel() {
    carouselImages.forEach((image, index) => {
        image.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

function next() {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    updateCarousel();
}

function prev() {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    updateCarousel();
}

// Add event listeners for the previous and next buttons
// Example:
// prevButton.addEventListener('click', prev);
// nextButton.addEventListener('click', next);

// Add a function to autoplay the carousel if desired
// setInterval(next, 5000);
