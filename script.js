"use strict";

const arrowDown = document.querySelector(".arrow-down");
const projects = document.querySelector("#projects");

arrowDown.addEventListener("click", function () {
  allBox.forEach((box) => {
    sectionObserver.observe(box);
    box.classList.remove("box--hidden");
  });
  projects.scrollIntoView({ behavior: "smooth" });
});

//// REVEALING ELEMENTS ON SCROOL

const allBox = document.querySelectorAll(".box");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("box--hidden");

  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allBox.forEach((box) => {
  sectionObserver.observe(box);
  box.classList.add("box--hidden");
});
