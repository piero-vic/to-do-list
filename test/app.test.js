import { add, remove, edit, deleteAllCompleted } from '../src/crud';
import ToDo from '../src/todoList';

describe('Tests for todo list app', () => {
  test('should add item to the list', () => {
    add('some text');
    add('some other text');
    const storage = JSON.parse(localStorage.getItem('todoList'));
    expect(storage).toHaveLength(2);
  });

  test('Should remove an item from the list', () => {
    remove(0);
    const storage = JSON.parse(localStorage.getItem('todoList'));
    expect(storage).toHaveLength(1);
  });

  test('Update complete status', () => {
    const newItem = new ToDo('some text');
    expect(newItem.complete).toBeFalsy();
    newItem.update();
    expect(newItem.complete).toBeTruthy();
  });

  test('Edit item', () => {
    edit(0, 'edited text');
    const storage = JSON.parse(localStorage.getItem('todoList'));
    expect(storage[0].description).toBe('edited text');
  });

  test('Delete all completed', () => {
    const newItem = new ToDo('completed item', true);
    deleteAllCompleted(ToDo);
    ToDo.list.forEach(item => {
      expect(item.complete).toBeFalsy();
    });
  });
});
