# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(1)  
Space complexity: O(1)  
Justification: arr.push() has time space complexity of O(1) because it adds one space at the end 
of an array.

[push on MDN][push]


## `arr.pop()`

Time complexity: O(1)  
Space complexity: O(1)  
Justification: arr.pop() has time space complexity of O(1) because it removes an element from the 
end of an array.

[pop on MDN][pop]

## `arr.shift()`

Time complexity: O(n)  
Space complexity: O(1)  
Justification: arr.shift() has time complexity of O(n) because it removes the element at 
the zeroth index and shifts the values of the consecutive index down -1.

[shift on MDN][shift]

## `arr.unshift()`

Time complexity: O(n)  
Space complexity: O(n)  
Justification: arr.unshift() has time space complexity of O(n) because it adds an element(s) to 
the beginning of an array and moves the consecutive indexes up by however many elements are passed in.

[unshift on MDN][unshift]

## `arr.splice()`

Time complexity: O(n)  
Space complexity: O(n)  
Justification: arr.splice() has time space complexity of O(n) because it removes a specified 
number of elements and can insert a number of elements on an array.

[splice on MDN][splice]

## `arr.slice()`

Time complexity: O(n)  
Space complexity: O(n)  
Justification: arr.slice() has time space complexity of O(n) because it returns a shallow copy of 
some of the same elements from an array, starting from and ending at the passed-in indexes.

[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(n)  
Space complexity: O(1)  
Justification: arr.indexOf() has time complexity of O(n) because the element can be anywhere or 
no where in the array, and it returns the index of an element.

[indexOf on MDN][indexOf]

## `arr.map()`

Time complexity: O(n)  
Space complexity: O(n)  
Justification: arr.map() has time space complexity of O(n) because it iterates over every element 
in an array and returns a new array.

[map on MDN][map]

## `arr.filter()`

Time complexity: O(n)  
Space complexity: O(n)  
Justification: arr.filter() has time space complexity of O(n) because it iterates over every element 
of an array and returns a new array.

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(n)  
Space complexity: O(1)  
Justification: arr.reduce() has a time complexity of O(n) because it iterates over every element in 
an array and returns a value.

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(n)  
Space complexity: O(1)  
Justification: arr.reverse() has a time complexity of O(n) and space complexity of O(1) because it 
reverses the original array and returns that array.

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(n)  
Space complexity: O(n)  
Justification: Spreading has time space complexity of O(n) because it's "...arr" is an iterable 
array and "[...arr]" is creating a new array with spreading.

[spread on MDN][spread]

[push]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[pop]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[shift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[unshift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[splice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
[slice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[indexOf]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
[map]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[filter]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[reverse]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[spread]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax