import ToDo from './todoList';
import { populateList } from './index.js';

// Add
export function add(e) {
  if (e.code === 'Enter'){
    // Create new item
    new ToDo(this.value, false)

    // Update local storage
    localStorage.setItem('todoList', JSON.stringify(ToDo.list));

    // Update UI
    this.value = ''
    populateList()
  }
}

// Edit
export function edit(e) {
  // Follow value
  this.previousElementSibling.innerHTML = this.value

  // Update list
  const index = parseInt(this.parentNode.id, 10)
  ToDo.list[index].description = this.previousElementSibling.innerHTML

  // Update local storage
  localStorage.setItem('todoList', JSON.stringify(ToDo.list));

  if (e.code === 'Enter'){

    // Update UI
    this.previousElementSibling.style.display = 'block'
    this.classList.toggle('edit-item');
  }
}

// Delete
export function deleteItem() {
  // Update list
  const index = parseInt(this.parentNode.id, 10)
  ToDo.list = ToDo.list.filter(item => item !== ToDo.list[index])
  // Update indexes
  ToDo.list.forEach((item, i) => item.index = i);
  // Update local storage
  localStorage.setItem('todoList', JSON.stringify(ToDo.list));
  // Update UI
  populateList()
}
