const form = document.querySelector("form");
const input = document.querySelector("input");
const todoList = document.querySelector("#todo-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const todoText = input.value.trim();
  if (todoText) {
    const todoItem = document.createElement("li");
    todoItem.classList.add("container");
    const todoCheckbox = document.createElement("input");
    const todoLabel = document.createElement("label");
    const todoDeleteButton = document.createElement("button");
    todoCheckbox.type = "checkbox";
    todoCheckbox.addEventListener("change", () => {
      todoItem.classList.toggle("completed", todoCheckbox.checked);
    });
    todoLabel.append(todoCheckbox, todoText);

    todoDeleteButton.textContent = "Delete";
    todoDeleteButton.addEventListener("click", () => {
      todoItem.remove();
    });
    todoDeleteButton.classList.add("delete");
    todoItem.append(todoLabel, todoDeleteButton);
    todoList.append(todoItem);
    input.value = "";
  }
});
