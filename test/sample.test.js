import { add } from '../src/crud';

describe('Tests for todo list app', () => {
  test('should add item to the list', () => {
    const e = {
      code: 'Enter'
    }

    expect(add(e)).toBe(1)

  })
})
