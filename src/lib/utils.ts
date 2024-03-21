import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class values into a single string, using the `clsx` and `twMerge` functions.
 *
 * @param {ClassValue[]} inputs - An array of class values to be combined.
 * @return {string} - The combined class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
