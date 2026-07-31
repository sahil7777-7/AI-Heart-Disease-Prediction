function SectionCard({ icon, title, description, children }) {
  return (
    <section className="section-card">
      <div className="section-header">
        <div className="section-icon-box">
          {icon}
        </div>
        <div>
          <h3 className="section-title">{title}</h3>
          {description ? <p className="section-desc">{description}</p> : null}
        </div>
      </div>
      <div className="fields-grid">{children}</div>
    </section>
  );
}

export default SectionCard;
