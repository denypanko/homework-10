let productsCountEl = document.querySelector(".cart-counter");
let addToCartBtns = document.querySelectorAll(".add-btn");

addToCartBtns.forEach((item) =>
  item.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
);
