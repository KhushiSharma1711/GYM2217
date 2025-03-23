import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Initialize Bootstrap components
document.addEventListener('DOMContentLoaded', () => {
  // Handle login form submission
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Here you would typically make an API call to authenticate
    console.log('Login attempt:', { email, password });
    alert('Login functionality will be implemented with backend integration');
  });

  // Handle booking form submission
  const bookingForm = document.getElementById('bookingForm');
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const className = document.getElementById('className').value;
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    
    // Here you would typically make an API call to book the class
    console.log('Booking:', { className, date, time });
    alert('Thank you for booking! You will receive a confirmation email shortly.');
    
    // Close the modal
    const bookingModal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
    bookingModal.hide();
  });

  // Set minimum date for booking to today
  const bookingDate = document.getElementById('bookingDate');
  if (bookingDate) {
    const today = new Date().toISOString().split('T')[0];
    bookingDate.min = today;
  }
});

// Function to show booking modal
window.showBookingModal = (className) => {
  const bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));
  document.getElementById('className').value = className;
  bookingModal.show();
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.class-card');
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('animate');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);