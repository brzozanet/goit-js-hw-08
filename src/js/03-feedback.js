// import { throttle } from "lodash";

const formEl = document.querySelector(".feedback-form");
const emailEl = document.querySelector(".feedback-form input");
const messageEl = document.querySelector(".feedback-form textarea");

let userData = {
  email: "",
  message: "",
};

if (JSON.parse(localStorage.getItem("feedback-form-state"))) {
  const savedUserData = JSON.parse(localStorage.getItem("feedback-form-state"));
  emailEl.value = savedUserData.email;
  messageEl.value = savedUserData.message;
}

const captureUserData = event => {
  userData[event.target.name] = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(userData));
};

const sendForm = event => {
  if (emailEl.value === "" || messageEl.value === "") {
    alert("Proszę wypełnić wszystkie pola formularza.");
  } else {
    event.preventDefault();
    console.log(userData);
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
  }
};

emailEl.addEventListener("input", captureUserData);
messageEl.addEventListener("input", captureUserData);
formEl.addEventListener("submit", sendForm);
