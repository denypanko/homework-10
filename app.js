let productsCountEl = document.querySelector(".cart-counter");
let addToCartBtns = document.querySelectorAll(".add-btn");

addToCartBtns.forEach((item) =>
  item.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
);

// modal

let modal = document.querySelector(".modal");
let moreDetailsBtns = document.querySelectorAll(".details-btn");
let closeBtn = document.querySelector(".btn-close");

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
  // modal.style.display = "block";
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
  //   modal.style.display = "none";
}

// modal scroll

window.addEventListener("scroll", function () {
  let scrollPercent =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  if (scrollPercent > 0.5) {
    modal.classList.add("show");
  }
});

// likes

let likes = document.querySelectorAll(".like");

likes.forEach((item) => item.addEventListener("click", clickedLike));

function clickedLike() {
  // if (this.classList.contains("clicked-like")) {
  //   this.classList.remove("clicked-like");
  // } else {
  //   this.classList.add("clicked-like");
  // }
  this.classList.toggle("clicked-like");
}

// slider
$(".slider").slick({
  autoplay: true,
  dot: true,
});

const decrementBtns = document.querySelectorAll(".decrement-btn");
const incrementBtns = document.querySelectorAll(".increment-btn");
const quantityInputs = document.querySelectorAll(".quantity-input");

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };

  this.toggleButtonState = function () {
    const count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };

  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };

  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };

  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );
  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
  this.toggleButtonState();
}

for (let i = 0; i < decrementBtns.length; i += 1) {
  new Counter(incrementBtns[i], decrementBtns[i], quantityInputs[i]);
}
