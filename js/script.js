document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section[id], div[id]');
 
    const offset = 250; 

    const changeActiveLink = () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - offset) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', changeActiveLink);
    changeActiveLink(); 
});



document.addEventListener('DOMContentLoaded', () => {

    const sectionsToAnimate = document.querySelectorAll('.reveal-section');

    const observerOptions = {
        root: null, // The viewport
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the section is in view, add the 'is-visible' class
                entry.target.classList.add('is-visible');
                // Stop observing after the animation has run once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sectionsToAnimate.forEach(section => {
        sectionObserver.observe(section);
    });

});