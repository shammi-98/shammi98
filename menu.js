// Menu data
const menuItems = [
    {
        id: 1,
        name: "Bruschetta",
        description: "Toasted bread topped with tomatoes, garlic, and fresh basil",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1572695157360-1153aaad020b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "starters"
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Romaine lettuce, croutons, parmesan with Caesar dressing",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1669283714145-f97867f6c238?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "starters"
    },
    {
        id: 3,
        name: "Filet Mignon",
        description: "8oz tender beef filet with red wine reduction",
        price: 32.99,
        image: "https://images.unsplash.com/photo-1726677730666-fdc08a8da464?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "main"
    },
    {
        id: 1,
        name: "Bruschetta",
        description: "Toasted bread topped with tomatoes, garlic, and fresh basil",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1572695157360-1153aaad020b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "starters"
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Romaine lettuce, croutons, parmesan with Caesar dressing",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1669283714145-f97867f6c238?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "starters"
    },
    {
        id: 3,
        name: "Filet Mignon",
        description: "8oz tender beef filet with red wine reduction",
        price: 32.99,
        image: "https://images.unsplash.com/photo-1726677730666-fdc08a8da464?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "main"
    },
    {
        id: 1,
        name: "Bruschetta",
        description: "Toasted bread topped with tomatoes, garlic, and fresh basil",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1572695157360-1153aaad020b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "starters"
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Romaine lettuce, croutons, parmesan with Caesar dressing",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1669283714145-f97867f6c238?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "starters"
    },
    {
        id: 3,
        name: "Filet Mignon",
        description: "8oz tender beef filet with red wine reduction",
        price: 32.99,
        image: "https://images.unsplash.com/photo-1726677730666-fdc08a8da464?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "main"
    },
    {
        id: 1,
        name: "Bruschetta",
        description: "Toasted bread topped with tomatoes, garlic, and fresh basil",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1572695157360-1153aaad020b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "starters"
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Romaine lettuce, croutons, parmesan with Caesar dressing",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1669283714145-f97867f6c238?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "starters"
    },
    {
        id: 3,
        name: "Filet Mignon",
        description: "8oz tender beef filet with red wine reduction",
        price: 32.99,
        image: "https://images.unsplash.com/photo-1726677730666-fdc08a8da464?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "main"
    },{
        id: 1,
        name: "Bruschetta",
        description: "Toasted bread topped with tomatoes, garlic, and fresh basil",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1572695157360-1153aaad020b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "starters"
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Romaine lettuce, croutons, parmesan with Caesar dressing",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1669283714145-f97867f6c238?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "starters"
    },
    {
        id: 3,
        name: "Filet Mignon",
        description: "8oz tender beef filet with red wine reduction",
        price: 32.99,
        image: "https://images.unsplash.com/photo-1726677730666-fdc08a8da464?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "main"
    },
    // Add more menu items...
];

document.addEventListener('DOMContentLoaded', function() {
    renderMenuItems();
    setupCategoryFilters();
});

function renderMenuItems(items = menuItems) {
    const menuGrid = document.querySelector('.menu-grid');
    menuGrid.innerHTML = '';

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-item-info">
                <div class="menu-item-header">
                    <h3>${item.name}</h3>
                    <span class="price">$${item.price.toFixed(2)}</span>
                </div>
                <p class="description">${item.description}</p>
                <button class="add-to-cart" data-id="${item.id}">
                    <i class="fas fa-plus"></i> Add to Cart
                </button>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });

    // Add event listeners to add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            addToCart(itemId);
        });
    });
}

function setupCategoryFilters() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter items
            const category = this.getAttribute('data-category');
            if (category === 'all') {
                renderMenuItems();
            } else {
                const filteredItems = menuItems.filter(item => item.category === category);
                renderMenuItems(filteredItems);
            }
            
            // Animate the grid
            gsap.from('.menu-item', {
                duration: 0.5,
                y: 30,
                opacity: 0,
                stagger: 0.1,
                ease: 'power2.out'
            });
        });
    });
}