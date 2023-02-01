// function leapYear(year) {
//   if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log('leapYear(2016):', leapYear(2016));
// console.log('leapYear(2016):', leapYear(2017));

function leapYear(year) {
  if (year % 4 == 0) {
    console.log('Is leapYear');
  } else {
     console.log('Is not a leapYear');
  }
}

leapYear(2016);
leapYear(2017);