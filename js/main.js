  // Menu mobile
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
  });

  // Slider functionality
  const sliderDots = document.querySelectorAll('.slider-dot');
  const slides = document.querySelectorAll('.slider-slide');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(n) {
      slides.forEach(slide => slide.classList.remove('active'));
      sliderDots.forEach(dot => dot.classList.remove('active'));
      
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      sliderDots[currentSlide].classList.add('active');
  }

  function nextSlide() {
      showSlide(currentSlide + 1);
  }

  // Auto-rotate slides every 5 seconds
  function startSlider() {
      slideInterval = setInterval(nextSlide, 5000);
  }

  // Initialize slider
  showSlide(0);
  startSlider();

  // Add click event to dots
  sliderDots.forEach(dot => {
      dot.addEventListener('click', () => {
          clearInterval(slideInterval);
          showSlide(parseInt(dot.getAttribute('data-slide')));
          startSlider();
      });
  });

  // Pause on hover
  const sliderContainer = document.querySelector('.slider-container');
  sliderContainer.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
  });

  sliderContainer.addEventListener('mouseleave', () => {
      startSlider();
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
          
          // Close mobile menu if open
          mobileMenu.classList.add('hidden');
      });
  });

  // Form submission
  const contactForm = document.querySelector('form');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Merci pour votre message! Nous vous contacterons bientôt.');
          this.reset();
      });
  }