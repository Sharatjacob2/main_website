import AccordionItem from "./AccordionItem";

function AccordionSection({ section }) {

  return (

    <section className="resume-section">

      <h2 className="resume-section-title">

        {section.title}

      </h2>

      {section.items.map(item => (

        <AccordionItem

          key={item.title}

          item={item}

        />

      ))}

    </section>

  );

}

export default AccordionSection;