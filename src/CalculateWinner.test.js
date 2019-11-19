import { calculateWinner } from './CalculateWinner'

describe('calculateWinner', () => {
  test('No winner', () => {
    const squares = {
      0: null,
      1: 'A',
      2: null,
      3: 'B',
      4: 'A',
      5: 'B',
      6: null,
      7: null,
      8: null
    }
    const newState = calculateWinner(squares)
    expect(newState).toBe('B')
  })

  test('Winner is O', () => {
    const squares = {
      0: 'A',
      1: 'B',
      2: 'A',
      3: 'A',
      4: 'B',
      5: null,
      6: null,
      7: 'B',
      8: null
    }
    const newState = calculateWinner(squares)
    expect(newState).toBe(null)
  })

  test('Winner is X', () => {
    const squares = {
      0: 'A',
      1: 'B',
      2: 'A',
      3: null,
      4: 'A',
      5: 'B',
      6: 'A',
      7: 'B',
      8: null
    }
    const newState = calculateWinner(squares)
    expect(newState).toBe('B')
  })
})
