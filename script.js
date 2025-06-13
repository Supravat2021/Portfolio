document.addEventListener("DOMContentLoaded", () => {
    const textList = [
      "a Web Developer ",
      "a Front-End Enthusiast ",
      "a Creative Coder",
      "an Open Source Contributor",
    ];
  
    let i = 0;
    let j = 0;
    let currentText = '';
    let isDeleting = false;
    const speed = 100;
    const typewriter = document.querySelector('.typewriter-text');
  
    function type() {
      const fullText = textList[i];
  
      if (isDeleting) {
        currentText = fullText.substring(0, j--);
      } else {
        currentText = fullText.substring(0, j++);
      }
  
      typewriter.innerHTML = currentText;
  
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
  
    type(); // Start typing

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

setInterval(nextSlide, 3000); // changes image every 3 seconds

  });

const ladderSteps = document.querySelectorAll('.ladder-step');

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 300);
    }
  });
}, {
  threshold: 0.2
});

ladderSteps.forEach(step => observer.observe(step));
