const checkComplete = (id) => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", (e) => completeTask(e, id));
  return i;
};

//Immediately invoked function expression IIFE
const completeTask = (e, id) => {
  const element = e.target;
  //toggle sirve para agregar o quitar una clase si esta existe o no
  element.classList.toggle("fas");
  element.classList.toggle("far");
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex((item) => item.id == id);

  tasks[index]["complete"] = !tasks[index]["complete"];
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export default checkComplete;
