const closeSesion = document.querySelector(".fa-power-off");
const imagesContainer = document.querySelector(".images__cards");
const selectImages = document.querySelector(".selectGallery");
const exitSesion = () => {
  const questionExit = confirm("Estás seguro que quieres salir?");
  if (questionExit) {
    localStorage.removeItem("activeUser");
    setTimeout(() => (window.location.href = "/index.html"), 500);
  }
};

const imagesGallery = [
  {
    name: "space-1",
    popular: true,
  },
  {
    name: "space-2",
    popular: false,
  },
  {
    name: "space-3",
    popular: true,
  },
  {
    name: "space-4",
    popular: false,
  },
  {
    name: "space-5",
    popular: true,
  },
  {
    name: "space-6",
    popular: true,
  },
  {
    name: "space-7",
    popular: true,
  },
  {
    name: "space-8",
    popular: false,
  },
  {
    name: "space-9",
    popular: true,
  },
  {
    name: "space-10",
    popular: false,
  },
  {
    name: "space-11",
    popular: true,
  },
  {
    name: "space-12",
    popular: false,
  },
  {
    name: "space-13",
    popular: true,
  },
  {
    name: "space-14",
    popular: false,
  },
  {
    name: "space-15",
    popular: true,
  },
  {
    name: "space-16",
    popular: false,
  },
  {
    name: "space-17",
    popular: true,
  },
  {
    name: "space-18",
    popular: false,
  },
  {
    name: "space-19",
    popular: true,
  },
  {
    name: "space-20",
    popular: true,
  },
  {
    name: "space-21",
    popular: false,
  },
  {
    name: "space-22",
    popular: false,
  },
  {
    name: "space-23",
    popular: true,
  },
];

const selectInput = () => {
  let selectValue = selectImages.value;
  if (selectValue.toLowerCase() === "all") {
    return imagesRender(imagesGallery);
  } else {
    const popular = imagesGallery.filter((image) => image.popular === true);
    imagesRender(popular);
  }
};
const imagesRender = (imagesArr) => {
  imagesContainer.innerHTML = imagesArr
    .map(
      (images) =>
        `<img class="image-gallery" src="/assets/images/spaceimg/${images.name}.jpg" alt="${images.name}">`
    )
    .join("");
};
document.addEventListener("document", imagesRender(imagesGallery));
selectImages.addEventListener("change", selectInput);
closeSesion.addEventListener("click", exitSesion);
