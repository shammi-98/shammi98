document.addEventListener('DOMContentLoaded', function() {
    // Initialize form validation
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }
        
        // Validate email format
        if (!validateEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.classList.add('btn-loading');
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.classList.remove('btn-loading');
            showNotification('Your message has been sent successfully!', 'success');
            contactForm.reset();
        }, 1500);
    });
    
    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Show notification
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Initialize animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero animation
    gsap.from('.contact-hero h1', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.contact-hero p', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3
    });
    
    // Contact content animation
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        x: -50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        x: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    // Map animation
    gsap.from('.map-section', {
        scrollTrigger: {
            trigger: '.map-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
});