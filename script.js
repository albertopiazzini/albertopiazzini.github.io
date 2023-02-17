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

/// CLICK PROJECT'S IMAGE

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
