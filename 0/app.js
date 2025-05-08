// Lesson
function area(r) {
  const a = Math.PI * (r * r);

  return a;
}

console.log("Area Calc:");
console.log(area(10));
console.log(area(20));
console.log("-------------");

// Assignment
function parallelogramArea(b, h) {
  const a = b * h;

  return a;
}

console.log("Parallelogram Calc:");
console.log(parallelogramArea(10, 20));
console.log("-------------");

// -------------------------

function trapezoidArea(a, b, h) {
  const A = ((a + b) / 2) * h;

  return A;
}

console.log("Trapezoid Calc:");
console.log(trapezoidArea(4, 2, 6));
console.log(trapezoidArea(6, 3, 9));
console.log("-------------");
