function sumOffNumbers(n) {
  let sum = 0;
  for (let i = 0; i <= 7; i++) {
    sum = sum + i;
    console.log(i, sum);
  }
  return sum;
}
const result = sumOffNumbers(10);
console.log(result);
