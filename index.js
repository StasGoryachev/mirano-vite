import "@/scss/index.scss";

const header = document.querySelector(".header");
const body = document.body;

let headerHeight = header.offsetHeight;
console.log("headerHeight:", headerHeight);

window.addEventListener("resize", (e) => {
  headerHeight = header.offsetHeight;
  console.log("headerHeight:", headerHeight);
});

window.addEventListener("scroll", (e) => {
  const scrollDistance = window.scrollY;
  if (scrollDistance > 99) {
    header.classList.add("header_fixed");
    body.style.paddingTop = `${headerHeight}px`;
  } else {
    header.classList.remove("header_fixed");
    body.style.paddingTop = 0;
  }
});

const adjustElementPosition = (el) => {
  const rect = el.getBoundingClientRect();
  console.log("adjustElementPosition ~ rect:", rect);
  const viewportWidth = window.innerWidth;
  console.log("adjustElementPosition ~ viewportWidth:", viewportWidth);
  console.log(rect);
  if (rect.left < 0) {
    el.style.left = "0";
    el.style.right = "auto";
    el.style.transform = "translateX(0)";
  } else if (rect.right > viewportWidth) {
    el.style.left = "auto";
    el.style.right = "0";
    el.style.transform = "translateX(0)";
  } else {
    el.style.left = "";
    el.style.right = "";
    el.style.transform = "";
  }

  const postRect = element.getBoundingClientRect();

  if ((postRect.left < 0 || postRect.right > viewportWidth) && count < 3) {
    count++;
    adjustElementPosition(element, count);
  }
};

const clearOpenClasses = () => {
  document.querySelectorAll(".choices__btn").forEach((btn) => {
    btn.classList.remove("choices__btn_open");
  });
  document.querySelectorAll(".choices__box").forEach((box) => {
    box.classList.remove("choices__box_open");
  });
};

const choices = document.querySelectorAll(".choices");

choices.forEach((choice) => {
  console.log("choices.forEach ~ choices:", choices);
  const btn = choice.querySelector(".choices__btn");
  const box = choice.querySelector(".choices__box");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (box.classList.contains("choices__box_open")) {
      btn.classList.remove("choices__btn_open");
      box.classList.remove("choices__box_open");
    } else {
      clearOpenClasses();
      btn.classList.add("choices__btn_open");
      box.classList.add("choices__box_open");
    }

    adjustElementPosition(box);
    window.addEventListener("resize", (e) => {
      adjustElementPosition(box);
    });
  });
});

const headerCartBtn = document.querySelector(".header__cart-button");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector(".cart__close");

headerCartBtn.addEventListener("click", () => {
  cart.classList.toggle("cart_open");
});
cart.classList.toggle("cart_open");
cartClose.addEventListener("click", (e) => {
  cart.classList.remove("cart_open");
});
