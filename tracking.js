document.addEventListener('DOMContentLoaded', function() {
    // Animate the progress bar
    const progressFill = document.querySelector('.progress-fill');
    const steps = document.querySelectorAll('.step');
    
    // Simulate order progress
    const tl = gsap.timeline({
        defaults: {ease: "power2.inOut"},
        scrollTrigger: {
            trigger: ".tracking-progress",
            start: "top center",
            toggleActions: "play none none none"
        }
    });
    
    tl.to(progressFill, {width: '25%', duration: 0.5})
      .to(steps[1], {className: '+=active', duration: 0.3}, '-=0.2')
      .to(progressFill, {width: '50%', duration: 0.5})
      .to(steps[2], {className: '+=active', duration: 0.3}, '-=0.2')
      .to(progressFill, {width: '75%', duration: 0.5})
      .to(steps[3], {className: '+=active', duration: 0.3}, '-=0.2')
      .to(progressFill, {width: '100%', duration: 0.5});
    
    // Animate the details cards
    gsap.from('.detail-card', {
        scrollTrigger: {
            trigger: ".tracking-details",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.driver-card', {
        scrollTrigger: {
            trigger: ".tracking-details",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        delay: 0.2,
        ease: 'power3.out'
    });
});