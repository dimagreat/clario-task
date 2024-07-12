'use client';
import { useState, SVGProps } from 'react';
import { Input, IInputProps } from './input';

interface IPasswordProps extends IInputProps {}

export function PasswordInput({ status, ...props }: IPasswordProps) {
  const [isShowPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!isShowPassword);

  const iconStatusMap = {
    default: 'fill-grey',
    success: 'fill-green',
    error: 'fill-red-500',
  };

  return (
    <Input {...props} type={isShowPassword ? 'text' : 'password'} status={status}>
      <button className="absolute right-4 top-4" onClick={togglePassword}>
        {isShowPassword ? (
          <ShowPassword className={iconStatusMap[status]} />
        ) : (
          <HidePassword className={iconStatusMap[status]} />
        )}
      </button>
    </Input>
  );
}

const ShowPassword = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      fill="inherit"
      fillRule="evenodd"
      d="M5.265 9.6C6.845 7.405 9.275 6 12 6c3.166 0 5.934 1.898 7.434 4.727.423.797.433 1.752.004 2.546C18.32 15.34 15.914 18 12 18c-3.146 0-5.899-1.874-7.406-4.673a2.801 2.801 0 0 1 0-2.654c.202-.375.426-.733.67-1.073Zm6.734 6.4a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      clipRule="evenodd"
    />
    <circle cx={12} cy={12} r={2} fill="inherit" />
  </svg>
);

const HidePassword = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      fill="inherit"
      fillRule="evenodd"
      d="M14.567 6.432A7.823 7.823 0 0 0 12 6C9.275 6 6.846 7.405 5.265 9.6c-.245.34-.47.698-.671 1.073a2.801 2.801 0 0 0 0 2.654c.356.66.78 1.27 1.264 1.815L8.1 12.899a4 4 0 0 1 4.797-4.797l1.67-1.67Zm-.283 2.284 1.657-1.658c1.453.832 2.666 2.109 3.493 3.669.423.797.433 1.752.004 2.546C18.32 15.34 15.914 18 12 18c-1.92 0-3.692-.697-5.124-1.876l1.84-1.84a4 4 0 1 0 5.568-5.568Z"
      clipRule="evenodd"
    />
    <path fill="inherit" d="m17.5 5.5-12 12a.707.707 0 0 0 1 1l12-12a.707.707 0 0 0-1-1Z" />
    <path
      fill="inherit"
      fillRule="evenodd"
      d="m10.177 12.822 2.646-2.646a2 2 0 1 1-2.646 2.646Z"
      clipRule="evenodd"
    />
  </svg>
);
