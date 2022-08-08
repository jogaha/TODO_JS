import { addTask } from "./components/addTask.js";

const btn = document.querySelector("[data-form-btn]");

//listener
btn.addEventListener("click", addTask);
