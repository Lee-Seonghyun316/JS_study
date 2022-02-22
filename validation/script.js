const elId = document.querySelector("#id");
const elIdFailure = document.querySelector(".failure-text");
const elIdSuccess = document.querySelector(".success-text");
elId.onkeyup = () => {
  if (checkIdLength(elId.value)) {
    elIdSuccess.classList.remove("hide");
    elIdFailure.classList.add("hide");
  } else {
    elIdFailure.classList.remove("hide");
    elIdSuccess.classList.add("hide");
  }
};
const checkIdLength = (value) => {
  return value.length >= 4;
};
