
import { rotateArray } from '../../src/lib/array'

describe('Array Module', () => {

  const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  test('RotateArray Right', () => {
    expect(rotateArray(array)).toStrictEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ])
  })

  test('RotateArray Left', () => {
    expect(rotateArray(array, true)).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])
  })
})
