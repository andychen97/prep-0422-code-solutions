function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  return `Hello ${name}!`;
}

var greet = getGreeting('World');
console.log(greet);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var times = addAndMultiplyBy5(10, 5);
console.log(times);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var divide = multiplyAndDivideBy5(35, 10);
console.log(divide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtract = subtractTwoNumbers(22, 7);
console.log(subtract);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var pi = getCircleCircumference(5);
console.log(pi);

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

var name = getFullName('Andy', 'Chen');
console.log(name);

function cube(number) {
  return number ** 3;
}

var toThePower3 = cube(5);
console.log(toThePower3);
