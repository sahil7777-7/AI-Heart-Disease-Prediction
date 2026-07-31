import { motion } from 'framer-motion';
import { HeartPulse, ShieldAlert, ShieldCheck } from 'lucide-react';
import ConfidenceRing from './ConfidenceRing';

function ResultCard({ result }) {
  if (!result) {
    return null;
  }

  const isPositive = result.prediction === 'Heart Disease';
  const icon = isPositive ? <ShieldAlert size={28} /> : <ShieldCheck size={28} />;

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.96, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`result-card ${isPositive ? 'positive' : 'negative'}`}
    >
      <div className="result-header">
        <div className="result-title-box">
          <div className="result-icon">
            {icon}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)' }}>
              <HeartPulse size={14} color={isPositive ? 'var(--accent-red)' : 'var(--accent-emerald)'} />
              Diagnostic Result
            </div>
            <h3 className="result-status-text">
              {result.prediction}
            </h3>
          </div>
        </div>

        <ConfidenceRing confidence={result.confidence} isPositive={isPositive} />
      </div>

      <div className="result-summary-box">
        {result.summary}
      </div>
    </motion.section>
  );
}

export default ResultCard;
