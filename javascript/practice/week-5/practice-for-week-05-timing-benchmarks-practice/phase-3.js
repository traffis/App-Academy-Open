const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  const start = Date.now();
  let nums = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    let startTime = Date.now();
    nums.push(addNums(i));
    const endTime = Date.now();
    console.log(`${endTime - startTime}ms`);
  }
  console.log(`Total: ${Date.now() - start}ms`);
  return nums;
}


function addManyNums10Timing(increment) {
  const start = Date.now();
  let nums = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    const startTime = Date.now();
    nums.push(addManyNums(i));
    const endTime = Date.now();
    console.log(`${endTime - startTime}ms`);
  }
  console.log(`Total: ${Date.now() - start}ms`);
  return nums;
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 5000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
