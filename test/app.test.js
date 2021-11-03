import { add } from '../src/crud';

describe('Tests for todo list app', () => {
  test('should add item to the list', () => {
    expect(add("Some text")).toBe(1)
  })
})
