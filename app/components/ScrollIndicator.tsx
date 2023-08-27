import { useEffect, useState } from "react";

/**
 * Scroll Indicator Component
 * @returns JSX.Element
 */
export default function ScrollIndicator(): JSX.Element {
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  // Set the window listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const winScroll: number =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height: number =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollPercent((winScroll / height) * 100);
    });
  }, []);

  // Return the component jsx
  return (
    <div className="fixed bottom-0 z-50 h-4 w-screen bg-slate-900">
      <div
        className="fixed top-0 h-4 border-r-4 bg-gradient-to-r from-blue-600 to-violet-700 ease-in-out"
        style={{ width: `${scrollPercent}%` }}
      ></div>
    </div>
  );
}
