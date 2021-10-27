import './style.css';

function populateList() {
  const todoList = document.getElementById('todo-list');

  toDoListItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <input class="checkbox" type="checkbox" name="" value="">
    <span>${item.description}</span>
    `;
    todoList.appendChild(listItem);
  });
}

populateList();

const listCheckboxes = [...document.getElementsByClassName('checkbox')]
listCheckboxes.forEach((element) => {
  element.addEventListener('change', () => {
    element.nextElementSibling.classList.toggle('complete')
  })
})
