const mobileMenu = () => {
  let menu = document.querySelector(".header ul");
  let btn = document.querySelector(".header button");

  if (btn.innerText === "MENU") {
    menu.style.display = "block";
    btn.innerText = "CLOSE";
  } else {
    menu.style.display = "none";
    btn.innerText = "MENU";
  }
};

let rightBtn = document.querySelector("#right-btn");
let leftBtn = document.querySelector("#left-btn");
let pictures = document.querySelectorAll(".slider-images img");

let imgNum = 0;

rightBtn.addEventListener("click", () => {
  displayNone();
  imgNum++;
  if (imgNum === pictures.length) {
    imgNum = 0;
  }
  pictures[imgNum].style.display = "block";
});

leftBtn.addEventListener("click", () => {
  displayNone();
  imgNum--;
  if (imgNum === -1) {
    imgNum = pictures.length - 1;
  }
  pictures[imgNum].style.display = "block";
});

const displayNone = () => {
  pictures.forEach((img) => {
    img.style.display = "none";
  });
};

const portfolioSort = (button) => {
  let category = button.getAttribute("data-category");
  let portfolioItems = document.querySelectorAll(".portfolio-single-item");
  portfolioItems.forEach((item) => {
    item.style.display = "none";
  });

  if (category === "sve") {
    portfolioItems.forEach((item) => {
      item.style.display = "block";
    });
  }
  portfolioItems.forEach((item) => {
    if (item.getAttribute("data-category").includes(category)) {
      item.style.display = "block";
    }
  });
};

const openModal = () => {
  let modalWindow = document.querySelector(".popup-modal");
  let overlay = document.querySelector(".overlay");

  modalWindow.style.display = "block";
  overlay.style.display = "block";
};
const closeModal = () => {
  let modalWindow = document.querySelector(".popup-modal");
  let overlay = document.querySelector(".overlay");

  modalWindow.style.display = "none";
  overlay.style.display = "none";
};

const openModal1 = () => {
  let modalWindow1 = document.querySelector(".popup-modal1");
  let overlay1 = document.querySelector(".overlay1");

  modalWindow1.style.display = "block";
  overlay1.style.display = "block";
};

const closeModal1 = () => {
  let modalWindow1 = document.querySelector(".popup-modal1");
  let overlay1 = document.querySelector(".overlay1");

  modalWindow1.style.display = "none";
  overlay1.style.display = "none";
};
