// Verify a prime number?
function primeNumber(num) {
  let divisor = 2;

  while (num > divisor) {
    if (num % divisor === 0) return false;

    divisor += 1;
  }
  return true;
}
primeNumber(3);

// Prime Factors - How could you find all prime factors of a number?
function primeFactors(num) {
  const factors = [];
  let divisor = 2;
  let b = num;

  while (b > 2) {
    if (b % divisor === 0) {
      factors.push(divisor);
      b /= divisor;
    } else {
      divisor += 1;
    }
  }
  return factors;
}
primeFactors(69);

// How do get nth Fibonacci number
// loop
function fibLoop(num) {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= num; i += 1) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}
fibLoop(12);

// recursion
function fibrecursion(num) {
  return num < 2 ? num : fibrecursion(num - 1) + fibrecursion(num - 2);
}
fibrecursion(12);

// Greatest Common Divisor
function grDivisor(a, b) {
  let minDivisor = 2;
  let maxDivisor = 1;

  if (a < 2 || b < 2) return 1;

  while (a >= minDivisor && b >= minDivisor) {
    if (a % minDivisor === 0 && b % minDivisor === 0) {
      maxDivisor = minDivisor;
    }
    minDivisor += 1;
  }

  return maxDivisor;
}
grDivisor(60);

// How would you remove duplicate members from an array?
function removeDuplicate(arr) {
  const newObj = {};
  const newArr = [];
  let elm;

  for (let i = 0; i < arr.length; i += 1) {
    elm = arr[i];
    if (!newObj[elm]) {
      newArr.push(elm);
      newObj[elm] = true;
    }
  }
  return newArr;
}
removeDuplicate([2, 4, 5, 7, 8, 99, 9, 9, 9, 99]);

// string reverse
function stringRev(str) {
  let revStr = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    revStr += str[i];
  }
  return revStr;
}
stringRev('11 22 33 44 55');

// or
function stringRev1(str) {
  if (!str || str.length < 2) return str;

  return str
    .split('')
    .reverse()
    .join('');
}
stringRev1('11 22 33 44 55');
