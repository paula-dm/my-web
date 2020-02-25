let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow-container");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  
  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let autoImageChanging;

const startAutoImageChanging = function () {
    clearInterval(autoImageChanging);
    autoImageChanging = setInterval(changeHeroImage, 2000);
};

const stopAutoImageChanging = function () {
    clearInterval(autoImageChanging);

};

heroSection.addEventListener('mouseenter', stopAutoImageChanging);
heroSection.addEventListener('mouseleave', startAutoImageChanging);

startAutoImageChanging();