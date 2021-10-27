import './style.css';
import {ToDo} from './todoList.js'

const item1 = new ToDo('Finish project')
const item2 = new ToDo('Groceries')
const item3 = new ToDo('Fix laptop')

function populateList() {
  const todoList = document.getElementById('todo-list');

  ToDo.list.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <input id="${item.index}" class="checkbox" type="checkbox" name="" value="">
    <span>${item.description}</span>
    `;
    todoList.appendChild(listItem);
  });
}

populateList();

const listCheckboxes = [...document.getElementsByClassName('checkbox')]
listCheckboxes.forEach((element) => {
  element.addEventListener('change', () => {
    const index = parseInt(element.id)
    ToDo.list[index].update()
    console.log(ToDo.list[index])
    element.nextElementSibling.classList.toggle('complete')
  })
})
