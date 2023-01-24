function binaryGap(number) {
 const binaryArr = number.toString(2).split('')
 console.log(binaryArr)
 
 const zeroArr = []
 console.log(zeroArr);
 for (let i in binaryArr) {
  
  if (i == 0) {
   zeroArr.push(i)
   console.log("I: " + i)
  } 
  
 }
 console.log(zeroArr.length)
}

binaryGap(256)