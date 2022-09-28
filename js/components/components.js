const userCard = (comment) => {
  return `
    <div class="card">
    <img class="card__user" src="/assets/images/userImg.svg" alt="">
    <p class="card__text">${comment}</p>
</div>`;
};
const picOfDay = (pic) => {
  const { explanation, title, url } = pic;
  return ` <div class="card-news">
  <div class="hero__image-container">
      ${picOrFrame(url)}
  </div>
  <div class="hero__text-container">
      <h3 class="card__title">${title}</h3>
      <p class="card-text">${explanation}</p>
  </div>
</div>`;
};

const picOrFrame = (url) => {
  if (url.includes("youtube")) {
    return `<iframe src="${url}" class="framePic" frameborder="0"></iframe>`;
  }
  if (url.includes(".mp4")) {
    return `<video src="${url} class="framePic"></video>`;
  }
  return `<img class="hero__img picOfDay" src="${url}" alt="imageOfSpace">`;
};
