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

document.addEventListener('DOMContentLoaded', () => {
    const failButton = document.getElementById('fail-button');
    const passButton = document.getElementById('pass-button');

    // Fail button hover effect
    if (failButton) {
        failButton.addEventListener('mouseover', () => {
            const buttonWidth = failButton.offsetWidth;
            const buttonHeight = failButton.offsetHeight;

            // Ensure the button stays within bounds
            const maxX = window.innerWidth - buttonWidth - 1000; // Maximum x-coordinate
            const maxY = window.innerHeight - buttonHeight - 200; // Maximum y-coordinate
            const randomX = Math.random() * maxX; // Constrained random x
            const randomY = Math.random() * maxY; // Constrained random y
            const randomSize = Math.random() * 30 + 10; // Random size between 10px and 30px

            // Debugging output
            console.log(`Fail Button Debug:`);
            console.log(`Window Width: ${window.innerWidth}, Window Height: ${window.innerHeight}`);
            console.log(`Button Width: ${buttonWidth}, Button Height: ${buttonHeight}`);
            console.log(`Calculated Position - X: ${randomX}, Y: ${randomY}`);
            console.log(`Random Size: ${randomSize}px`);

            // Apply the new position and size
            failButton.style.position = 'absolute';
            failButton.style.left = `${randomX}px`;
            failButton.style.top = `${randomY}px`;
            failButton.style.fontSize = `${randomSize}px`;
            failButton.style.zIndex = 9999; // Ensure it stays on top
        });
    }

    // Pass button click effect
    if (passButton) {
        passButton.addEventListener('click', () => {
            alert('Thank you!');
            alert('Bye Bye')
            window.close();
        });
    }
});

