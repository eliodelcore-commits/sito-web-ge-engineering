import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Inside the editor preview (iframe) Google Maps/mailto are blocked in-frame, so open a new window there.
export const outboundTarget: string | undefined =
  typeof window !== "undefined" && window.self !== window.top ? "_blank" : undefined;
