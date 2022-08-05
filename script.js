import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

const addTask = (e) => {
  const list = document.querySelector("[data-list]");
  const task = createTask(e);
  list.appendChild(task);
};
//Arrow function
const createTask = (e) => {
  e.preventDefault();

  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  if (value != "") {
    const calendar = document.querySelector("[data-form-date]");
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");
    const task = document.createElement("li");
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");

    task.classList.add("card");
    input.value = "";

    taskContent.appendChild(checkComplete());
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());

    return task;
  }
};

//listener
btn.addEventListener("click", addTask);
