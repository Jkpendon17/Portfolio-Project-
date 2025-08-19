const toggleBtn = document.getElementById("toggle-btn");
const body = document.body;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');


toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});





let currentIndex = 0;
const totalImages = images.length;
const visibleImages = 2; // Since each image is 50% width

function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 50}%)`;
  
  // Disable buttons at boundaries
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= totalImages - visibleImages;
}

// Previous button - stops at first image
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

// Next button - stops at last image
nextBtn.addEventListener('click', () => {
  if (currentIndex < totalImages - visibleImages) {
    currentIndex++;
    updateSlider();
  }
});

// Initialize button states
updateSlider();