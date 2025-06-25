document.addEventListener('DOMContentLoaded', function() {
    // Initialize testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        testimonials[index].classList.add('active');
        currentTestimonial = index;
    }
    
    document.querySelector('.next-testimonial').addEventListener('click', function() {
        let nextIndex = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(nextIndex);
    });
    
    document.querySelector('.prev-testimonial').addEventListener('click', function() {
        let prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(prevIndex);
    });
    
    // Auto-rotate testimonials
    setInterval(() => {
        let nextIndex = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }, 5000);
    
    // Initialize animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero animation
    gsap.from('.about-hero h1', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.about-hero p', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3
    });
    
    // About content animation
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        x: -50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        x: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    // Team animation
    gsap.from('.team-member', {
        scrollTrigger: {
            trigger: '.team-section',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    });
    
    // Testimonials animation
    gsap.from('.testimonial-slider', {
        scrollTrigger: {
            trigger: '.about-testimonials',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
});