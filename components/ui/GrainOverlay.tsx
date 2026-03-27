export default function GrainOverlay() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.025,
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <filter id="grain-noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.75"
          numOctaves={4}
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-noise)" />
    </svg>
  );
}
