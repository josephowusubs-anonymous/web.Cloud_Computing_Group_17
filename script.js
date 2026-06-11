/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Plasma Window Open Animation ---
    // This gives that smooth KDE scale/fade-in effect when elements enter the screen
    const windows = document.querySelectorAll('.plasma-window');
    
    const windowObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('open');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px"
    });

    windows.forEach(win => {
        windowObserver.observe(win);
    });

    // --- 2. Contact Form Alert ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const userName = document.getElementById('name').value;
            
            // Standard smooth alert
            alert(`Query Submitted.\nThank you, ${userName}. Group 17 will review your inquiry shortly.`);
            contactForm.reset();
        });
    }
});
