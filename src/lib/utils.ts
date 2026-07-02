import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_URL =
  "https://wa.me/5541988374178?text=Ol%C3%A1%2C%20Maria%20de%20F%C3%A1tima!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20terapia%20TRG.";

export const WHATSAPP_NUMBER = "(41) 98837-4178";
