function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

hideModalOnClick()
let toggleClick = false

function hideModalOnClick() {
  $('.next').click(function(){
    toggleClick = true
  });

  $('.prev').click(function(){
    toggleClick = true
  });

  $('#myModal').on('click', function(){
    if(!toggleClick) {
      document.getElementById('myModal').style.display = "none";
    } else {
      toggleClick = false
    }
  });
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myGallery");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
