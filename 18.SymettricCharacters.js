function solution(s) {
  let n = s.length;
  // Initialize variables to store the number of '<', '>' and '?'
  let leftCount = 0,
    rightCount = 0,
    questionCount = 0;
  // Iterate through the first half of the string
  for (let i = 0; i < n / 2; i++) {
    if (s[i] === '<') {
      leftCount++;
    } else if (s[i] === '>') {
      rightCount++;
    } else {
      questionCount++;
    }
  }

  // Initialize a variable to store the length of the longest symmetric substring
  let maxLength = 0;

  // Iterate through the second half of the string
  for (let i = n / 2; i < n; i++) {
    if (s[i] === '>') {
      rightCount--;
    } else if (s[i] === '<') {
      leftCount--;
    } else {
      questionCount--;
    }
    // If the number of '<' in the first half is greater than or equal to the number of '>' in the second half
    if (leftCount >= 0) {
      maxLength = i + 1; // Add 1 to the current index to include the current character
      leftCount -= questionCount; // Subtract the number of question marks from the number of '<'
    } else {
      break;
    }
  }

  return maxLength;
}

console.log(solution('<><??>>'))