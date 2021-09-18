const covertFromCamelToProperCase = (value) => {
  return String(value).replace(/[A-Z]+/g, s => ' ' + s).toLowerCase().replace(/\b(\w)/g, s => String(s).toUpperCase())
}

console.log(covertFromCamelToProperCase('firstName'))