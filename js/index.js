const containerPicDay = document.querySelector(".hero__cards-container");
const formComment = document.forms.formComment;
const inputComment = forms.elements.inputComment;
document.addEventListener("DOMContentLoaded", async () => {
  containerPicDay.innerHTML = picOfDay(await fetchPics());
});

const updateLocal = (item, element) => {
  return localStorage.setItem(item, JSON.stringify(element));
};

const getLocal = (item) => {
  return JSON.parse(localStorage.getItem(item));
};
const updateChangesUser = () => {
  const activeUser = getLocal("activeUser");
  users = users.filter((user) => activeUser.user !== user.user);
  users = [...users, activeUser];
  updateLocal("users", users);
};

formComment.addEventListener("submmit", uploadComment);

const uploadComment = (e) => {
  e.preventDefault();
  if (inputComment.value === "") {
    alert("Por favor ingrese un comentario");
  }
};
