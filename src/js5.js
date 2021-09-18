const getFibonacciNumber = (number) => {
  const position = []
  let n1 = 0,
    n2 = 1,
    nextTerm;
  nextTerm = n1 + n2;
  // Max Fibonacci is 20 range
  while (nextTerm <= 20) {
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
    position.push(nextTerm)
  }
  // Get position
  let getPosition = position.findIndex(v => v === number)
  if (getPosition < 0) return null
  return getPosition
}

console.log(`Position of this number is : ${getFibonacciNumber(13)}`)