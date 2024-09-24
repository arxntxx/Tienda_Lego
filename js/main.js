
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
    });
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
    });
});

// Mostrar la primera diapositiva al cargar la página
showSlide(currentSlide);

