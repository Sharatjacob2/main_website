import "./PageHeader.css";

function PageHeader({
  title,
  subtitle,
  accentColor = "#7F74C6",
}) {
  return (
    <>
      <div className="page-header">
        <div className="page-heading">
          {title}
        </div>

        {subtitle && (
          <div className="page-subtitle">
            {subtitle}
          </div>
        )}
      </div>

      <div
        className="page-divider"
        style={{ backgroundColor: accentColor }}
      />
    </>
  );
}

export default PageHeader;