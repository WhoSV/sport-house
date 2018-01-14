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
    scrollFunction();
    onScrollHandle();
  };

  // OnScroll Change navBar background color
  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById("navbar").style.background = "#232a35";
      document.getElementById("navbar").style.padding = "10px 5%";
    } else {
      document.getElementById("navbar").style.background = "";
      document.getElementById("navbar").style.padding = "50px 5%";
    }
  }

  // on scroll handle active button
  function onScrollHandle() {
    //Get current scroll position
    var currentScrollPos = $(document).scrollTop();
    //Iterate through all node
    $('#navbarNav > ul > li > a').each(function () {
      var curLink = $(this);
      var refElem = $(curLink.attr('href'));
      //Compare the value of current position and the every section position in each scroll
      if (refElem.length) {
        if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
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
  toggleColseNav()

  function toggleColseNav(){
    $('.navbar-nav a').on('click', function(){
      if($(window).width() < 767) {
        $('.navbar-toggler').click();
      }
  });}

  // Set Background-color onClick before scroll
  setBackgroundColorOnClick()

  function setBackgroundColorOnClick(){
    $('.navbar-toggler').on('click', function(){
      document.getElementById("navbar").style.background = "#232a35";
    });
  }
});
