// import { throttle } from "lodash";

const formEl = document.querySelector(".feedback-form");
const emailEl = document.querySelector(".feedback-form input");
const messageEl = document.querySelector(".feedback-form textarea");

let userData = {
  email: "",
  message: "",
};

const savedUserData = JSON.parse(localStorage.getItem("feedback-form-state"));
console.log(savedUserData);

// if (savedUserData.email || savedUserData.message !== "") {
//   emailEl.value = savedUserData.email;
//   messageEl.value = savedUserData.message;
// };

if (savedUserData.email !== "") {
  emailEl.value = savedUserData.email;
};

if (savedUserData.message !== "") {
  messageEl.value = savedUserData.message;
};

const captureUserData = event => {
  userData[event.target.name] = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(userData));
  console.log(userData);
};

emailEl.addEventListener("input", captureUserData);
messageEl.addEventListener("input", captureUserData);
