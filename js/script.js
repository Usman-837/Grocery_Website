let searchForm = document.querySelector(".search-form");

document.querySelector(".Search").onclick = () => {
    searchForm.classList.toggle("active");
}

let shoppingcart = document.querySelector(".shopping-cart");

document.querySelector(".cart").onclick = () => {
    shoppingcart.classList.toggle("active");
}