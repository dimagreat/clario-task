import { useState } from 'react';

import { validateEmail, validatePasswordStrength, validatePassword } from './form.utils';

import { IFormState, IPasswordStrength } from './form.typings';

export function useAuthFormState() {
  const [formState, setFormState] = useState<IFormState>({
    email: {
      value: '',
      error: '',
      isSubmitted: false,
      status: 'default',
    },
    password: {
      value: '',
      error: '',
      isSubmitted: false,
      status: 'default',
    },
  });

  const [passwordStrength, setPasswordStrength] = useState<IPasswordStrength>({
    characters: 'default',
    allCases: 'default',
    digit: 'default',
  });

  function onEmailChange(value: string) {
    setFormState((form) => ({
      ...form,
      email: {
        ...form.email,
        isSubmitted: false,
        value,
        error: '',
      },
    }));
  }

  function onPasswordChange(value: string) {
    setFormState((form) => ({
      ...form,
      password: {
        ...form.password,
        isSubmitted: false,
        value,
        error: '',
      },
    }));
    setPasswordStrength(validatePasswordStrength(value));
  }

  const handleSubmit = () => {

    setPasswordStrength(validatePasswordStrength(formState.password.value));

    setFormState((state) => ({
      email: {
        ...validateEmail(state.email.value),
        value: state.email.value,
        isSubmitted: true,
      },
      password: {
        ...validatePassword(state.password.value),
        value: state.password.value,
        isSubmitted: true,
      },
    }));
  };

  return {
    formState,
    passwordStrength,
    handleSubmit,
    onEmailChange,
    onPasswordChange,
  };
}
