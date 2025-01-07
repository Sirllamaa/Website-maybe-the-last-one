// Select elements
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let activeIndex = 0;

// Function to update active slide
function updateActiveSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    activeIndex = index;
}

// Function to navigate slides
function navigateSlides(direction) {
    const nextIndex = (activeIndex + direction + slides.length) % slides.length;
    updateActiveSlide(nextIndex);
}

// Event listeners for buttons
prevButton.addEventListener('click', () => navigateSlides(-1));
nextButton.addEventListener('click', () => navigateSlides(1));

// Event listener for arrow keys
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        navigateSlides(-1);
    } else if (event.key === 'ArrowRight') {
        navigateSlides(1);
    }
});
