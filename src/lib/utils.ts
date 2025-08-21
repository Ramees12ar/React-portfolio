// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function for merging Tailwind classes
 * Example:
 *  cn("px-2 py-1", condition && "bg-blue-500")
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
