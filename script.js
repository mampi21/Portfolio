// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// Scroll section active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar 
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Data Analyst'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// Get all the "Read More" buttons
const buttons = document.querySelectorAll('.read-more-btn');

// Loop through each button and add an event listener
buttons.forEach(button => {
  button.addEventListener('click', function () {
    // Get the parent section of the button
    const parentSection = this.closest('.description-section');
    
    // Get the dots and more content within that section
    const dots = parentSection.querySelector('.dots');
    const moreContent = parentSection.querySelector('.more-content');

    // Check if content is visible
    if (moreContent.style.display === 'none') {
      // Show the full content
      dots.style.display = 'none';
      moreContent.style.display = 'inline';
      this.textContent = 'Read Less'; // Change button text
    } else {
      // Hide the content again
      dots.style.display = 'inline';
      moreContent.style.display = 'none';
      this.textContent = 'Read More'; // Change button text
    }
  });
});
