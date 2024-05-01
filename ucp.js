// ucp.js

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
  // Hide all slides
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
  // Update indicators
  indicators.forEach((indicator, i) => {
    indicator.classList.remove('active');
    if (i === index) {
      indicator.classList.add('active');
    }
  });
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

// Function to update date and time
function updateDateTime() {
  const now = new Date();
  const dateElement = document.getElementById('date');
  const timeElement = document.getElementById('time');
  
  // Update date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = now.toLocaleDateString('en-US', options);
  
  // Update time
  timeElement.textContent = now.toLocaleTimeString();
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display date and time
updateDateTime();

// Automatic slide transition
setInterval(() => {
  nextSlide();
}, 3000); // Change slide every 3 seconds
