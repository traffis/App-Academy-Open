// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

try {
  let res = sum(null);
  console.log(res);
} catch (error) {
  if (error instanceof TypeError) {
    console.log(error.message);
  }
}


// 2.
// tests
function sayName(name) {
  if (typeof name !== 'string') {
    throw new Error('Invalid name! Must be a string!');
  } else {
    console.log(name);
  }
}

try {
  sayName("Alex");
  sayName(1);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}


// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("Hello World!");
  }

  console.log(greeting);
}

try {
  greet(null);
} catch (error) {
  console.log(error.message);
}