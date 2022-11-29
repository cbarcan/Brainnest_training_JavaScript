//Write a JavaScript program that accepts two integers and displays the larger of the two.
console.log("Larger number");
let largerNumber = (a, b) =>
  a === b
  ?
  console.log(`The number ${a} is equal to the number ${b}`)
  :
  a > b
  ?
  console.log(`The number ${a} is larger than the number ${b}`)
  :
  console.log(`The number ${b} is larger than the number ${a}`);

largerNumber(5, 6);
largerNumber(10, 10);
largerNumber(7.22, 7.21);

//Write a JavaScript program that checks whether an integer is an even or an odd number.
console.log("\nEver or odd");
let evenOrOdd = i =>
  Number.isInteger(i)
  ?
  i % 2 === 0
  ?
  console.log(`The number ${i} is even.`)
  :
  console.log(`The number ${i} is odd.`)
  :
  console.log(`The number ${i} is not an integer.`);

evenOrOdd(2.33);
evenOrOdd(2);
evenOrOdd(43);
evenOrOdd(10);