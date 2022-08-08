import { addTask } from "./components/addTask.js";
import { displayTask } from "./components/readTask.js";

const btn = document.querySelector("[data-form-btn]");

//listener
btn.addEventListener("click", addTask);
displayTask();
