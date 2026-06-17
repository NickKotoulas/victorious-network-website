"use client";

import { useState } from "react";

type SafeAssetImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function SafeAssetImage({
  src,
  alt,
  className = "",
}: SafeAssetImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`grid place-items-center bg-[radial-gradient(circle_at_50%_28%,rgba(212,175,55,0.18),transparent_18rem),linear-gradient(145deg,rgba(9,20,38,0.95),rgba(5,5,7,0.98))] ${className}`}
      >
        <div className="h-24 w-24 rounded-full border border-gold/25 bg-gold/10 shadow-[0_0_4rem_rgba(212,175,55,0.18)]" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
