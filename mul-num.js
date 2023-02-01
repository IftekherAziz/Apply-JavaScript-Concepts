// 7! = 1 * 2 * 3 * 4 * 5 * 6 * 7

function factorial(n) {
  let multi = 1;
  for (let i = 1; i <= n; i++) {
    multi = multi * i;
  }
  return multi;
}

const result = factorial(7);
console.log(result);