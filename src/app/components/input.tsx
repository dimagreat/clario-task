import { twMerge } from 'tailwind-merge';

export type IStatus = 'default' | 'success' | 'error';

export interface IInputProps {
  placeholder?: string;
  value: string;
  onChange(value: string): void;
  status: IStatus;
  children?: React.ReactNode;
  type?: 'text' | 'email' | 'password';
}

export function Input({
  placeholder,
  value,
  onChange,
  status,
  type = 'text',
  children,
}: IInputProps) {
  const statusMap = {
    default: '',
    success:
      'border-green/50 text-green hover:border-green focus:border-green placeholder:text-green/70',
    error:
      'border-red-500/50 text-red-500 hover:border-red-500 focus:border-red-500 placeholder:text-red-500/70',
  };

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    return onChange(event.target.value);
  }

  return (
    <div className="relative">
      <input
        autoComplete="new-password"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleInputChange}
        className={twMerge(
          'h-14 w-80 rounded-lg border border-dark-500/20 bg-white px-4 py-2 text-dark-500 outline-none transition-colors duration-100 placeholder:text-dark-500/70 hover:border hover:border-dark-500 focus:border focus:border-dark-500',
          statusMap[status],
        )}
      />
      {children}
    </div>
  );
}
