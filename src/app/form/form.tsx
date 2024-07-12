'use client';

import Image from 'next/image';

import { Button } from '../components/button';
import { Input } from '../components/input';
import { PasswordInput } from '../components/password-input';
import { ErrorLabel } from '../components/error-label';
import { useAuthFormState } from './form.state';
import FormStars from '../../assets/form-stars.svg';

export function Form() {
  const { formState, passwordStrength, handleSubmit, onEmailChange, onPasswordChange } =
    useAuthFormState();
  return (
    <div className="relative z-10 flex max-w-xl flex-col items-center gap-8 text-dark-200">
      <div className="pointer-events-none absolute inset-0 -top-44 right-0 z-0">
        <Image src={FormStars} alt="Background" className="w-full object-none" />
      </div>
      <h1 className="text-dark text-3xl font-bold">Sign up</h1>
      <div className="flex flex-col gap-2">
        <Input
          onChange={onEmailChange}
          placeholder="Email"
          value={formState.email.value}
          status={formState.email.isSubmitted ? formState.email.status : 'default'}
        />
        <div className="flex h-5 justify-center px-3">
          {formState.email.error && <ErrorLabel status="error">{formState.email.error}</ErrorLabel>}
        </div>
        <PasswordInput
          onChange={onPasswordChange}
          placeholder="Create your password"
          value={formState.password.value}
          status={formState.password.isSubmitted ? formState.password.status : 'default'}
        />
        <div className={'flex h-20 flex-col gap-1 px-3'}>
          {formState.password.error ? (
            <ErrorLabel status="error" className="text-center">
              {formState.password.error}
            </ErrorLabel>
          ) : (
            <>
              <ErrorLabel status={passwordStrength.characters}>
                8 characters or more (no spaces)
              </ErrorLabel>
              <ErrorLabel status={passwordStrength.allCases}>
                Uppercase and lowercase letters
              </ErrorLabel>
              <ErrorLabel status={passwordStrength.digit}>At least one digit</ErrorLabel>
            </>
          )}
        </div>
      </div>
      <Button onClick={handleSubmit}>Sign up</Button>
    </div>
  );
}
