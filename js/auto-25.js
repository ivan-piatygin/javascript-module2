// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

function getCommonElements(array1, array2) {
  // Change code below this line
  //   const newArray = [];
  const newArray = [];

  for (i=0; i<=(array1.lenght + array2.length); i+=1){
    // return array1.includes(array2[i]);
  }

//   for (elt1 of array1) {
//     if (array2.includes(elt1)) {
//         newArray.push(elt1);
//     }
//   }

//   for (elt2 of array2) {
//     if (array1.includes(elt2)) {
//         newArray.push(elt2);
//     }
//   }

//   for (elt2 of array2) {
//     sumArray.push(elt2);
//   }

//   return newArray;

  //   return newArray;
  // Change code above this line
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
