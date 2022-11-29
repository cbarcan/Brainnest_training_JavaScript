// find the diagonal of a square where the length of each side is 9
let diagonal = side => side * Math.sqrt(2);
let squareSide = 9;
console.log(`The diagonal of a square with the side ${squareSide}: ${diagonal(squareSide)}`);

// find the area of a triangle where lengths of the three of its sides are 5, 6 and 7
let triangleArea = (side1, side2, side3) => {
  let semiPerimeter = (side1 + side2 +side3)/2;
  return Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3))
}
let triangleSide1 = 5;
let triangleSide2 = 6;
let triangleSide3 = 7;
console.log(`The area of a triangle with sides ${triangleSide1}, ${triangleSide2} and ${triangleSide3}: ${triangleArea(triangleSide1, triangleSide2, triangleSide3)}`);

// find the circumference and surface area of a circle whose radius is 4
let circumference = radius => 2 * Math.PI * radius;
let circleArea = radius => Math.PI * radius**2;
let circleRadius = 4;
console.log(`The circumference of a circle with radius ${circleRadius}: ${circumference(circleRadius)}`);
console.log(`The surface area of a circle with radius ${circleRadius}: ${circleArea(circleRadius)}`);