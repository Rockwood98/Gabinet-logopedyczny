"use strict";

//////////////////////////////Offert card(modal)/////////////////////////////////
const modalOne = document.querySelector(".modal-one");
const modalTwo = document.querySelector(".modal-two");
const modalThree = document.querySelector(".modal-three");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const closeModal = function () {
  for (let i = 0; i < btnsOpenModal.length; i++) {
    if (i === 0) {
      modalOne.classList.add("hidden");
      overlay.classList.add("hidden");
    } else if (i === 1) {
      modalTwo.classList.add("hidden");
      overlay.classList.add("hidden");
    } else if (i === 2) {
      modalThree.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  }
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  if (i === 0) {
    btnsOpenModal[i].addEventListener("click", function () {
      modalOne.classList.remove("hidden");
      overlay.classList.remove("hidden");
      btnCloseModal[i].addEventListener("click", closeModal);
      overlay.addEventListener("click", closeModal);
    });
  } else if (i === 1) {
    btnsOpenModal[i].addEventListener("click", function () {
      modalTwo.classList.remove("hidden");
      overlay.classList.remove("hidden");
      btnCloseModal[i].addEventListener("click", closeModal);
      overlay.addEventListener("click", closeModal);
    });
  } else if (i === 2) {
    btnsOpenModal[i].addEventListener("click", function () {
      modalThree.classList.remove("hidden");
      overlay.classList.remove("hidden");
      btnCloseModal[i].addEventListener("click", closeModal);
      overlay.addEventListener("click", closeModal);
    });
  }
}

document.addEventListener("keydown", function (e) {
  if (
    (e.key === "Escape" && !modalOne.classList.contains("hidden")) ||
    !modalTwo.classList.contains("hidden") ||
    !modalThree.classList.contains("hidden")
  ) {
    closeModal();
  }
});
//////////////////////////////Guide card(akordeon)/////////////////////////////////
const accordion = document.querySelectorAll(".option");
const panel = document.querySelectorAll(".panel");
const minus = document.querySelectorAll(".minus");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    if (i === 0) {
      panel[i].classList.toggle("hidden");
      minus[i].classList.toggle("fa-plus");
      minus[i].classList.toggle("fa-minus");
    } else {
      panel[i].classList.toggle("hidden");
      minus[i].classList.toggle("fa-plus");
      minus[i].classList.toggle("fa-minus");
    }
  });
}
//////////////////////////////Gallery zoom/////////////////////////////////
