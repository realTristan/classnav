"use client";

import { cn } from "@/app/utils/tailwind";

/**
 * Loading Component
 * @returns JSX.Element
 */
export default function LoadingCenter(): JSX.Element {
  return (
    <section className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
      <LoadingRelative className="h-20 w-20" />
    </section>
  );
}

export function LoadingRelative(props: { className?: string }) {
  return (
    <svg
      className={cn("animate-spin text-white", props.className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="stroke-slate-700 opacity-25"
        cx="12"
        cy="12"
        r="10"
        strokeWidth="4"
      ></circle>
      <path
        className="fill-violet-500 opacity-75"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0
            12h4zm2 5.291A7.962 7.962 0 014 12H0c0
            3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}
