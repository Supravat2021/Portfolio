document.addEventListener("DOMContentLoaded", () => {
    const textList = [
      "a Web Developer  ",
      "a Creative Coder  ",
      "an Open Source Contributor  ",
    ];
  
    let i = 0;
    let j = 0;
    let currentText = '';
    let isDeleting = false;
    const speed = 75;
    const typewriter = document.querySelector('.typewriter-text');
  
    function type() {
      const fullText = textList[i];
  
      if (isDeleting) {
        currentText = fullText.substring(0, j--);
      } else {
        currentText = fullText.substring(0, j++);
      }
  
      typewriter.textContent = currentText;
  
      if (!isDeleting && j === fullText.length) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % textList.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, speed);
      }
    }
  
    type(); 

  window.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate");

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.animation = "fadeInUp 1s ease forwards";
    el.style.animationPlayState = "running";

    if (el.classList.contains("navbar")) {
      el.style.transform = "translateY(-30px)";
      el.style.animationDelay = "0.2s";
    } else if (el.classList.contains("hero-img")) {
      el.style.transform = "scale(0.9)";
      el.style.animation = "zoomIn 1s ease forwards";
      el.style.animationDelay = "0.7s";
    }
  });
  const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); 

  });

const ladderSteps = document.querySelectorAll('.ladder-step');

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      },
       index * 300);
    }
  });
}, {
  threshold: 0.2
});

ladderSteps.forEach(step => observer.observe(step));

function scrollCertificates(direction) {
  const carousel = document.getElementById("certificateCarousel");
  const scrollAmount = 800; // Bigger scroll since image is larger
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

});

