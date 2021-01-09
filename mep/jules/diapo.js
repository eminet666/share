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
    var slides = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    console.log(slideIndex);
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
}


function toggleFullScreen(idon,idoff) {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      document.getElementById(idon).style.display = "none";
      document.getElementById(idoff).style.display = "block";
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      document.getElementById(idon).style.display = "block";
      document.getElementById(idoff).style.display = "none";
    }
  }
}
