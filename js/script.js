// Search Bar
let searchForm = document.querySelector(".search-form");
document.querySelector(".Search").onclick = () => {
    searchForm.classList.toggle("active");
    shoppingcart.classList.remove("active");
    loginForm.classList.remove("active");
    Navbar.classList.remove("active");
}

// Shopping cart
let shoppingcart = document.querySelector(".shopping-cart");
document.querySelector(".Cart").onclick = () => {
    shoppingcart.classList.toggle("active");
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
    Navbar.classList.remove("active");
}

// Login Form
let loginForm = document.querySelector(".login-form");
document.querySelector(".User").onclick = () => {
    loginForm.classList.toggle("active");
    shoppingcart.classList.remove("active");
    searchForm.classList.remove("active");
    Navbar.classList.remove("active");
}

// Navbar
let Navbar = document.querySelector(".navbar");
document.querySelector(".Bar").onclick = () => {
    Navbar.classList.toggle("active");
    loginForm.classList.remove("active");
    shoppingcart.classList.remove("active");
    searchForm.classList.remove("active");
}

window.onscroll = () => {
    searchForm.classList.remove("active");
    shoppingcart.classList.remove("active");
    loginForm.classList.remove("active");
    Navbar.classList.remove("active");
}


var swiper = new Swiper(".products-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });