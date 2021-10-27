import './style.css';
import ToDo from './todoList';

// Add items to UI
function populateList() {
  const todoList = document.getElementById('todo-list');

  ToDo.list.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <input id="${item.index}" class="checkbox" type="checkbox">
    <span>${item.description}</span>
    `;
    todoList.appendChild(listItem);
    if (item.complete) {
      listItem.querySelector('input').checked = true;
      listItem.querySelector('span').classList = 'complete';
    }
  });
}

// Window load
const list = JSON.parse(localStorage.getItem('todoList'));
if (list) {
  list.forEach((item) => new ToDo(item.description, item.complete));
} else {
  ToDo('Finish project');
  ToDo('Groceries');
  ToDo('Fix laptop');
}

populateList();

// Add event listener to checkboxes
const listCheckboxes = [...document.getElementsByClassName('checkbox')];
listCheckboxes.forEach((element) => {
  element.addEventListener('change', () => {
    const index = parseInt(element.id, 10);
    ToDo.list[index].update();
    element.nextElementSibling.classList.toggle('complete');
    localStorage.setItem('todoList', JSON.stringify(ToDo.list));
  });
});
