//  prime number

// let input = 12;

// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// for (let i = 2; i <= input; i++) {
//   if (isPrime(i)) {
//     console.log(`${i} is a prime number`);
//   } else {
//     console.log(`${i} is not a prime number`);
//   }
// }

// ----------------------------------------------------------------
// 2 Write a function to find the largest element in an array.
// let input = [20, 30, 40, 1, 3, 50];

// function maxNumber(num) {
//   largestnumber = num[0];

//   for (let i = 1; i < num.length; i++) {
//     if (num[i] > largestnumber) {
//       largestnumber = num[i];
//     }
//   }
//   return largestnumber;
// }

// console.log(maxNumber(input));

//  ----------------------------------------------------------
// 3 Write a function to find the second largest element in an array.

// let input = [20, 30, 40, 1, 3, 50];

// function secondLargest(arr) {
//   let second = arr.sort((a, b) => b - a);
//   return second[1];
// }
// console.log(secondLargest(input));

// with out methods
// function findSecondLargest(arr) {
//   if (arr.length < 2) {
//     return null;
//   }
//   let largest = arr[0];
//   let secondLargest = null;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== largest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// }

// console.log(findSecondLargest(input));
// -------------------------------------------------------------------------------

// 4 Write a function to find the nth Fibonacci number using iteration.

// let input = 8;

// function Fibonacci(num) {
//   let sum;
//   let num0 = 0;
//   let num1 = 1;

//   for (let i = 0; i <= num; i++) {
//     if (i === 0 || i == 1) {
//       console.log(i);
//     } else {
//       sum = num0 + num1;
//       num0 = num1;
//       num1 = sum;
//       console.log(num1, "num1");
//     }
//   }
// }
// Fibonacci(input);
//  --------------------------------------------------------------------------------
// 5) 5 Write a function to calculate the factorial of a number using iteration.

let input = 5;
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log(fact);
}
factorial(input);
