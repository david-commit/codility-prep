function pallindrome(string) {
  const word = string;
  const rword = string.split('').reverse().join('');

  if (word === rword) {
    console.log(string + ' is a pallindrome');
  } else {
    console.log(string + ' is not a pallindrome');
  }
}

pallindrome('kayak');
