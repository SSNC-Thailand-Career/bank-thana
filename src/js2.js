const sortAlphabetical = (value) => {
  return value.split('').sort((a, b) => a.localeCompare(b)).join('')
}

console.log(sortAlphabetical('CloudComputing'))