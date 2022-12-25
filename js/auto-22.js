function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
for (i=0; i<(max - min + 1); i+=1) {
  numbers[i]=min + i ;
  numbers.push(numbers[i]);
  numbers.length = max - min +1;
}
  // Change code above this line
  return numbers;
}

  console.log(createArrayOfNumbers(1, 3));
  console.log(createArrayOfNumbers(14, 17));
  console.log(createArrayOfNumbers(29, 34));