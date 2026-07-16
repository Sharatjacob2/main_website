function EducationSection({ section }) {

    return (

        <section className="resume-section">

            <h2 className="resume-section-title">

                {section.title}

            </h2>

            <div className="education-timeline">

                {

                    section.items.map(item => (

                        <div
                            className="education-item"
                            key={item.title}
                        >

                            <div className="education-marker">

                                <div className="education-dot"/>

                                <div className="education-line"/>

                            </div>

                            <div className="education-content">

                                <div className="education-date">

                                    {item.fields.date}

                                </div>

                                <h3>

                                    {item.title}

                                </h3>

                                <p>

                                    {item.fields.degree}

                                </p>

                                {

                                    item.fields.gpa && (

                                        <p>

                                            {item.fields.gpa}

                                        </p>

                                    )

                                }

                                <p>

                                    {item.fields.location}

                                </p>

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default EducationSection;