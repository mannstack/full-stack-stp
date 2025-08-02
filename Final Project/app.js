// MG Technologies - Premium Flower Store Client Application - FIXED VERSION

// Application Data
const appData = {
    websiteName: "MG Technologies - Premium Flower Store",
    companyInfo: {
        name: "MG Technologies - Premium Flower Store",
        address: "456 Tech Garden Plaza, Innovation District, Mumbai 400001",
        phone: "+91 98765 43210",
        email: "info@mgflowers.com",
        website: "www.mgflowers.com",
        description: "Cutting-edge technology meets beautiful flowers - Your trusted partner for fresh flowers and innovative floral solutions",
        businessHours: {
            monday: "9:00 AM - 8:00 PM",
            tuesday: "9:00 AM - 8:00 PM", 
            wednesday: "9:00 AM - 8:00 PM",
            thursday: "9:00 AM - 8:00 PM",
            friday: "9:00 AM - 9:00 PM",
            saturday: "8:00 AM - 9:00 PM",
            sunday: "10:00 AM - 6:00 PM"
        }
    },
    products: [
        {
            product_id: 1,
            product_name: "Birthday Rose Bouquet",
            product_price: 1299,
            product_description: "Beautiful mixed color roses perfect for birthday celebrations. This stunning arrangement features 12 premium roses in vibrant colors including pink, yellow, and peach, complemented by fresh baby's breath and seasonal greenery. Hand-tied with elegant ribbon and presented in premium wrapping. Perfect for making someone's special day even more memorable.",
            product_image: "https://pplx-res.cloudinary.com/image/upload/v1754105770/pplx_project_search_images/7e3f2dd2f2a4ffe0a72076fcb97196aa6d71c9fe.jpg",
            product_type: "birthday"
        },
        {
            product_id: 2,
            product_name: "Colorful Birthday Mix",
            product_price: 899,
            product_description: "Vibrant mixed flower arrangement to make birthdays special. Features a delightful combination of seasonal flowers including gerberas, carnations, and chrysanthemums in bright, cheerful colors. Accented with decorative foliage and presented in a beautiful arrangement that brings joy and celebration to any birthday occasion.",
            product_image: "https://pplx-res.cloudinary.com/image/upload/v1754105770/pplx_project_search_images/61aa4d89e5d96eea69ae366fd03b72c856e8a77e.jpg",
            product_type: "birthday"
        },
        {
            product_id: 3,
            product_name: "Premium Birthday Collection",
            product_price: 1899,
            product_description: "Luxurious mixed flower arrangement with premium roses and seasonal blooms. This opulent collection features 18 premium roses, exotic lilies, and hand-selected seasonal flowers, artistically arranged in a sophisticated style. Includes premium packaging and complimentary greeting card. Perfect for milestone birthdays and special celebrations.",
            product_image: "https://pplx-res.cloudinary.com/image/upload/v1754105770/pplx_project_search_images/7e3f2dd2f2a4ffe0a72076fcb97196aa6d71c9fe.jpg",
            product_type: "birthday"
        },
        {
            product_id: 4,
            product_name: "Happy Birthday Roses",
            product_price: 1199,
            product_description: "Premium rose bouquet to celebrate another year of life and happiness. Features 15 carefully selected roses in classic red and pink, arranged with eucalyptus and seasonal greenery. Each rose is hand-picked for freshness and beauty, creating a memorable gift that expresses your heartfelt birthday wishes.",
            product_image: "https://pplx-res.cloudinary.com/image/upload/v1754105770/pplx_project_search_images/61aa4d89e5d96eea69ae366fd03b72c856e8a77e.jpg",
            product_type: "birthday"
        },
        {
            product_id: 5,
            product_name: "Red Rose Anniversary",
            product_price: 1599,
            product_description: "Classic red roses for your special anniversary celebration. This romantic arrangement features 24 long-stemmed premium red roses, symbolizing deep love and commitment. Each rose is carefully selected for its perfect form and rich color, arranged with elegant greenery and presented in luxury packaging. The ultimate expression of enduring love.",
            product_image: "https://pplx-res.cloudinary.com/image/upload/v1754105772/pplx_project_search_images/859d27734d4e2151ff56f89a2e436dd2a91318a4.jpg",
            product_type: "anniversary"
        },
        {
            product_id: 6,
            product_name: "Elegant Anniversary Bouquet",
            product_price: 1799,
            product_description: "Sophisticated flower arrangement for anniversary celebrations. This elegant bouquet combines premium roses with exotic orchids and seasonal blooms, creating a stunning display of love and sophistication. Features white and pink roses with purple orchids, accented with silver ribbon and presented in premium wrapping.",
            product_image: "https://pplx-res.cloudinary.com/image/upload/v1754105772/pplx_project_search_images/f11e8a951a2ad4ab4e3b70b41bb1e28f8c6cf14d.jpg",
            product_type: "anniversary"
        },
        {
            product_id: 7,
            product_name: "Anniversary Romance",
            product_price: 1699,
            product_description: "Romantic red roses wrapped elegantly for your love. This passionate arrangement features 20 premium red roses arranged in a classic dome shape, wrapped in luxurious black paper with gold accents. Includes a personalized message card and premium presentation box. Perfect for expressing deep romantic feelings on your special anniversary.",
            product_image: "https://pplx-res.cloudinary.com/image/upload/v1754105772/pplx_project_search_images/e8c9e4aa5c46e13c94c9a37d73c4302ae1e49a8a.jpg",
            product_type: "anniversary"
        },
        {
            product_id: 8,
            product_name: "Premium Anniversary Collection",
            product_price: 1899,
            product_description: "Luxurious flower arrangement for milestone anniversaries. This exquisite collection features premium imported roses, exotic flowers, and rare seasonal blooms arranged by master florists. Includes complementary champagne roses, white lilies, and eucalyptus, presented in a designer vase with premium ribbon and personalized anniversary card.",
            product_image: "https://pplx-res.cloudinary.com/image/upload/v1754105772/pplx_project_search_images/f11e8a951a2ad4ab4e3b70b41bb1e28f8c6cf14d.jpg",
            product_type: "anniversary"
        }
    ],
    testimonials: [
        {
            name: "Priya Sharma",
            rating: 5,
            comment: "Absolutely beautiful flowers! The birthday bouquet was fresh and perfectly arranged. My sister loved it!"
        },
        {
            name: "Raj Patel",
            rating: 5,
            comment: "Outstanding service and quality. The anniversary roses were exactly what I wanted for our special day."
        },
        {
            name: "Anita Singh",
            rating: 5,
            comment: "MG Flowers never disappoints. Premium quality flowers with elegant presentation every time."
        }
    ],
    users: [
        {
            user_id: 1,
            name: "Demo User",
            email: "demo@mgflowers.com",
            password: "demo123",
            phone: "9876543210",
            role: "client"
        }
    ],
    orders: [],
    gstRate: 18,
    paymentModes: ["Credit Card", "Debit Card", "UPI", "Cash on Delivery"]
};

// Application State
let currentUser = null;
let currentSection = 'home';
let cart = [];
let filteredProducts = [...appData.products];
let currentCheckoutStep = 1;
let orderDetails = null;

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing MG Technologies Client App...');
    
    // Load saved data
    loadUserFromStorage();
    loadCartFromStorage();
    
    // Initialize UI
    updateAuthUI();
    updateCartDisplay();
    renderBestSellers();
    renderProducts();
    renderTestimonials();
    
    // Setup event listeners
    setupEventListeners();
    
    // Show home section by default
    showSection('home');
    
    console.log('App initialized successfully');
});

// Event Listeners Setup - FIXED VERSION
function setupEventListeners() {
    console.log('Setting up event listeners...');

    // Navigation - FIXED
    document.querySelectorAll('[data-section]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            console.log('Navigating to section:', section);
            showSection(section);
            setActiveNavLink(link);
        });
    });

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu?.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Auth buttons - FIXED
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Login button clicked');
            showAuthModal();
        });
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }

    // Cart - FIXED
    const cartBtn = document.getElementById('cart-btn');
    const closeCart = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Cart button clicked');
            toggleCart();
        });
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', (e) => {
            e.preventDefault();
            closeCartSidebar();
        });
    }
    
    if (cartOverlay) {
        cartOverlay.addEventListener('click', (e) => {
            e.preventDefault();
            closeCartSidebar();
        });
    }

    // Hero buttons - FIXED
    const shopNowBtn = document.getElementById('shop-now');
    const learnMoreBtn = document.getElementById('learn-more');
    
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Shop now clicked');
            showSection('occasions');
        });
    }
    
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Learn more clicked');
            showSection('about');
        });
    }

    // Occasion cards - FIXED
    document.querySelectorAll('[data-occasion]').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const occasion = card.getAttribute('data-occasion');
            console.log('Occasion clicked:', occasion);
            showSection('occasions');
            setTimeout(() => {
                filterProducts(occasion);
                setActiveFilterBtn(document.querySelector(`[data-filter="${occasion}"]`));
            }, 300);
        });
    });

    // Filter buttons - FIXED
    document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = btn.getAttribute('data-filter');
            console.log('Filter clicked:', filter);
            filterProducts(filter);
            setActiveFilterBtn(btn);
        });
    });

    // Search - FIXED
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('focus', (e) => {
            e.stopPropagation();
        });
    }

    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Auth modal setup
    setupAuthModal();

    // Checkout modal setup
    setupCheckoutModal();

    // Scroll effect for navbar
    window.addEventListener('scroll', handleNavbarScroll);
    
    console.log('Event listeners setup complete');
}

// Navigation Functions - FIXED
function showSection(sectionName) {
    console.log('Showing section:', sectionName);
    
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionName;
        
        // Update URL without page reload
        window.history.pushState({}, '', `#${sectionName}`);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        console.log('Section shown:', sectionName);
    } else {
        console.error('Section not found:', sectionName);
    }
}

function setActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    if (activeLink && activeLink.classList.contains('nav-link')) {
        activeLink.classList.add('active');
    }
}

function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
}

// Product Functions - FIXED
function renderBestSellers() {
    const container = document.getElementById('best-sellers-grid');
    if (!container) return;

    const bestSellers = appData.products.slice(0, 4);
    container.innerHTML = bestSellers.map(product => createProductCard(product)).join('');
    
    console.log('Best sellers rendered');
}

function renderProducts(products = appData.products) {
    const container = document.getElementById('products-grid');
    if (!container) return;

    container.innerHTML = products.map(product => createProductCard(product)).join('');
    console.log('Products rendered:', products.length);
}

function createProductCard(product) {
    return `
        <div class="product-card fade-in" data-product-id="${product.product_id}">
            <div class="product-image">
                <img src="${product.product_image}" alt="${product.product_name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.product_name}</h3>
                <div class="product-price">₹${product.product_price.toLocaleString()}</div>
                <p class="product-description">${product.product_description.substring(0, 100)}...</p>
                <div class="product-actions">
                    <button class="btn btn-outline" onclick="showProductDetails(${product.product_id})">
                        <i class="fas fa-eye"></i>
                        <span>View Details</span>
                    </button>
                    <button class="btn btn-primary" onclick="addToCart(${product.product_id})">
                        <i class="fas fa-shopping-bag"></i>
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function filterProducts(filter) {
    console.log('Filtering products by:', filter);
    
    if (filter === 'all') {
        filteredProducts = [...appData.products];
    } else {
        filteredProducts = appData.products.filter(product => product.product_type === filter);
    }
    
    renderProducts(filteredProducts);
}

function setActiveFilterBtn(activeBtn) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    console.log('Searching for:', searchTerm);
    
    if (searchTerm === '') {
        renderProducts(filteredProducts);
        return;
    }
    
    const searchResults = filteredProducts.filter(product => 
        product.product_name.toLowerCase().includes(searchTerm) ||
        product.product_description.toLowerCase().includes(searchTerm) ||
        product.product_type.toLowerCase().includes(searchTerm)
    );
    
    renderProducts(searchResults);
}

// Product Details Modal - FIXED
function showProductDetails(productId) {
    console.log('Showing product details for:', productId);
    
    const product = appData.products.find(p => p.product_id === productId);
    if (!product) return;

    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) {
        console.error('Modal elements not found');
        return;
    }
    
    modalBody.innerHTML = `
        <div class="product-detail" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; padding: 2rem;">
            <div class="product-detail-image">
                <img src="${product.product_image}" alt="${product.product_name}" style="width: 100%; height: 400px; object-fit: cover; border-radius: 1rem;">
            </div>
            <div class="product-detail-info">
                <h2 style="font-family: var(--font-primary); color: var(--green-primary); margin-bottom: 1rem;">${product.product_name}</h2>
                <div class="product-detail-price" style="font-size: 2rem; color: var(--gold-primary); font-weight: 700; margin-bottom: 1rem;">₹${product.product_price.toLocaleString()}</div>
                <div class="product-detail-type" style="margin-bottom: 1rem;">
                    <span class="product-type-badge" style="background: var(--gold-primary); color: white; padding: 0.5rem 1rem; border-radius: 1rem; text-transform: capitalize;">${product.product_type}</span>
                </div>
                <div class="product-detail-description" style="margin-bottom: 2rem;">
                    <h4 style="color: var(--green-primary); margin-bottom: 0.5rem;">Description</h4>
                    <p style="line-height: 1.6; color: var(--gray-medium);">${product.product_description}</p>
                </div>
                <div class="product-detail-features" style="margin-bottom: 2rem;">
                    <h4 style="color: var(--green-primary); margin-bottom: 0.5rem;">Features</h4>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 0.5rem;"><i class="fas fa-leaf" style="color: var(--gold-primary); margin-right: 0.5rem;"></i> Fresh, premium quality flowers</li>
                        <li style="margin-bottom: 0.5rem;"><i class="fas fa-truck" style="color: var(--gold-primary); margin-right: 0.5rem;"></i> Same-day delivery available</li>
                        <li style="margin-bottom: 0.5rem;"><i class="fas fa-gift" style="color: var(--gold-primary); margin-right: 0.5rem;"></i> Beautiful presentation packaging</li>
                        <li style="margin-bottom: 0.5rem;"><i class="fas fa-heart" style="color: var(--gold-primary); margin-right: 0.5rem;"></i> Handcrafted by expert florists</li>
                    </ul>
                </div>
                <div class="product-detail-actions" style="display: flex; gap: 1rem; align-items: center;">
                    <div class="quantity-selector" style="display: flex; align-items: center; gap: 0.5rem; border: 2px solid var(--gold-primary); border-radius: 0.5rem; padding: 0.5rem;">
                        <button onclick="changeQuantity(-1)" style="background: none; border: none; color: var(--gold-primary); font-size: 1.2rem; cursor: pointer; width: 30px; height: 30px;">-</button>
                        <span id="modal-quantity" style="font-weight: 600; min-width: 20px; text-align: center;">1</span>
                        <button onclick="changeQuantity(1)" style="background: none; border: none; color: var(--gold-primary); font-size: 1.2rem; cursor: pointer; width: 30px; height: 30px;">+</button>
                    </div>
                    <button class="btn btn-primary" onclick="addToCartFromModal(${product.product_id})" style="flex: 1;">
                        <i class="fas fa-shopping-bag"></i>
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    showModal(modal);
}

function changeQuantity(change) {
    const quantitySpan = document.getElementById('modal-quantity');
    if (!quantitySpan) return;
    
    const currentQuantity = parseInt(quantitySpan.textContent);
    const newQuantity = Math.max(1, currentQuantity + change);
    quantitySpan.textContent = newQuantity;
}

function addToCartFromModal(productId) {
    const quantitySpan = document.getElementById('modal-quantity');
    const quantity = quantitySpan ? parseInt(quantitySpan.textContent) : 1;
    
    for (let i = 0; i < quantity; i++) {
        addToCart(productId);
    }
    
    hideModal(document.getElementById('product-modal'));
}

// Cart Functions - FIXED
function addToCart(productId) {
    console.log('Adding to cart:', productId);
    
    const product = appData.products.find(p => p.product_id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.product_id,
            name: product.product_name,
            price: product.product_price,
            image: product.product_image,
            type: product.product_type,
            quantity: 1
        });
    }

    updateCartDisplay();
    saveCartToStorage();
    showToast(`${product.product_name} added to cart!`, 'success');
    
    console.log('Cart updated:', cart);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    saveCartToStorage();
    showToast('Item removed from cart', 'info');
}

function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartDisplay();
        saveCartToStorage();
    }
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartBody = document.getElementById('cart-body');
    const cartFooter = document.getElementById('cart-footer');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const gst = Math.round(subtotal * appData.gstRate / 100);
    const total = subtotal + gst;

    // Update cart count
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    // Update cart body
    if (cartBody) {
        if (cart.length === 0) {
            cartBody.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-bag"></i>
                    <p>Your cart is empty</p>
                    <button class="btn btn-primary" onclick="continueShoppingFromCart()">Continue Shopping</button>
                </div>
            `;
        } else {
            cartBody.innerHTML = cart.map(item => `
                <div class="cart-item" data-item-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                        <div class="cart-item-controls">
                            <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                            <button class="btn btn-outline remove-btn" onclick="removeFromCart(${item.id})" title="Remove" style="margin-left: 0.5rem; padding: 0.25rem 0.5rem;">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    // Update cart footer
    if (cartFooter) {
        const totalsHtml = `
            <div class="cart-totals">
                <div class="total-row">
                    <span>Subtotal:</span>
                    <span>₹${subtotal.toLocaleString()}</span>
                </div>
                <div class="total-row">
                    <span>GST (18%):</span>
                    <span>₹${gst.toLocaleString()}</span>
                </div>
                <div class="total-row final-total">
                    <span>Total:</span>
                    <span>₹${total.toLocaleString()}</span>
                </div>
            </div>
            <button class="btn btn-primary btn-block" onclick="proceedToCheckout()" ${cart.length === 0 ? 'disabled' : ''}>
                <span>Proceed to Checkout</span>
                <i class="fas fa-arrow-right"></i>
            </button>
        `;
        
        cartFooter.innerHTML = totalsHtml;
    }
    
    console.log('Cart display updated:', { totalItems, subtotal, gst, total });
}

function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartSidebar && cartOverlay) {
        const isOpen = cartSidebar.classList.contains('open');
        
        if (isOpen) {
            closeCartSidebar();
        } else {
            cartSidebar.classList.add('open');
            cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        console.log('Cart toggled:', !isOpen);
    }
}

function closeCartSidebar() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartSidebar && cartOverlay) {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        console.log('Cart closed');
    }
}

function continueShoppingFromCart() {
    closeCartSidebar();
    showSection('occasions');
}

function proceedToCheckout() {
    if (!currentUser) {
        showToast('Please login to proceed with checkout', 'error');
        showAuthModal();
        return;
    }

    if (cart.length === 0) {
        showToast('Your cart is empty', 'error');
        return;
    }

    showCheckoutModal();
}

// Authentication Functions - FIXED
function setupAuthModal() {
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');
    
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            
            authTabs.forEach(t => t.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(`${tabName}-form`)?.classList.add('active');
        });
    });

    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Register form
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    // Modal close handlers
    const authClose = document.getElementById('auth-close');
    const authOverlay = document.getElementById('auth-overlay');
    
    if (authClose) {
        authClose.addEventListener('click', () => {
            hideModal(document.getElementById('auth-modal'));
        });
    }
    
    if (authOverlay) {
        authOverlay.addEventListener('click', () => {
            hideModal(document.getElementById('auth-modal'));
        });
    }
}

function showAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
        showModal(modal);
        console.log('Auth modal shown');
    }
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    if (!validateEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }

    if (!password) {
        showToast('Please enter your password', 'error');
        return;
    }

    // Find user (in real app, this would be an API call)
    const user = appData.users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        saveUserToStorage();
        updateAuthUI();
        hideModal(document.getElementById('auth-modal'));
        showToast(`Welcome back, ${user.name}!`, 'success');
    } else {
        showToast('Invalid email or password', 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('register-name').value.trim(),
        email: document.getElementById('register-email').value.trim(),
        phone: document.getElementById('register-phone').value.trim(),
        password: document.getElementById('register-password').value,
        confirmPassword: document.getElementById('register-confirm').value
    };

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
        showToast('Please fill all required fields', 'error');
        return;
    }

    if (!validateEmail(formData.email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }

    if (!validatePhone(formData.phone)) {
        showToast('Please enter a valid 10-digit phone number', 'error');
        return;
    }

    if (formData.password.length < 6) {
        showToast('Password must be at least 6 characters long', 'error');
        return;
    }

    if (formData.password !== formData.confirmPassword) {
        showToast('Passwords do not match', 'error');
        return;
    }

    if (appData.users.find(u => u.email === formData.email)) {
        showToast('Email already exists', 'error');
        return;
    }

    // Create new user
    const newUser = {
        user_id: appData.users.length + 1,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: 'client'
    };

    appData.users.push(newUser);
    currentUser = newUser;
    saveUserToStorage();
    updateAuthUI();
    hideModal(document.getElementById('auth-modal'));
    showToast(`Welcome to MG, ${newUser.name}!`, 'success');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('mg_current_user');
    updateAuthUI();
    showToast('Logged out successfully', 'info');
}

function updateAuthUI() {
    const loginBtn = document.getElementById('login-btn');
    const userMenu = document.getElementById('user-menu');
    const userName = document.getElementById('user-name');

    if (currentUser) {
        loginBtn?.classList.add('hidden');
        userMenu?.classList.remove('hidden');
        if (userName) userName.textContent = currentUser.name;
    } else {
        loginBtn?.classList.remove('hidden');
        userMenu?.classList.add('hidden');
    }
}

// Checkout Functions - SIMPLIFIED FOR DEMO
function setupCheckoutModal() {
    // Modal close handlers
    const checkoutClose = document.getElementById('checkout-close');
    const checkoutOverlay = document.getElementById('checkout-overlay');
    
    if (checkoutClose) {
        checkoutClose.addEventListener('click', () => {
            hideModal(document.getElementById('checkout-modal'));
        });
    }
    
    if (checkoutOverlay) {
        checkoutOverlay.addEventListener('click', () => {
            hideModal(document.getElementById('checkout-modal'));
        });
    }

    // Step navigation
    const continuePayment = document.getElementById('continue-payment');
    const backShipping = document.getElementById('back-shipping');
    const placeOrder = document.getElementById('place-order');
    const continueShoppingBtn = document.getElementById('continue-shopping-btn');
    
    if (continuePayment) {
        continuePayment.addEventListener('click', () => {
            if (validateShippingForm()) {
                showCheckoutStep(2);
            }
        });
    }

    if (backShipping) {
        backShipping.addEventListener('click', () => {
            showCheckoutStep(1);
        });
    }

    if (placeOrder) {
        placeOrder.addEventListener('click', placeOrderHandler);
    }

    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', () => {
            hideModal(document.getElementById('checkout-modal'));
            showSection('occasions');
        });
    }
}

function showCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    if (modal) {
        showModal(modal);
        showCheckoutStep(1);
        
        // Pre-fill user data
        if (currentUser) {
            const shippingName = document.getElementById('shipping-name');
            const shippingPhone = document.getElementById('shipping-phone');
            
            if (shippingName) shippingName.value = currentUser.name;
            if (shippingPhone) shippingPhone.value = currentUser.phone;
        }
        
        console.log('Checkout modal shown');
    }
}

function showCheckoutStep(stepNumber) {
    currentCheckoutStep = stepNumber;
    
    // Update step indicators
    document.querySelectorAll('.step').forEach((step, index) => {
        if (index + 1 <= stepNumber) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });

    // Show appropriate step content
    document.querySelectorAll('.checkout-step').forEach((step, index) => {
        if (index + 1 === stepNumber) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

function validateShippingForm() {
    const requiredFields = [
        'shipping-name',
        'shipping-phone', 
        'shipping-address',
        'shipping-city',
        'shipping-state',
        'shipping-pincode'
    ];

    for (const fieldId of requiredFields) {
        const field = document.getElementById(fieldId);
        if (!field || !field.value.trim()) {
            showToast('Please fill all shipping address fields', 'error');
            field?.focus();
            return false;
        }
    }

    const phone = document.getElementById('shipping-phone').value.trim();
    if (!validatePhone(phone)) {
        showToast('Please enter a valid 10-digit phone number', 'error');
        return false;
    }

    const pincode = document.getElementById('shipping-pincode').value.trim();
    if (!/^\d{6}$/.test(pincode)) {
        showToast('Please enter a valid 6-digit PIN code', 'error');
        return false;
    }

    return true;
}

function placeOrderHandler() {
    if (currentCheckoutStep !== 2) return;

    const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value;
    if (!paymentMethod) {
        showToast('Please select a payment method', 'error');
        return;
    }

    // Collect order data
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const gst = Math.round(subtotal * appData.gstRate / 100);
    const total = subtotal + gst;

    const shippingAddress = {
        name: document.getElementById('shipping-name').value,
        phone: document.getElementById('shipping-phone').value,
        address: document.getElementById('shipping-address').value,
        city: document.getElementById('shipping-city').value,
        state: document.getElementById('shipping-state').value,
        pincode: document.getElementById('shipping-pincode').value
    };

    const order = {
        order_id: generateOrderId(),
        user_id: currentUser.user_id,
        items: [...cart],
        shipping_address: shippingAddress,
        payment_method: paymentMethod,
        subtotal: subtotal,
        gst: gst,
        total: total,
        status: 'confirmed',
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString()
    };

    // Save order
    appData.orders.push(order);
    orderDetails = order;

    // Clear cart
    cart = [];
    updateCartDisplay();
    saveCartToStorage();
    closeCartSidebar();

    // Show success step
    showOrderConfirmation(order);
    showCheckoutStep(3);
    
    showToast('Order placed successfully!', 'success');
}

function showOrderConfirmation(order) {
    const orderInfo = document.getElementById('order-info');
    if (orderInfo) {
        orderInfo.innerHTML = `
            <div class="order-details" style="text-align: left; background: var(--gray-light); padding: 1.5rem; border-radius: 1rem; margin: 1rem 0;">
                <div class="order-id" style="font-size: 1.2rem; margin-bottom: 1rem;">Order ID: <strong>#${order.order_id}</strong></div>
                <div class="order-total" style="font-size: 1.2rem; color: var(--gold-primary); margin-bottom: 1rem;">Total Amount: <strong>₹${order.total.toLocaleString()}</strong></div>
                <div class="order-items" style="margin-bottom: 1rem;">
                    <h4 style="color: var(--green-primary); margin-bottom: 0.5rem;">Items Ordered:</h4>
                    <ul style="list-style: none; padding: 0;">
                        ${order.items.map(item => `
                            <li style="margin-bottom: 0.25rem;">• ${item.name} x ${item.quantity}</li>
                        `).join('')}
                    </ul>
                </div>
                <div class="delivery-info">
                    <h4 style="color: var(--green-primary); margin-bottom: 0.5rem;">Delivery Address:</h4>
                    <p style="line-height: 1.6;">${order.shipping_address.name}<br>
                       ${order.shipping_address.address}<br>
                       ${order.shipping_address.city}, ${order.shipping_address.state} - ${order.shipping_address.pincode}<br>
                       Phone: ${order.shipping_address.phone}</p>
                </div>
            </div>
        `;
    }
}

function generateOrderId() {
    return 'MG' + Date.now().toString().slice(-6);
}

// Contact Form
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('contact-name').value.trim(),
        email: document.getElementById('contact-email').value.trim(),
        phone: document.getElementById('contact-phone').value.trim(),
        subject: document.getElementById('contact-subject').value,
        message: document.getElementById('contact-message').value.trim()
    };

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
        showToast('Please fill all required fields', 'error');
        return;
    }

    if (!validateEmail(formData.email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }

    // Simulate form submission
    showToast('Thank you for your message! We will get back to you soon.', 'success');
    e.target.reset();
}

// Testimonials
function renderTestimonials() {
    const container = document.getElementById('testimonials-grid');
    if (!container) return;

    container.innerHTML = appData.testimonials.map(testimonial => `
        <div class="testimonial-card fade-in">
            <div class="testimonial-rating">
                ${'★'.repeat(testimonial.rating)}
            </div>
            <p class="testimonial-text">"${testimonial.comment}"</p>
            <div class="testimonial-author">- ${testimonial.name}</div>
        </div>
    `).join('');
}

// Modal Functions
function showModal(modal) {
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function hideModal(modal) {
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Setup modal close handlers
document.addEventListener('DOMContentLoaded', () => {
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');
    
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            hideModal(document.getElementById('product-modal'));
        });
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', () => {
            hideModal(document.getElementById('product-modal'));
        });
    }
});

// Utility Functions
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
    return /^[0-9]{10}$/.test(phone.replace(/\D/g, ''));
}

function saveUserToStorage() {
    try {
        localStorage.setItem('mg_current_user', JSON.stringify(currentUser));
    } catch (e) {
        console.error('Failed to save user to storage:', e);
    }
}

function loadUserFromStorage() {
    try {
        const savedUser = localStorage.getItem('mg_current_user');
        if (savedUser) {
            currentUser = JSON.parse(savedUser);
        }
    } catch (e) {
        console.error('Failed to load user from storage:', e);
    }
}

function saveCartToStorage() {
    try {
        localStorage.setItem('mg_cart', JSON.stringify(cart));
    } catch (e) {
        console.error('Failed to save cart to storage:', e);
    }
}

function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('mg_cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
        }
    } catch (e) {
        console.error('Failed to load cart from storage:', e);
        cart = [];
    }
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? 'check-circle' : 
                type === 'error' ? 'exclamation-circle' : 
                type === 'info' ? 'info-circle' : 'bell';
    
    toast.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

    container.appendChild(toast);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 5000);
}

// Global function assignments for onclick handlers
window.showProductDetails = showProductDetails;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.changeQuantity = changeQuantity;
window.addToCartFromModal = addToCartFromModal;
window.continueShoppingFromCart = continueShoppingFromCart;
window.proceedToCheckout = proceedToCheckout;

// Handle browser back/forward
window.addEventListener('popstate', () => {
    const hash = window.location.hash.slice(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    }
});

console.log('MG Technologies Client App loaded successfully - FIXED VERSION');