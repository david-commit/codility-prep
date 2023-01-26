function divide(intArray) {
 const array = []
 for (let i = 0; i < intArray.length; i++) {
  if (intArray[i] % 4 == 0) {
   array.push(intArray[i])
  }
 }
 console.log(array)
 const max = Math.max(...array)
 return max
}

console.log(divide([81, 82, 83, 84, 85, 86, 4, 40]))