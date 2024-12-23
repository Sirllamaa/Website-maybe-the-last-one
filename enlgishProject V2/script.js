const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let activeIndex = 0;

function updateActiveSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'exiting');
        if (i === index) {
            slide.classList.add('active');
        } else if (i === activeIndex) {
            slide.classList.add('exiting');
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    activeIndex = index;
}

function showSlide(index) {
    if (index >= 0 && index < slides.length) {
        updateActiveSlide(index);
    }
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

prevButton.addEventListener('click', () => {
    showSlide(activeIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(activeIndex + 1);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        showSlide(activeIndex - 1);
    } else if (event.key === 'ArrowRight') {
        showSlide(activeIndex + 1);
    }
});

