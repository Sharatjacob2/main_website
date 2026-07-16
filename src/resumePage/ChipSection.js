function ChipSection({ section }) {

    return (

        <section className="resume-section">

            <h2 className="resume-section-title">

                {section.title}

            </h2>

            {

                Object.entries(section.fields).map(

                    ([group, values]) => (

                        <div
                            key={group}
                            className="chip-group"
                        >

                            <h3>

                                {group}

                            </h3>

                            <div className="chip-container">

                                {

                                    values.map(value => (

                                        <span
                                            key={value}
                                            className="resume-chip"
                                        >

                                            {value}

                                        </span>

                                    ))

                                }

                            </div>

                        </div>

                    )

                )

            }

        </section>

    );

}

export default ChipSection;