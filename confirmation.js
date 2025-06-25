// DOM Elements
const orderIdElement = document.getElementById('order-id');
const orderTotalElement = document.getElementById('order-total');
const deliveryAddressElement = document.getElementById('delivery-address');
const copyDiscountBtn = document.getElementById('copy-discount');

// Initialize the confirmation page
document.addEventListener('DOMContentLoaded', function() {
    // Check if order was successful
    const urlParams = new URLSearchParams(window.location.search);
    const orderSuccess = urlParams.get('order') === 'success';
    
    if (!orderSuccess) {
        window.location.href = 'index.html';
        return;
    }
    
    // Load order details from sessionStorage
    loadOrderDetails();
    
    // Animate confirmation elements
    animateConfirmation();
    
    // Set up event listeners
    setupEventListeners();
    
    // Clear cart
    clearCart();
});

// Load order details from sessionStorage
function loadOrderDetails() {
    const orderDetails = JSON.parse(sessionStorage.getItem('orderDetails'));
    
    if (orderDetails) {
        orderTotalElement.textContent = orderDetails.total.toFixed(2);
        deliveryAddressElement.textContent = orderDetails.address;
    } else {
        // Fallback if no order details found
        orderIdElement.textContent = 'XXXXXX';
        orderTotalElement.textContent = '0.00';
        deliveryAddressElement.textContent = 'Address not available';
    }
}

// Animate confirmation elements
function animateConfirmation() {
    // Set initial styles for animation
    gsap.set(".checkmark__circle", {
        strokeDasharray: 166,
        strokeDashoffset: 166
    });
    gsap.set(".checkmark__check", {
        strokeDasharray: 48,
        strokeDashoffset: 48
    });
    
    // Create animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
    
    tl.to(".checkmark__circle", {
        strokeDashoffset: 0,
        duration: 0.7
    })
    .to(".checkmark__check", {
        strokeDashoffset: 0,
        duration: 0.4
    }, "-=0.4")
    .from(".confirmation-title", {
        y: 30,
        opacity: 0,
        duration: 0.5
    }, "-=0.2")
    .from(".confirmation-message", {
        y: 20,
        opacity: 0,
        duration: 0.5
    }, "-=0.3")
    .from(".order-details", {
        y: 20,
        opacity: 0,
        duration: 0.5
    }, "-=0.3")
    .from(".confirmation-actions", {
        y: 20,
        opacity: 0,
        duration: 0.5
    }, "-=0.3")
    .from(".order-again", {
        y: 20,
        opacity: 0,
        duration: 0.5
    }, "-=0.3");
}

// Set up event listeners
function setupEventListeners() {
    // Copy discount code
    copyDiscountBtn.addEventListener('click', function() {
        navigator.clipboard.writeText('GH10OFF').then(() => {
            this.textContent = 'COPIED!';
            this.classList.add('copied');
            
            setTimeout(() => {
                this.textContent = 'COPY CODE: GH10OFF';
                this.classList.remove('copied');
            }, 2000);
        });
    });
}

// Generate random order ID
function generateOrderId() {
    return Math.floor(100000 + Math.random() * 900000);
}

// Calculate delivery time (30-45 minutes from now)
function getDeliveryTime() {
    const now = new Date();
    const deliveryTime = new Date(now.getTime() + (Math.floor(Math.random() * 16) + 30 * 60000));
    
    return deliveryTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Clear cart
function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
}

// Update cart count in navbar
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = '0';
    cartCount.style.display = 'none';
}