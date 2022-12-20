"use strict";
// declared variables
const toggleMenu = document.querySelector(".toggle-menu");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const mobileLinks = document.querySelectorAll(".mobile-links");

// function that opens the mobile menu
const mobileMenu = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// function that closes the mobile menu
const closeMobileMenu = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < mobileLinks.length; i++) {
  mobileLinks[i].addEventListener("click", closeMobileMenu);
}
toggleMenu.addEventListener("click", mobileMenu);
closeModal.addEventListener("click", closeMobileMenu);
