import { IStatus } from '../components/input';
import { IPasswordStrength } from './form.typings';

interface IValidateResponse {
  error: string;
  status: IStatus;
}

export function validateEmail(email: string): IValidateResponse {
  const isEmailEmpty = !email.length;
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  return {
    status: !isEmailEmpty && isEmailValid ? 'success' : 'error',
    error: isEmailEmpty ? 'Email is required' : !isEmailValid ? 'Email is incorrect' : '',
  };
}

export function validatePassword(password: string): IValidateResponse {
  const isPasswordEmpty = !password.length;
  const isPasswordLong = password.length > 64;
  const passwordStrength = validatePasswordStrength(password);
  const isPasswordStrength = !Object.values(passwordStrength).includes('error');
  return {
    status: !isPasswordEmpty && isPasswordStrength ? 'success' : 'error',
    error: isPasswordEmpty
      ? 'Password is required'
      : isPasswordLong
        ? 'Password should less than 64 characters'
        : '',
  };
}

export function validatePasswordStrength(password: string): IPasswordStrength {
  return {
    characters: !/\s/.test(password) && password.length >= 8 ? 'success' : 'error',
    allCases: /[A-Z]/.test(password) && /[a-z]/.test(password) ? 'success' : 'error',
    digit: /\d/.test(password) ? 'success' : 'error',
  };
}
