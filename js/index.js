const containerPicDay = document.querySelector(".hero__cards-container");
const formComment = document.forms.formComment;
const inputComment = formComment.elements.inputComment;
const containerComments = document.querySelector(".cards");
const closeSesion = document.querySelector(".fa-power-off");

const updateLocal = (item, element) => {
  return localStorage.setItem(item, JSON.stringify(element));
};
let users = JSON.parse(localStorage.getItem("users")) || [];

const getLocal = (item) => {
  return JSON.parse(localStorage.getItem(item));
};
const updateChangesUser = () => {
  const activeUser = getLocal("activeUser");
  users = users.filter((user) => activeUser.user !== user.user);
  users = [...users, activeUser];
  updateLocal("users", users);
};

const uploadComment = (e) => {
  e.preventDefault();
  const activeUser = getLocal("activeUser");
  if (!activeUser) {
    return alert("No ha ingresado un usuario");
  }
  if (inputComment.value === "") {
    return alert("Por favor ingrese un comentario");
  }
  if (
    activeUser.comments.includes(inputComment.value) ||
    randomComments.includes(inputComment.value)
  ) {
    return alert("No haga spam");
  }
  activeUser.comments = [...activeUser.comments, inputComment.value];
  updateLocal("activeUser", activeUser);
  updateChangesUser();
  renderComments(users);
};
const renderComments = (users) => {
  let comments = [];
  let userComments = users
    .map((user) => user.comments)
    .join()
    .split(",");
  userComments = userComments.filter((comment) => comment !== "");
  if (userComments) {
    comments = comments.concat(randomComments, userComments).reverse();
    return (containerComments.innerHTML = comments.map((comment) =>
      userCard(comment)
    ));
  }
  containerComments.innerHTML = randomComments.map((comment) =>
    userCard(comment)
  );
};

const exitSesion = () => {
  const questionExit = confirm("Estás seguro que quieres salir?");
  if (questionExit) {
    localStorage.removeItem("activeUser");
    setTimeout(() => (window.location.href = "/index.html"), 500);
  }
};

formComment.addEventListener("submit", uploadComment);
document.addEventListener("DOMContentLoaded", async () => {
  containerPicDay.innerHTML = picOfDay(await fetchPics());
  renderComments(users);
});
closeSesion.addEventListener("click", exitSesion);
