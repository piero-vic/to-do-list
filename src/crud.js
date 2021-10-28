import ToDo from './todoList';
import DeleteButton from './delete-btn.png';

// Add items to UI
export function populateList() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  ToDo.list.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('id', item.index);
    listItem.classList = 'item-container';

    listItem.innerHTML = `
    <input class="checkbox" type="checkbox">
    <span>${item.description}</span>
    <textarea class="text-area" maxlength="30">${item.description}</textarea>
    <img class="cancel-btn" src="${DeleteButton}">
    `;

    todoList.appendChild(listItem);

    const checkbox = listItem.querySelector('input');
    const text = listItem.querySelector('span');
    const textInput = listItem.querySelector('textarea');
    const deleteButton = listItem.querySelector('img');

    // Update
    checkbox.addEventListener('change', () => {
      const index = parseInt(listItem.id, 10);
      ToDo.list[index].update();
      text.classList.toggle('complete');
      textInput.classList.toggle('complete');
      localStorage.setItem('todoList', JSON.stringify(ToDo.list));
    });

    // Edit functionality
    text.addEventListener('click', () => {
      text.style.display = 'none';
      textInput.classList.toggle('edit-item');
    });

    textInput.addEventListener('keydown', (e) => {
      // Follow value
      text.innerHTML = textInput.value;

      // Update list
      const index = parseInt(listItem.id, 10);
      ToDo.list[index].description = text.innerHTML;

      // Update local storage
      localStorage.setItem('todoList', JSON.stringify(ToDo.list));

      if (e.code === 'Enter') {
        // Update UI
        text.style.display = 'block';
        textInput.classList.toggle('edit-item');
      }
    });

    // Delete functionality
    deleteButton.addEventListener('click', () => {
      // Update list
      const index = parseInt(listItem.id, 10);
      ToDo.list = ToDo.list.filter((item) => item !== ToDo.list[index]);
      // Update indexes
      ToDo.list.forEach((item, i) => { item.index = i; });
      // Update local storage
      localStorage.setItem('todoList', JSON.stringify(ToDo.list));
      // Update UI
      populateList();
    });

    if (item.complete) {
      checkbox.checked = true;
      text.classList = 'complete';
    }
  });
}

// Add functionality
export function add(e) {
  if (e.code === 'Enter') {
    // Create new item
    const newItem = new ToDo(this.value, false);

    // Update local storage
    localStorage.setItem('todoList', JSON.stringify(newItem.getList()));

    // Update UI
    this.value = '';
    populateList();
  }
}

// Clear completed functionality
export function deleteAllCompleted() {
  // Update list
  ToDo.list = ToDo.list.filter((item) => item.complete === false);
  // Update indexes
  ToDo.list.forEach((item, i) => { item.index = i; });
  // Update local storage
  localStorage.setItem('todoList', JSON.stringify(ToDo.list));
  // Update UI
  populateList();
}
