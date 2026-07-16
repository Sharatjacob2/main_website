import iittLogo from "./iitt_logo.png";
import isblogo from "./isb_logo.png";
import meclogo from "./mec_logo.png";

function EducationSection({ section }) {
  const logos = {
    "Indian Institute of Technology Tirupati": iittLogo,
    "The Indian School, Bahrain": isblogo,
    "Govt. Model Engineering College": meclogo,
  };

  return (
    <section className="resume-section">
      <h2 className="resume-section-title">{section.title}</h2>

      <div className="education-timeline">
        {section.items.map((item) => (
          <div className="education-item" key={item.title}>
            {/* <div className="education-marker">
              <div className="education-dot" />

              <div className="education-line" />
            </div> */}

            <div className="education-content">
              <div className="education-date">{item.fields.date}</div>

              <h3>{item.title}</h3>

              <p>{item.fields.degree}</p>

              {item.fields.gpa && <p>{item.fields.gpa}</p>}

              <p>{item.fields.location}</p>
            </div>
            <div className="education-institute-logo-wrapper">
              <img
                src={logos[item.title]}
                alt={`${item.title} logo`}
                className="education-institute-logo"
              />{" "}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
