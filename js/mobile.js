const burguerBars = document.getElementById("burguer");
const navMenu = document.getElementById("nav__menu");
const closer = document.getElementById("close");
const linkGallery = document.getElementById("link_gallery");
const linkLovers = document.getElementById("link_lovers");
const linkContact = document.getElementById("link_contact");
const links = document.querySelectorAll(".nav__link");

burguerBars.addEventListener("click", function () {
  navMenu.classList.add("show");
  navMenu.classList.remove("ocult");
  burguerBars.classList.toggle("disabled");
  closer.classList.toggle("enable");
});
closer.addEventListener("click", function () {
  navMenu.classList.add("ocult");
  navMenu.classList.remove("show");
  closer.classList.toggle("disabled");
  closer.classList.remove("enable");
  burguerBars.classList.remove("disabled");
});

//Cierre de menu cuando toco un link
links.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (navMenu.classList.contains("show")) {
      navMenu.classList.add("ocult");
      navMenu.classList.remove("show");
      closer.classList.remove("enable");
      burguerBars.classList.remove("disabled");
      return;
    }
  });
});
