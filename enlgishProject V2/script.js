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

// Initialize first slide as active
updateActiveSlide(0);

// Chart.js Graphs
function initializeCharts() {
    new Chart(document.getElementById('batteryGraph'), {
        type: 'bar',
        data: {
            labels: ['EV Battery Production', 'Petrol Car Production'],
            datasets: [{
                label: 'Emissions (kg CO2)',
                data: [8500, 6000], // Example emission values
                backgroundColor: ['#FF6384', '#36A2EB']
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Emissions Comparison: EV Battery vs Petrol Car Production'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Emissions (kg CO2)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Production Type'
                    }
                }
            }
        }
    });

    new Chart(document.getElementById('electricityGraph'), {
        type: 'pie',
        data: {
            labels: ['Coal', 'Natural Gas', 'Renewables'],
            datasets: [{
                label: 'Energy Sources (%)',
                data: [45, 30, 25],
                backgroundColor: ['#4BC0C0', '#FF9F40', '#FF6384']
            }]
        }
    });

    new Chart(document.getElementById('pollutionGraph'), {
        type: 'line',
        data: {
            labels: ['2020', '2025', '2030', '2035'],
            datasets: [{
                label: 'Tire Particulate Pollution (kg/year)',
                data: [50, 65, 80, 95],
                backgroundColor: '#36A2EB',
                borderColor: '#36A2EB',
                fill: false
            }]
        }
    });
}

// Wait for DOM to load before initializing charts
document.addEventListener('DOMContentLoaded', initializeCharts);
