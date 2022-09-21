"use strict";

// variables

const nam = document.querySelector("#name");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");
const email = document.querySelector("#email");

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

//// NAV BAR OPACITY
/*
const nav = document.querySelector(".navbar");

const opacityNavLinks = function (e, opacity) {
  const link = e.target;
  const siblings = document.querySelectorAll(".nav-link");
  console.log(siblings);
  const logo = document.querySelector(".logo-navbar");

  if (link.classList.contains(".nav-link")) {
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
      //logo.style.opacity = opacity;
    });
  }
};

nav.addEventListener("mouseover", function (e) {
  console.log("in");
  opacityNavLinks(e, 0.5);
});

nav.addEventListener("mouseout", function (e) {
  console.log("out");
  opacityNavLinks(e, 1);
});
*/

// mail

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("contact_service", "contact_form", this).then(
        function () {
          alert("Nice, the message has been successfully sent", "success");
          nam.textContent =
            phone.textContent =
            email.textContent =
            message.textContent =
              "";

          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
