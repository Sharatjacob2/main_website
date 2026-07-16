function ReferenceSection({ section }) {
  return (
    <section className="resume-section">

      <h2 className="resume-section-title">

        {section.title}

      </h2>

      {section.items.map((item) => (

        <div
          key={item.title}
          className="reference-card"
        >

          <h3>

            {item.title}

          </h3>

          <p>

            {item.fields.position}

          </p>

          <p>

            {item.fields.organization}

          </p>

          <a
            href={`mailto:${item.fields.email}`}
            className="reference-email"
          >

            {item.fields.email}

          </a>

        </div>

      ))}

    </section>
  );
}

export default ReferenceSection;