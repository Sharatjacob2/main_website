import { Link, useLocation } from "react-router-dom";
import favicon from "./alignedkitten.jpg";
import "./FloatingMenu.css";

function FloatingMenu() {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return null;
  }

  const links = [
    { path: "/about", label: "ABOUT" },
    { path: "/projects", label: "PROJECTS" },
    { path: "/weird", label: "WEIRD" },
    { path: "/blog", label: "BLOG" },
    { path: "/resume", label: "RESUME" },
  ];

  return (
    <div className="floating-menu">
      <div className="floating-links">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={
              pathname.startsWith(link.path)
                ? "menu-card active-link"
                : "menu-card"
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link to="/" className="floating-button">
        <img src={favicon} alt="Home" className="floating-logo" />
      </Link>
    </div>
  );
}

export default FloatingMenu;
