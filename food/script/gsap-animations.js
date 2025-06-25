// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation on page load
document.addEventListener('DOMContentLoaded', function() {
    // Hero section animations
    gsap.from('.hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3
    });
    
    gsap.from('.hero-subtitle', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.6
    });
    
    gsap.from('.hero-buttons', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.9
    });
    
    gsap.from('.hero-image img', {
        duration: 1.5,
        x: 50,
        opacity: 0,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.6
    });
    
    // Floating animation for hero image
    gsap.to('.floating', {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    // Navbar animation on scroll
    gsap.to('.navbar', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: '+=100',
            scrub: true
        },
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        padding: '0.5rem 2rem',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    });
    
    // Featured dishes section animation
    gsap.from('.section-title', {
        scrollTrigger: {
            trigger: '.featured',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    // gsap.from('.dish-card', {
    //     scrollTrigger: {
    //         trigger: '.featured',
    //         start: 'top 70%',
    //         toggleActions: 'play '
    //     },
    //     duration: 0.8,
    //     y: 50,
    //     opacity: 0,
    //     stagger: 0.2,
    //     ease: 'power3.out'
    // });
    
    // Testimonials section animation
    gsap.from('.testimonials', {
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 80%',
            toggleActions: 'play'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    // Footer animation
    gsap.from('.footer-col', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Theme toggle animation
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            gsap.to('body', {
                duration: 0.5,
                backgroundColor: '#121212',
                color: '#f0f0f0',
                ease: 'power2.inOut'
            });
            
            gsap.to(toggleIcon, {
                duration: 0.3,
                rotate: 360,
                ease: 'power2.out'
            });
        } else {
            gsap.to('body', {
                duration: 0.5,
                backgroundColor: '#f9f9f9',
                color: '#333',
                ease: 'power2.inOut'
            });
            
            gsap.to(toggleIcon, {
                duration: 0.3,
                rotate: -360,
                ease: 'power2.out'
            });
        }
    });
});

// Animation for notification
function animateNotification(notification) {
    gsap.from(notification, {
        duration: 0.3,
        y: -20,
        opacity: 0,
        ease: 'power2.out'
    });
}