import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export default function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
