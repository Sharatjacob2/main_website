function HeroSection({ fields }) {
  return (
    <section className="resume-hero">

      <h1 className="resume-name">
        {fields.name}
      </h1>

      <p className="resume-headline">
        {fields.headline}
      </p>

      <div className="resume-contact">

        <span>{fields.location}</span>

        <span>•</span>

        <a href={`mailto:${fields.email}`}>
          {fields.email}
        </a>

      </div>

    </section>
  );
}

export default HeroSection;