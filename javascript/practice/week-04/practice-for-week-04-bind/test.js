const Employee = require('./employee');

// Create new employee and call sayName method after 2 seconds
let johnwick = new Employee('John Wick', 'Dog Lover');
let sayNameFunc = johnwick.sayName;
let sayName = sayNameFunc.bind(johnwick);
setTimeout(sayName, 2000);

// Call sayOccupation method after 3 seconds
let sayOccupationFunc = johnwick.sayOccupation;
let sayOccupation = sayOccupationFunc.bind(johnwick);
setTimeout(sayOccupation, 3000);
