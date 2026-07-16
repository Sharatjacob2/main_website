import { useState } from "react";

function AccordionItem({ item }) {

  const [open, setOpen] = useState(false);

  return (

    <div className="accordion-card">

      <button
        className="accordion-header"
        onClick={() => setOpen(!open)}
      >

        <div>

          <h3>{item.title}</h3>

          {(item.fields.role || item.fields.degree) && (

            <p className="accordion-subtitle">

              {item.fields.role || item.fields.degree}

            </p>

          )}

        </div>

        <div className="accordion-arrow">

          {open ? "−" : "+"}

        </div>

      </button>

      <div className={`accordion-body ${open ? "open" : ""}`}>

        {item.fields.date && (

          <p className="accordion-date">

            {item.fields.date}

          </p>

        )}

        {item.fields.location && (

          <p className="accordion-location">

            {item.fields.location}

          </p>

        )}

        {item.bullets.length > 0 && (

          <ul>

            {item.bullets.map((bullet) => (

              <li key={bullet}>
                {bullet}
              </li>

            ))}

          </ul>

        )}

      </div>

    </div>

  );

}

export default AccordionItem;