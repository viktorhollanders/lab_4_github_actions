import { describe, it, expect } from 'vitest';
import { passwordValidator } from '../src/passwordValidator.ts';

describe('validator', () => {
  describe('valid password', () => {
    it('should return return VALID if password meets all requiremnts', () => {
      expect(passwordValidator('Password12#1')).toBe('VALID');
      expect(passwordValidator('$ecurE23')).toBe('VALID'); // exactly 8
      expect(passwordValidator('pASSW@R2')).toBe('VALID');
      expect(passwordValidator('Password1#')).toBe('VALID');
    });
  });
  describe('error validation', () => {
    it('should return an error if the passwprdis less than 8 characters', () => {
      expect(passwordValidator('Pass1!')).toBe('Password must be at least 8 characters');
    });
    it('should return an error if password is missing a capital letter', () => {
      expect(passwordValidator('password!2')).toBe('Password must contain an uppercase letter');
    });
    it('should return an error if passwords is missing a lowercase letter', () => {
      expect(passwordValidator('PASSWORD!2')).toBe('Password must contain an lowercase letter');
    });
    it('should return error if passwords are missing capital letter', () => {
      expect(passwordValidator('pasSw3ord')).toBe(
        'Password must contain a special character !@#$%^&*',
      );
    });
  });
});
