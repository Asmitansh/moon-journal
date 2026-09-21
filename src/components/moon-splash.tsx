import { useEffect, useState } from "react";

type MoonSplashProps = {
  onComplete: () => void;
};

export function MoonSplash({ onComplete }: MoonSplashProps) {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const closeTimer = window.setTimeout(() => {
      setClosing(true);
    }, 4000);

    const finishTimer = window.setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      window.clearTimeout(closeTimer);
      window.clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`moon-splash ${closing ? "moon-splash--closing" : ""}`}
      aria-label="Loading Moon"
    >
      <img
        className="moon-splash-image"
        src="/moon-splash.png"
        alt=""
      />

      <div className="moon-splash-loading">
        <div className="moon-splash-track">
          <div className="moon-splash-progress" />
        </div>

        <p>Finding a calmer you...</p>
      </div>
    </div>
  );
}