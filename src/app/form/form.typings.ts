import { IStatus } from '../components/input';

type IFormField = {
  value: string;
  error: string;
  isSubmitted: boolean;
  status: IStatus;
};

export interface IFormState {
  email: IFormField;
  password: IFormField;
}

export interface IPasswordStrength {
  characters: IStatus;
  allCases: IStatus;
  digit: IStatus;
}
