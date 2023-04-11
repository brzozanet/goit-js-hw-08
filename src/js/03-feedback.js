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
  console.log(savedUserData);
}

const captureUserData = event => {
  userData[event.target.name] = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(userData));
};

emailEl.addEventListener("input", captureUserData);
messageEl.addEventListener("input", captureUserData);
