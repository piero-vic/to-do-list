import { add, remove } from '../src/crud';
import ToDo from '../src/todoList';

describe('Tests for todo list app', () => {
  test('should add item to the list', () => {
    add('some text');
    add('some other text');
    const storage = JSON.parse(localStorage.getItem('todoList'));
    expect(storage).toHaveLength(2);
  });

  test('should remove an item from the list', () => {
    remove(0);
    const storage = JSON.parse(localStorage.getItem('todoList'));
    expect(storage).toHaveLength(1);
  });
});

describe('Updating Items', () => {
  test('Update complete status', () => {
    const newItem = new ToDo('some text');
    expect(newItem.complete).toBeFalsy()
    newItem.update()
    expect(newItem.complete).toBeTruthy()
  })

  test('Edit item', () => {
    
  })
});
