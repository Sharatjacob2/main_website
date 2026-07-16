import ResumeItem from "./ResumeItem";
import AccordionSection from "./AccordionSection";
import ChipSection from "./ChipSection";
import EducationSection from "./EducationSection";
import BulletSection from "./BulletSection";
import ReferenceSection from "./ReferenceSection";



function ResumeSection({ section }) {
  const accordionSections = ["Experience", "Projects", "Publications"];

  if (accordionSections.includes(section.title)) {
    return <AccordionSection section={section} />;
  }
  if (section.title === "Skills") {
    return <ChipSection section={section} />;
  }
  if (section.title === "Education") {
    return <EducationSection section={section} />;
  }
  if (section.title === "Leadership" || section.title === "Certifications") {
    return <BulletSection section={section} />;
  }
  if (section.title === "References") {
    return <ReferenceSection section={section} />;
  }
  return (
    <section className="resume-section">
      <h2 className="resume-section-title">{section.title}</h2>

      {/* Experience / Education / Projects */}

      {section.items.length > 0 && (
        <div className="resume-section-grid">
          {section.items.map((item) => (
            <ResumeItem
              key={item.title}
              item={item}
              collapsible={section.collapse}
            />
          ))}
        </div>
      )}

      {/* Certifications / Leadership */}

      {section.bullets.length > 0 && (
        <ul className="resume-simple-list">
          {section.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}

      {/* Hero / Skills */}

      {Object.keys(section.fields).length > 0 && (
        <div className="resume-fields">
          {Object.entries(section.fields).map(([key, value]) =>
            Array.isArray(value) ? (
              <div key={key}>
                <strong>{key}</strong>

                <ul>
                  {value.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p key={key}>
                <strong>{key}</strong> {value}
              </p>
            ),
          )}
        </div>
      )}
    </section>
  );
}

export default ResumeSection;
