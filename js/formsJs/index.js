const loginContainer = document.querySelector("#form_login");
const registerContainer = document.querySelector("#form_register");
const btnChange = document.querySelectorAll(".btn_index");
const activeUser = (item) => {
  return localStorage.setItem("activeUser", JSON.stringify(item));
};
const getLocal = (item) => {
  return JSON.parse(localStorage.getItem(item));
};
const changeForm = () => {
  if (loginContainer.classList.contains("hidden")) {
    registerContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
    loginContainer.classList.add("fade-in");
    return;
  }
  if (registerContainer.classList.contains("hidden")) {
    loginContainer.classList.add("hidden");
    registerContainer.classList.remove("hidden");
    registerContainer.classList.add("fade-in");
    return;
  }
};

btnChange.forEach((btn) => {
  btn.addEventListener("click", changeForm);
});

const findData = (input) => {
  return input.getAttribute("data-input");
};

const searchSpan = (input, data) => {
  let formElements = input.parentNode.childNodes;
  let formSpans = [...formElements].filter((e) => e.tagName == "SPAN");
  let spanInput = formSpans.find(
    (span) => span.getAttribute("data-input") === data
  );
  return spanInput;
};
const validateInput = (input, data) => {
  const inputSpan = searchSpan(input, data);
  inputSpan.innerHTML = "";
  input.classList.remove("form__error-validationInput");
  input.classList.add("form__validate");
};
function inputError(input, mensaje, data) {
  const inputSpan = searchSpan(input, data);
  inputSpan.innerHTML = `<i class="fa-solid fa-circle-xmark icon__error"></i> ${mensaje}`;
  input.classList.add("form__error-validationInput");
}
