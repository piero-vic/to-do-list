import { deleteAllCompleted } from '../src/crud';

describe('Tests for todo list app', () => {
  // test('should add item to the list', () => {
    
  // })
  
  // test('should remove item from the list', () => {
    
  // })
  
  test('should delete all items completed', () => {
    // const deleteAllCompleted = jest.fn();
    expect(deleteAllCompleted()).toBeDefined();
  })
  
})
