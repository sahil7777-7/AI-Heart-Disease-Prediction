function ConfidenceRing({ confidence, isPositive }) {
  const boundedConfidence = Math.max(0, Math.min(100, confidence));
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (boundedConfidence / 100) * circumference;
  const strokeColor = isPositive ? '#e11d48' : '#16a34a';

  return (
    <div style={{ position: 'relative', display: 'flex', itemsAlign: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 96 96" style={{ width: '90px', height: '90px', transform: 'rotate(-90deg)' }} aria-hidden="true">
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
      <div style={{ position: 'absolute', textAlign: 'center' }}>
        <p style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
          {boundedConfidence}%
        </p>
        <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', fontWeight: 600 }}>
          Confidence
        </p>
      </div>
    </div>
  );
}

export default ConfidenceRing;
