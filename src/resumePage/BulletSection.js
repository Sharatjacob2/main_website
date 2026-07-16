function BulletSection({ section }) {
  return (
    <section className="resume-section">
      <h2 className="resume-section-title">{section.title}</h2>

      <div className="bullet-card">
        <ul className="bullet-list">
          {section.bullets.map((bullet) => (
            <li key={bullet}>
              <span className="bullet-dot">●</span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BulletSection;
