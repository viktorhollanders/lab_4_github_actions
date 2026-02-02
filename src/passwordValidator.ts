export function passwordValidator(password: string) {
  if (password.length < 8) {
    return 'Password must be at least 8 characters';
  }

  const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  const hasSpecialCharacter = specialCharacters.some((char) => password.includes(char));
  if (!hasSpecialCharacter) {
    return 'Password must contain a special character !@#$%^&*';
  }

  if (!/[A-Z]/.test(password)) {
    return 'Password must contain an uppercase letter';
  }

  if (!/[a-z]/.test(password)) {
    return 'Password must contain an lowercase letter';
  }

  if (!/[0-9]/.test(password)) {
    return 'Password must contain at least one number';
  }

  return 'VALID';
}
