$(function () {

  // Header Carousel
  var myIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");

    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;

    if (myIndex > x.length) {
      myIndex = 1
    }
    x[myIndex-1].style.display = "block";

    setTimeout(carousel, 4000); // Change image every 2 seconds
  }

  window.onscroll = function() {
    onScrollChangeNavbarBgColor();
    onScrollHandleActiveButton();
    hideNavbarOnScroll();
  };

  function hideNavbarOnScroll() {
    var op = $(document.getElementById("navbarNav"));

    if (op.hasClass("show")) {
      $('.navbar-toggler').click();
    }
  }

  function onScrollChangeNavbarBgColor() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("navbar").style.background = "#ffffff";
      document.getElementById("navbar").style.padding = "5px 5%";
    } else {
      document.getElementById("navbar").style.background = "";
      document.getElementById("navbar").style.padding = "40px 5%";
    }
  }

  function onScrollHandleActiveButton() {
    //Get current scroll position
    var currentScrollPos = $(document).scrollTop();
    //Iterate through all node
    $('#navbarNav > ul > li > a').each(function () {
      var curLink = $(this);
      var refElem = $(curLink.attr('href'));
      //Compare the value of current position and the every section position in each scroll
      if (refElem.length) {
        let position = refElem.position().top - 10
        if ( position <= currentScrollPos && position + refElem.height() > currentScrollPos) {
          //Remove class active in all nav
          $('#navbarNav > ul > li').removeClass("active");
          //Add class active
          curLink.parent().addClass("active");
        }
        else {
          curLink.parent().removeClass("active");
        }
      }
    });
  }

  $(window).click(function(e) {
    hideNavbarOnClick();
  });

  function hideNavbarOnClick() {
    var op = $(document.getElementById("navbarNav"));

    if (op.hasClass("show")) {
      $('.navbar-toggler').click();
    }
  }

  // Smooth Scroll functionality
  var heightHeader = 10;
  smoothScroll()

  function smoothScroll(){
    $("#navbarNav a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;
        var scrollToPosition = $(hash).offset().top;

        $('html, body').animate({
          scrollTop: scrollToPosition
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  }

  // Toggle close navbar onClick
  toggleColseNavBar()

  function toggleColseNavBar(){
    $('.navbar-nav a').on('click', function(){
      if($(window).width() < 767) {
        $('.navbar-toggler').click();
      }
    });
  }

  // Set Background-color onClick before scroll
  setBackgroundColorOnClick()

  function setBackgroundColorOnClick(){
    $('.navbar-toggler').on('click', function(){
      document.getElementById("navbar").style.background = "#fff";
    });
  }
});

// Galler modal functionality
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
