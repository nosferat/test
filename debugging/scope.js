function scope() {
  for(let i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 0)
  }
}

export default scope
