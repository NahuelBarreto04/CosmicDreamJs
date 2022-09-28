const burguerBars = document.getElementById("burguer");
const navMenu = document.getElementById("nav__menu");
const closer = document.getElementById("close");
const linkGallery = document.getElementById("link_gallery");
const linkLovers = document.getElementById("link_lovers");
const linkContact = document.getElementById("link_contact");

burguerBars.addEventListener("click", function () {
  navMenu.classList.toggle("show");
  navMenu.classList.remove("ocult");
  burguerBars.classList.toggle("disabled");
  closer.classList.toggle("enable");
});
closer.addEventListener("click", function () {
  navMenu.classList.toggle("ocult");
  navMenu.classList.remove("show");
  closer.classList.toggle("disabled");
  closer.classList.remove("enable");
  burguerBars.classList.remove("disabled");
});

//Cierre de menu cuando toco un link
linkGallery.addEventListener("click", function () {
  closer.click();
});

linkLovers.addEventListener("click", function () {
  closer.click();
});

linkContact.addEventListener("click", function () {
  closer.click();
});
