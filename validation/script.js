const elId = document.querySelector("#id");
const elPassword = document.querySelector("#password");
const elConfirmPassword = document.querySelector("#confirmPassword");
const elSignup = document.querySelector(`#signup`);
elId.onkeyup = () => {
  handleKeyUp(elId, checkIdLength);
};
elPassword.onkeyup = () => {
  handleKeyUp(elPassword, checkPasswordLength);
};
elConfirmPassword.onkeyup = () => {
  handleKeyUp(elConfirmPassword, checkPasswordSame);
  makeAbleSignup();
};

const handleKeyUp = (elem, onCheck) => {
  const fieldName = `${elem.id}-field`;
  const elFailure = document.querySelector(`.${fieldName} .failure-text`);
  const elSuccess = document.querySelector(`.${fieldName} .success-text`);

  if (onCheck(elem.value)) {
    elSuccess.classList.remove("hide");
    elFailure.classList.add("hide");
  } else {
    elFailure.classList.remove("hide");
    elSuccess.classList.add("hide");
  }
};

const makeAbleSignup = () => {
  if (checkPasswordSame(elConfirmPassword.value) && checkIdLength(elId.value)) {
    elSignup.disabled = false;
  } else {
    elSignup.disabled = true;
  }
};

const checkIdLength = (value) => {
  return value.length >= 4;
};

const checkPasswordLength = (value) => {
  return value.length >= 8;
};

const checkPasswordSame = (value) => {
  return elPassword.value === value;
};
