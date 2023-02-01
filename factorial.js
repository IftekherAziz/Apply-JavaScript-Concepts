// 7! = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9

// Find factorial in reverse way

function factorial(n) {
  let multi = 1;
  for (let i = n; i >= 1; i--) {
    multi = multi * i;
    console.log(i);
  }
  return multi;
}

const result = factorial(9);
console.log('Factorial of 9 is: ', result);


