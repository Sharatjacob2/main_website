import { useState } from "react";

function ResumeItem({ item, collapsible }) {
  const [open, setOpen] = useState(!collapsible);

  return (
    <div className="resume-card">
      <div
        className="resume-card-header"
        onClick={() => collapsible && setOpen(!open)}
      >
        <h3>{item.title}</h3>

        {collapsible && (
          <span className="resume-chevron">{open ? "−" : "+"}</span>
        )}
      </div>

      {open && (
        <div className="resume-card-body">
          {Object.entries(item.fields).map(([key, value]) =>
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

          {item.bullets.length > 0 && (
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default ResumeItem;
