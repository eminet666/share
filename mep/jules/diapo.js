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
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
}

function imgAdjust(contenant) {
    var el = document.querySelector(contenant);
    var largeur, hauteur;
    // console.log(window.screen.orientation.angle);
    if(window.screen.orientation.angle == 0) {
        largeur = el.clientWidth;
        hauteur = el.clientHeight;
    }
    else {
        largeur = el.clientHeight;
        hauteur = el.clientWidth;
    }

    // console.log(contenant+"_"+largeur+"_"+hauteur);
    let ratio = largeur/hauteur;

    var elementList = document.querySelectorAll(".visuel");
       for (var i = 0; i < elementList.length; i++) {
           let elt = elementList[i];
           let imgW = elt.naturalWidth;
           let imgH = elt.naturalHeight;
           let imgRatio = imgW / imgH;

           if(ratio > imgRatio) {
               elt.style.setProperty('height', hauteur + "px");
               elt.style.setProperty('width', 'auto');
               // console.log(hauteur+"_auto");
           }
           else {
               elt.style.setProperty('width', largeur + "px");
               elt.style.setProperty('height', 'auto');
               // console.log("auto_"+largeur);
           }
       }
}
imgAdjust(".pleinepage");

function toggleFullScreen(idon,idoff) {
  if (!document.fullscreenElement) {
      window.document.documentElement.requestFullscreen();
      document.getElementById(idon).style.display = "none";
      document.getElementById(idoff).style.display = "block";
  } else {
    if (document.exitFullscreen) {
      window.document.exitFullscreen();
      document.getElementById(idon).style.display = "block";
      document.getElementById(idoff).style.display = "none";
    }
  }
}

function checkOrientation() {
    window.addEventListener("orientationchange", function() {
        imgAdjust(".pleinepage");
        // console.log(window.screen.orientation.angle);
    }, false);
}
checkOrientation();
window.scrollTo(0,1);
