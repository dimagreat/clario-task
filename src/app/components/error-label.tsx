import { twMerge } from 'tailwind-merge';
import { IStatus } from './input';

export function ErrorLabel({
  status,
  className,
  children,
}: React.PropsWithChildren<{ status: IStatus; className?: string }>) {
  const statusMap = {
    default: 'text-dark-200',
    success: 'text-green/70',
    error: 'text-red-500/70',
  };
  return <span className={twMerge('text-sm', statusMap[status], className)}>{children}</span>;
}
