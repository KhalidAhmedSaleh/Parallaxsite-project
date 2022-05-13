"use strict";

// Variables
const showModalBtn = document.getElementById("interface-btn");
const closeModalBtn = document.getElementById("close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const imageTowBtn = document.getElementById("image-tow-btn");
// Functions
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Event listeners
showModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

imageTowBtn.addEventListener("click", function () {
  alert("I said don't click😡");
});
