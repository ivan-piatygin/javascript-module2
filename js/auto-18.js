function makesArray(number) {
  // Change code below this line

  let total = 0;
  for (i = 0; i <= number; i += 1) {
    // console.log(i);
    total+=i;
  }

  return total;

  // Change code above this line
}

console.log(makesArray(5));
console.log(makesArray());
