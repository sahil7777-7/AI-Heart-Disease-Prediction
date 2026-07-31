function MedicalBackground() {
  return (
    <div aria-hidden="true" className="bg-orb-wrapper">
      <div className="bg-orb bg-orb-red" />
      <div className="bg-orb bg-orb-blue" />
      <div className="bg-orb bg-orb-purple" />
      <div className="heartbeat-particles">
        <span className="particle particle-1" />
        <span className="particle particle-2" />
        <span className="particle particle-3" />
        <span className="particle particle-4" />
      </div>
    </div>
  );
}

export default MedicalBackground;
