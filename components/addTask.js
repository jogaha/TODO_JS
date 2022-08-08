import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (e) => {
  const list = document.querySelector("[data-list]");
  const task = createTask(e);
  list.appendChild(task);
};

//Arrow function
const createTask = (e) => {
  e.preventDefault();
  const taskList = JSON.parse(localStorage.getItem("task")) || [];
  console.log(taskList);

  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");
  const value = input.value;
  const date = calendar.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");
  const task = document.createElement("li");
  task.classList.add("card");
  input.value = "";

  const taskContent = document.createElement("div");

  const taskObj = {
    value,
    dateFormat,
  };

  taskList.push(taskObj);

  localStorage.setItem("task", JSON.stringify(taskList));

  const titleTask = document.createElement("span");

  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  const dateElement = document.createElement("span");
  dateElement.innerHTML = dateFormat;
  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon());

  return task;
};