function ConfidenceRing({ confidence, isPositive }) {
  const boundedConfidence = Math.max(0, Math.min(100, confidence));
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (boundedConfidence / 100) * circumference;
  const strokeColor = isPositive ? '#e11d48' : '#16a34a';

  return (
    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '90px', height: '90px' }}>
      <svg viewBox="0 0 96 96" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }} aria-hidden="true">
        <circle cx="48" cy="48" r={radius} stroke="#e2e8f0" strokeWidth="7" fill="none" />
        <circle
          cx="48"
          cy="48"
          r={radius}
          stroke={strokeColor}
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1.1,
        pointerEvents: 'none'
      }}>
        <p style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0, padding: 0 }}>
          {boundedConfidence}%
        </p>
        <p style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b', fontWeight: 700, margin: '2px 0 0 0', padding: 0 }}>
          Confidence
        </p>
      </div>
    </div>
  );
}

export default ConfidenceRing;
