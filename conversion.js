// const myInch = 12;
// const myFeet = myInch / 12;
// console.log(myFeet);

// const dadaInch = 144;
// const dataFeet = dadaInch / 12;
// console.log('Dada Feet', dataFeet);

function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

