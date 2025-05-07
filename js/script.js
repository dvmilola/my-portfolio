// Custom JavaScript for portfolio website

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a simple console log to confirm script is loaded
    console.log('Portfolio script loaded successfully!');

    // You can add interactivity here, for example:
    // - Smooth scrolling for navigation links (if not handled by CSS)
    // - Animations on scroll
    // - Filtering projects
    // - Contact form validation and submission (though backend needed for actual submission)

    // Example of adding a class to the navbar on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});

// Add this to your style.css if you use the navbar scroll effect:
/*
.navbar.scrolled {
    background-color: rgba(0, 0, 0, 0.85); 
    transition: background-color 0.3s ease-in-out;
}
*/ 