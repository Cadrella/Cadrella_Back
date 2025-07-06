const cartNumber = document.getElementById('cart_number');

if(localStorage.getItem('cart_products')) {
    const cartProducts = JSON.parse(localStorage.getItem('cart_products'));
    cartNumber.innerHTML = `${cartProducts.length}`;
}