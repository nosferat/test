function permute(string) {
  const array = string.split('')
  const result = []

  function swap(array, a, b) {
    [array[a], array[b]] = [array[b], array[a]]
  }

  function generate(array, key) {
    if (key === 1) {
      result.push(array.slice())
    } else {
      for (let i = 0; i < key; i++) {
        generate(array, key - 1)
        if (key % 2) {
          swap(array, 0, key - 1)
        } else {
          swap(array, i, key - 1)
        }
      }
    }
  }
  generate(array, array.length)

  return result.map(el => el.join(''))
}

export default permute
