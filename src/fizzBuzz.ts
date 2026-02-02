export function fizzBuzz(num: number) {
  if (num < 0) {
    throw new Error(`Negative numbers not allowed: ${num}`);
  }

  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }

  if (num % 3 === 0) {
    return 'Fizz';
  }

  if (num % 5 === 0) {
    return 'Buzz';
  }

  return num.toString();
}
