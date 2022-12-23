"use strict";
// declared variables
const toggleMenu = document.querySelector(".toggle-menu");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const mobileLinks = document.querySelectorAll(".mobile-links");
const body = document.querySelector("body");

// function that opens the mobile menu
const mobileMenu = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.style.overflow = "hidden";
};

// function that closes the mobile menu
const closeMobileMenu = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.style.overflow = "visible";
};
for (let i = 0; i < mobileLinks.length; i++) {
  mobileLinks[i].addEventListener("click", closeMobileMenu);
}
toggleMenu.addEventListener("click", mobileMenu);
closeModal.addEventListener("click", closeMobileMenu);
window.addEventListener("resize", () => {
  if (window.innerHeight >= 768) {
    overlay.classList.add("hidden");
  }
});
overlay.addEventListener("click", closeMobileMenu);
// works section and pop up window.

// Array storing Portfolio projects
let worksArray = [
  {
    name: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    img: "./images/desktop/portfolio-one.png",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "css", "javascript"],
    linkDemo: "https://glorymugizi.github.io/myportfolio/",
    sourceCode: "https://github.com/glorymugizi/myportfolio/tree/main",
  },
  {
    name: "Multi-Post Stories",
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    img: "./images/desktop/Portfolio-two.png",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "css", "javascript"],
    linkDemo: "https://glorymugizi.github.io/myportfolio/",
    sourceCode: "https://github.com/glorymugizi/myportfolio/tree/main",
  },
  {
    name: "Facebook 360",
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    img: "./images/desktop/Portfolio-three.png",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "css", "javascript"],
    linkDemo: "https://glorymugizi.github.io/myportfolio/",
    sourceCode: "https://github.com/glorymugizi/myportfolio/tree/main",
  },
  {
    name: "Uber Navigation",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    img: "./images/desktop/Portfolio-four.png",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["html", "css", "javascript"],
    linkDemo: "https://glorymugizi.github.io/myportfolio/",
    sourceCode: "https://github.com/glorymugizi/myportfolio/tree/main",
  },
];
// project cards or works
const projectsSection = document.querySelector("#portfolio");
const modalSection = document.querySelector("#modal");
worksArray.forEach((project) => {
  const { name, description, img, detail, technologies, linkDemo, sourceCode } =
    project;
  projectsSection.innerHTML += `
  <div class="grid-item">
            <div class="card">
              <div class="project">
                <img
                  src=${img}
                />
              </div>
              <div class="card-description">
                <h2 class="project-title">${name}</h2>
                <div class="frame">
                  <h5>CANOPY</h5>
                  <ul>
                    <li>Back End Dev</li>
                    <li>2015</li>
                  </ul>
                </div>

                <p class="paragraph">
                  ${description}
                </p>
                <div class="languages">
                  <ul class="language">
                    <li>${technologies[0]}</li>
                    <li>${technologies[1]}</li>
                    <li>${technologies[2]}</li>
                  </ul>
                </div>
                <div class="btn">
                  <button class="see-project-btn">See Project</button>
                </div>
              </div>
            </div>`;
  modalSection.innerHTML += `
<div class="popup-container">
<div class="modal-blur"></div>
<div class="popup">
<div class="popup-heading"><h2 class="project-title">${name}<h2>
<div><span class="close-popup">&times;</span></div>
</div>

<div class="">
<div class="frame">
    <h5>CANOPY</h5>
    <ul>
      <li>Back End Dev</li>
      <li>2015</li>
    </ul>
</div>
<div class="">
<img
src=${img} class="modal-img"
/>
</div>
<div class="modal-desc">
  <p class="paragraph">
    ${detail}
  </p>
  <div class="modal-desc-right">
    <div class="languages">
      <ul class="language">
        <li>${technologies[0]}</li>
        <li>${technologies[1]}</li>
        <li>${technologies[2]}</li>
      </ul>
    </div>
    <div class="btn">
      <button class="see-live-btn">See live <img src="./images/popup/live.png" alt="project live link" /></button>
      <button class="see-live-btn"><span>See Source </span><img src="./images/popup/github.png" alt="github" /></button>
    </div>
  </div>
</div>
</div>
</div>
</div></div>`;
});
const popups = document.querySelectorAll(".popup-container");
const seeProjectBtns = document.querySelectorAll(".see-project-btn");
const closePopupBtn = document.querySelectorAll(".close-popup");

seeProjectBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    popups[index].classList.add("open-popup");
    console.log(`clicked btn`);
  });
});

closePopupBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    popups[index].classList.remove("open-popup");
  });
});
