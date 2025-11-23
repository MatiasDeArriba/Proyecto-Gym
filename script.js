// ===============================
// SLIDER / CARRUSEL DE IMÁGENES
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  // Obtenemos todos los slides (cada imagen del carrusel)
  const slides = document.querySelectorAll(".slider__slide");
  // Botones de navegación
  const prevBtn = document.querySelector(".slider__btn--prev");
  const nextBtn = document.querySelector(".slider__btn--next");
  // Puntos inferiores (indicadores)
  const dots = document.querySelectorAll(".slider__dot");

  // Índice del slide actual (empezamos en 0)
  let currentSlide = 0;

  // Función para mostrar un slide según su índice
  function showSlide(index) {
    // Si el índice se pasa por la derecha, volvemos al primero
    if (index >= slides.length) {
      currentSlide = 0;
    }
    // Si el índice se pasa por la izquierda, vamos al último
    else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    // Recorremos todos los slides y los ocultamos
    slides.forEach((slide) => {
      slide.classList.remove("slider__slide--active");
    });

    // Recorremos todos los puntos y los desactivamos
    dots.forEach((dot) => {
      dot.classList.remove("slider__dot--active");
    });

    // Mostramos el slide actual
    slides[currentSlide].classList.add("slider__slide--active");
    // Activamos el punto correspondiente
    dots[currentSlide].classList.add("slider__dot--active");
  }

  // Manejamos click en botón "siguiente"
  nextBtn.addEventListener("click", function () {
    showSlide(currentSlide + 1);
  });

  // Manejamos click en botón "anterior"
  prevBtn.addEventListener("click", function () {
    showSlide(currentSlide - 1);
  });

  // Manejamos click en los puntos (indicadores)
  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      // Leemos el índice que está en el atributo data-slide
      const slideIndex = parseInt(dot.getAttribute("data-slide"));
      showSlide(slideIndex);
    });
  });

  // (Opcional) Autoplay cada 5 segundos
  setInterval(function () {
    showSlide(currentSlide + 1);
  }, 5000);
});
