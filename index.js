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
};

const choices = document.querySelectorAll(".choices");

choices.forEach((choice) => {
  console.log("choices.forEach ~ choices:", choices);
  const btn = choice.querySelector(".choices__btn");
  const box = choice.querySelector(".choices__box");

  btn.addEventListener("click", () => {
    box.classList.toggle("choices__box_open");
    adjustElementPosition(box);
  });
});
