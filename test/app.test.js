import { add } from '../src/crud';

describe('Tests for todo list app', () => {
  test('should add item to the list', () => {
    add("some text");
    const storage = JSON.parse(localStorage.getItem('todoList'))
    expect(storage).toHaveLength(1);
  })
})
