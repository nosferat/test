function debounce(fn, delay = 0) {
  let isIgnore = false

  return function() {
    if(isIgnore) {
      return
    }

    fn.apply(this, arguments)
    isIgnore = true

    setTimeout(() => isIgnore = false, delay)
  }
}

export default debounce
