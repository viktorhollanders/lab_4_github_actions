import { describe, it, expect } from 'vitest';
import { fizzBuzz } from '../src/fizzBuzz';

describe('fizzBuzz', () => {
  describe('base functionallity', () => {
    it('should return the number as string for non-multiples', () => {
      expect(fizzBuzz(1)).toBe('1');
      expect(fizzBuzz(2)).toBe('2');
    });

    // Add more tests...

    it('should return fizz when number is divisible by 3', () => {
      expect(fizzBuzz(3)).toBe('Fizz');
      expect(fizzBuzz(6)).toBe('Fizz');
      expect(fizzBuzz(9)).toBe('Fizz');
      expect(fizzBuzz(12)).toBe('Fizz');
    });

    it('should return Buzz when number is divisible by 5', () => {
      expect(fizzBuzz(5)).toBe('Buzz');
      expect(fizzBuzz(10)).toBe('Buzz');
      expect(fizzBuzz(20)).toBe('Buzz');
    });

    it('should return FizzBuzz when number is divisible by 3 and 5', () => {
      expect(fizzBuzz(15)).toBe('FizzBuzz');
      expect(fizzBuzz(30)).toBe('FizzBuzz');
    });
  });

  describe('error handling', () => {
    // Errors
    it('should retrun an error if the number is negative', () => {
      expect(() => fizzBuzz(-1)).toThrow('Negative numbers not allowed: -1');
    });
  });
});
