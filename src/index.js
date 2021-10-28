import './style.css';
import ToDo from './todoList';

const defaultList = ['Finish project', 'Groceries', 'Fix laptop'];

// Add items to UI
function populateList() {
  const todoList = document.getElementById('todo-list');

  ToDo.list.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList = 'item-container';
    listItem.innerHTML = `
    <input id="${item.index}" class="checkbox" type="checkbox">
    <span>${item.description}</span>
    <textarea class="text-area" maxlength="30">${item.description}</textarea>
    `;
    todoList.appendChild(listItem);

    const checkbox = listItem.querySelector('input');
    const text = listItem.querySelector('span');
    const textInput = listItem.querySelector('textarea');

    text.addEventListener('click', () => {
      text.style.display = 'none';
      textInput.classList.toggle('edit-item');
    });

    if (item.complete) {
      checkbox.checked = true;
      text.classList = 'complete';
    }
  });
}

// Window load
const list = JSON.parse(localStorage.getItem('todoList'));
if (list) {
  list.forEach((item) => new ToDo(item.description, item.complete));
} else {
  defaultList.forEach((item) => new ToDo(item, false));
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
