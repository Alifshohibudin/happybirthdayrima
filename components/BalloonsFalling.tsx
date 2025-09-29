"use client";

export default function BalloonsFalling() {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="balloon animate-[fall_10s_linear_infinite]"
          style={{
            left: `${30 * i + 20}%`,
            animationDuration: `${10 + i * 2}s`,
          }}
        />
      ))}
    </>
  );
}
