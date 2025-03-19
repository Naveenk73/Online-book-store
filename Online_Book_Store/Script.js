let cart = [];
let cartCount = document.getElementById('cart-count');
let cartItems = document.getElementById('cart-items');
let totalPrice = document.getElementById('total-price');
let cartModal = document.getElementById('cart-modal');

function addToCart(bookTitle, bookPrice) {
    cart.push({ title: bookTitle, price: bookPrice });
    updateCart();
}

function updateCart() {
    cartCount.innerText = cart.length;
    updateCartModal();
}

function updateCartModal() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.title} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalPrice.innerText = total.toFixed(2);
}

function viewCart() {
    cartModal.style.display = "block";
}

function closeCart() {
    cartModal.style.display = "none";
}

function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
    closeCart();
}
