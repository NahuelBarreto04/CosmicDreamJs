const closeSesion = document.querySelector(".fa-power-off");
const exitSesion = () => {
  const questionExit = confirm("Estás seguro que quieres salir?");
  if (questionExit) {
    localStorage.removeItem("activeUser");
    setTimeout(() => (window.location.href = "/index.html"), 500);
  }
};
closeSesion.addEventListener("click", exitSesion);
