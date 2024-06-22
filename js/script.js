// Search Bar
let searchForm = document.querySelector(".search-form");
document.querySelector(".Search").onclick = () => {
    searchForm.classList.toggle("active");
}

// Shopping cart
let shoppingcart = document.querySelector(".shopping-cart");
document.querySelector(".Cart").onclick = () => {
    shoppingcart.classList.toggle("active");
}

// Login Form
let loginForm = document.querySelector(".login-form");
document.querySelector(".User").onclick = () => {
    loginForm.classList.toggle("active");
}