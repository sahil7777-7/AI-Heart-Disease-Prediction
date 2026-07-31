import { motion } from 'framer-motion';

function HeartHero() {
  return (
    <section className="hero-card">
      <div>
        <span className="badge-tag">
          Clinical Risk Assessment & Telemetry
        </span>
        <h2 className="hero-title">
          Next-Gen AI Heart Risk Diagnostic System.
        </h2>
        <p className="hero-description">
          Enter real-time clinical parameters to generate instantaneous cardiovascular risk analytics with maximum precision.
        </p>
      </div>

      <div className="ecg-display-wrapper">
        <motion.div
          className="ecg-pulse-orb"
          animate={{ scale: [0.95, 1.15, 0.95], opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="ecg-icon-center"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 64 64" style={{ width: '48px', height: '48px' }} fill="none">
            <motion.path
              d="M32 57s-18-11-24.3-24.7C2.6 22 7.8 11 18.6 11c5.7 0 10 3 13.4 8 3.4-5 7.7-8 13.4-8C56.2 11 61.4 22 56.3 32.3 50 46 32 57 32 57Z"
              fill="currentColor"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.path
              d="M8 34h10l4-9 6 19 5-12h5l3 7h16"
              stroke="#ffffff"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ pathLength: [0.3, 1, 0.3], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

export default HeartHero;
