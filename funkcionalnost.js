var slideIndex = 1;
showSlides(slideIndex);

// N moze biti 1 ili -1 -> sledeci ili prethodni slajd :)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Trenutna slika
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // Za sve stavimo da se ne vide
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); // Sve tackice deaktiviramo
  }
  slides[slideIndex-1].style.display = "block"; //Aktiviramo odgovarajuce ;)
  dots[slideIndex-1].className += " active";
}