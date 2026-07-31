import { HeartPulse } from 'lucide-react';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="nav-brand">
          <div className="nav-icon-badge">
            <HeartPulse size={24} className="pulse-icon" />
          </div>
          <div>
            <h1 className="nav-title">Heart Disease Prediction System</h1>
            <p className="nav-subtitle">AI Powered Clinical Telemetry</p>
          </div>
        </div>
        <div className="nav-status-pill">
          <span className="status-dot" />
          System Online
        </div>
      </div>
    </header>
  );
}

export default Navbar;
