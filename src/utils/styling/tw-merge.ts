import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function mergeClass(...inputs: any) {
  return twMerge(clsx(inputs));
}
