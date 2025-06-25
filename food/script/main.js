// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const toggleIcon = document.getElementById('toggle-icon');
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const cartCount = document.querySelector('.cart-count');
const featuredGrid = document.querySelector('.featured-grid');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDots = document.querySelectorAll('.testimonial-dot');

// Sample data for featured dishes
const featuredDishes = [
    {
        id: 1,
        name: "Truffle Pasta",
        description: "Handmade pasta with black truffle sauce and parmesan",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1601556123240-462c758a50db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "main"
    },
    {
        id: 2,
        name: "Chocolate Soufflé",
        description: "Warm chocolate soufflé with vanilla ice cream",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1638518963806-4d27451f3fa2?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "dessert"
    },
    {
        id: 3,
        name: "Seafood Platter",
        description: "Fresh seafood selection with lemon butter sauce",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1557267725-c530b236f446?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "main"
    }
];

// Sample testimonials
const testimonials = [
    {
        text: "The best dining experience I've had in years. The flavors were incredible and the service was impeccable.",
        author: "Sarah Johnson",
        role: "Food Critic"
    },
    {
        text: "Every dish was a work of art. The attention to detail is what sets Gourmet Haven apart from other restaurants.",
        author: "Michael Chen",
        role: "Regular Customer"
    },
    {
        text: "I celebrated my anniversary here and it was magical. The ambiance, the food, everything was perfect.",
        author: "Emily Rodriguez",
        role: "First-time Visitor"
    }
];

// Cart state
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set up theme toggle
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
        toggleIcon.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Load featured dishes
    renderFeaturedDishes();
    
    // Load testimonials
    renderTestimonials();
    
    // Update cart count
    updateCartCount();
    
    // Set up mobile menu toggle
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Theme toggle functionality
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            toggleIcon.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            toggleIcon.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
    
    // Make navbar sticky on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 2rem';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1rem 2rem';
            navbar.style.boxShadow = 'none';
        }
    });
});

// Render featured dishes
function renderFeaturedDishes() {
    featuredGrid.innerHTML = '';
    featuredDishes.forEach(dish => {
        const dishCard = document.createElement('div');
        dishCard.className = 'dish-card';
        dishCard.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}" class="dish-image">
            <div class="dish-info">
                <h3 class="dish-name">${dish.name}</h3>
                <p class="dish-description">${dish.description}</p>
                <div class="dish-footer">
                    <span class="dish-price">$${dish.price.toFixed(2)}</span>
                    <button class="add-to-cart" data-id="${dish.id}">
                        <i class="fas fa-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        featuredGrid.appendChild(dishCard);
    });
    
    // Add event listeners to add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const dishId = parseInt(this.getAttribute('data-id'));
            addToCart(dishId);
        });
    });
}

// Add item to cart
function addToCart(dishId) {
    const dish = featuredDishes.find(item => item.id === dishId);
    if (!dish) return;
    
    const existingItem = cart.find(item => item.id === dishId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: dish.id,
            name: dish.name,
            price: dish.price,
            quantity: 1,
            image: dish.image
        });
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show added notification
    showNotification(`${dish.name} added to cart!`);
}

// Update cart count in navbar
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
    cartCount.style.display = count > 0 ? 'flex' : 'none';
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
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

// Render testimonials
function renderTestimonials() {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    
    // Clear existing slides
    testimonialSlider.innerHTML = '';
    
    // Add slides
    testimonials.forEach((testimonial, index) => {
        const slide = document.createElement('div');
        slide.className = `testimonial-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <p class="testimonial-text">${testimonial.text}</p>
            <h4 class="testimonial-author">${testimonial.author}</h4>
            <p class="testimonial-role">${testimonial.role}</p>
        `;
        testimonialSlider.appendChild(slide);
    });
    
    // Add dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'testimonial-controls';
    testimonials.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-index', index);
        dotsContainer.appendChild(dot);
    });
    testimonialSlider.appendChild(dotsContainer);
    
    // Set up testimonial slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    // Add click event to dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-index'));
            showSlide(slideIndex);
        });
    });
    
    // Auto-advance slides every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
}