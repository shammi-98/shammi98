// DOM Elements
const cartItemsContainer = document.querySelector('.cart-items');
const emptyCartMessage = document.querySelector('.empty-cart');
const cartSummary = document.querySelector('.cart-summary');
const itemCountElement = document.querySelector('.item-count');
const subtotalElement = document.querySelector('.subtotal');
const taxElement = document.querySelector('.tax');
const totalElement = document.querySelector('.total-price');
const clearCartBtn = document.querySelector('.clear-cart');
const proceedBtn = document.querySelector('.proceed-btn');
const checkoutSection = document.querySelector('.checkout-section');
const checkoutForm = document.querySelector('.checkout-form');
const paymentSelect = document.getElementById('payment');
const cardDetails = document.getElementById('card-details');
const placeOrderBtn = document.querySelector('.place-order-btn');

// Cart state
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize the cart page
document.addEventListener('DOMContentLoaded', function() {
    renderCartItems();
    updateCartSummary();
    setupEventListeners();
    
    // Initialize input masking for card fields
    if (window.Inputmask) {
        Inputmask().mask(document.querySelectorAll("[data-inputmask]"));
    }
});

// Render cart items
function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        cartSummary.style.display = 'none';
        return;
    }
    
    emptyCartMessage.style.display = 'none';
    cartSummary.style.display = 'block';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                <div class="cart-item-controls">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${item.id}">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <span class="item-total">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </div>
            <button class="remove-item" data-id="${item.id}">
                <i class="fas fa-times"></i>
            </button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Update item count
    itemCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            const isPlus = this.classList.contains('plus');
            updateCartItem(itemId, isPlus);
        });
    });
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            removeFromCart(itemId);
        });
    });
}

// Update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 2.99;
    const tax = subtotal * 0.08;
    const total = subtotal + deliveryFee + tax;
    
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    taxElement.textContent = `$${tax.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// Update cart item quantity
function updateCartItem(itemId, isPlus) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        if (isPlus) {
            cart[itemIndex].quantity += 1;
        } else {
            if (cart[itemIndex].quantity > 1) {
                cart[itemIndex].quantity -= 1;
            } else {
                cart.splice(itemIndex, 1);
            }
        }
        
        saveCart();
        renderCartItems();
        updateCartSummary();
        updateCartCount();
    }
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    renderCartItems();
    updateCartSummary();
    updateCartCount();
}

// Clear entire cart
function clearCart() {
    cart = [];
    saveCart();
    renderCartItems();
    updateCartSummary();
    updateCartCount();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart count in navbar
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCount = document.querySelector('.cart-count');
    
    cartCount.textContent = count;
    cartCount.style.display = count > 0 ? 'flex' : 'none';
}

// Setup event listeners
function setupEventListeners() {
    // Clear cart button
    clearCartBtn.addEventListener('click', clearCart);
    
    // Proceed to checkout button
    proceedBtn.addEventListener('click', function(e) {
        e.preventDefault();
        checkoutSection.style.display = 'block';
        checkoutSection.scrollIntoView({ behavior: 'smooth' });
        
        // Animate checkout section
        gsap.from(checkoutSection, {
            duration: 0.8,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });
    });
    
    // Payment method change
    paymentSelect.addEventListener('change', function() {
        if (this.value === 'card') {
            cardDetails.style.display = 'block';
            gsap.from(cardDetails, {
                duration: 0.5,
                y: 20,
                opacity: 0,
                ease: 'power2.out'
            });
        } else {
            cardDetails.style.display = 'none';
        }
    });
    
    // Form submission
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        placeOrder();
    });
}

// Place order function
function placeOrder() {
    // Validate form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment').value;
    
    if (!name || !email || !phone || !address || !paymentMethod) {
        showNotification('Please fill all required fields', 'error');
        return;
    }
    
    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('card-number').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;
        
        if (!cardNumber || !expiry || !cvv) {
            showNotification('Please fill all card details', 'error');
            return;
        }
        
        if (!validateCardNumber(cardNumber)) {
            showNotification('Please enter a valid card number', 'error');
            return;
        }
        
        if (!validateExpiry(expiry)) {
            showNotification('Please enter a valid expiry date (MM/YY)', 'error');
            return;
        }
        
        if (!validateCVV(cvv)) {
            showNotification('Please enter a valid CVV (3 digits)', 'error');
            return;
        }
    }
    
    // Show loading state
    placeOrderBtn.classList.add('btn-loading');
    
    // Simulate API call
    setTimeout(() => {
        // Clear cart
        clearCart();
        
        // Redirect to confirmation page
        window.location.href = 'confirmation.html?order=success';
    }, 2000);
}

// Validation functions
function validateCardNumber(number) {
    return /^\d{16}$/.test(number.replace(/\s/g, ''));
}

function validateExpiry(expiry) {
    return /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(expiry);
}

function validateCVV(cvv) {
    return /^\d{3}$/.test(cvv);
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

// Initialize cart from localStorage if coming from another page
function initializeCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCartCount();
    }
}

// Call initialization
initializeCart();
// In your cart.js when placing order:
const orderDetails = {
    total: calculateOrderTotal(), // Your total calculation
    address: document.getElementById('address').value
};
localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
window.location.href = 'confirmation.html?order=success';