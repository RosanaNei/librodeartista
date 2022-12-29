
var indiceImgActual = 0;

function showNextSlide() {
  // Obtener todas las imágenes del elemento .slide-imgs
  const images = document.querySelectorAll('.slide-imgs img');
  const header = document.querySelector('header');
  const html = document.querySelector('html')

  // Incrementar el índice de la imagen actual
  indiceImgActual = (indiceImgActual + 1) % images.length;

  // Ocultar todas las imágenes
  images.forEach(img => img.style.opacity = 0);

  // Mostrar la imagen actual
  images[indiceImgActual].style.opacity = 1;
  header.classList.add('change-bg-color');
  html.classList.add('change-bg-color');
}



function slideshow(){
  setInterval(showNextSlide, 5000)
}