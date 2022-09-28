const formRegister = document.forms.formRegister;
const formUser = formRegister.elements.userRegister;
const formPass = formRegister.elements.passRegister;
const formPassConfirm = formRegister.elements.passConfirm;

const userLocal = (item) => {
  return localStorage.setItem("users", JSON.stringify(item));
};
let users = JSON.parse(localStorage.getItem("users")) || [];

const allValid = (user, pass, passConfirm) => {
  return (
    notEmpty(user, pass, passConfirm) &&
    allLengthValid(user, pass, passConfirm) &&
    confirmPass(pass, passConfirm) &&
    !alreadyUser(user)
  );
};
const checkUser = (userInput) => {
  if (users.length >= 1) {
    if (users.some((userz) => userz.user === userInput.value)) {
      return inputError(
        userInput,
        "Este usuario ya está registrado",
        findData(userInput)
      );
    }
  }
  if (users.user === userInput.value) {
    return inputError(
      userInput,
      "Este usuario ya está registrado",
      findData(userInput)
    );
  }
};

const alreadyUser = (userInput) => {
  return users.some((userz) => userz.user === userInput.value);
};
const confirmPass = (pass, confirmPass) => pass.value === confirmPass.value;
const confirmPassError = (pass, confirmPass) => {
  if (pass.value !== confirmPass.value) {
    return inputError(
      confirmPass,
      "Las contraseñas no coinciden",
      findData(confirmPass)
    );
  }
  validateInput(confirmPass, findData(confirmPass));
};
const emptyError = (user, pass, passConfirm) => {
  const validateEmpty = (input) => {
    if (input.value === "") {
      inputError(input, "Complete el campo", findData(input));
    }
  };
  validateEmpty(user);
  validateEmpty(pass);
  validateEmpty(passConfirm);
};

const notEmpty = (user, pass, passConfirm) => {
  return user.value !== "" && pass.value !== "" && passConfirm.value !== "";
};

const allLengthValid = (user, pass) =>
  inputLength(user, 3, 30) && inputLength(pass, 8, 30);
const inputLength = (input, min, max) =>
  input.value.length >= min && input.value.length < max;

const lengthError = (user, pass) => {
  const higherMin = (input, mensagge, min, data) => {
    if (!(input.value.length >= min)) {
      return inputError(input, mensagge, data);
    } else {
      return validateInput(input, data);
    }
  };
  const minorMax = (input, mensagge, max, data) => {
    if (!(input.value.length <= max)) {
      return inputError(input, mensagge, data);
    }
  };
  higherMin(
    user,
    "El nombre debe tener minimo 3 caracteres",
    3,
    findData(user)
  );

  minorMax(
    user,
    "El nombre debe tener menos de 30 caracteres",
    30,
    findData(user)
  );
  higherMin(
    pass,
    "La contraseña debe tener minimo 8 caracteres",
    8,
    findData(pass)
  );

  minorMax(
    pass,
    "La contraseña debe tener menos de 30 caracteres",
    30,
    findData(pass)
  );
};

const validateAll = (user, pass, passConfirm) => {
  const arrInputs = [user, pass, passConfirm];
  const arrDatas = [findData(user), findData(pass), findData(passConfirm)];
  arrInputs.forEach((input) => {
    arrDatas.forEach((data) => {
      validateInput(input, data);
    });
  });
};

formRegister.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!allValid(formUser, formPass, formPassConfirm)) {
    lengthError(formUser, formPass);
    confirmPassError(formPass, formPassConfirm);
    checkUser(formUser);
    emptyError(formUser, formPass, formPassConfirm);
    return;
  } else {
    validateAll(formUser, formPass, formPassConfirm);
    const objUser = {
      user: formUser.value,
      password: formPass.value,
      comments: [],
    };
    users = [...users, objUser];
    userLocal(users);
    activeUser(objUser);
    formRegister.reset();
    setTimeout(() => (window.location = "/pages/main-page.html"));
  }
});
