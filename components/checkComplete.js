const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", completeTask);
  return i;
};

//Immediately invoked function expression IIFE
const completeTask = (e) => {
  element = e.target;
  //toggle sirve para agregar o quitar una clase si esta existe o no
  element.classList.toggle("fas");
  element.classList.toggle("far");
};

export default checkComplete;
