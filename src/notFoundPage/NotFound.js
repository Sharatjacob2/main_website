import PageHeader from "../utils/PageHeader";
import Footer from "../footer/Footer";

import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
  document.body.classList.remove("hide-scrollbars");

  return (
    <div className="NotFound-Page">

      <PageHeader
        title="THIS PAGE DOES NOT EXIST."
        subtitle="You are in misalignment with the energy of my personal website."
        accentColor="#9fb4d5"
      />

      <div className="notfound-card">

        <p>
          The page you requested could not be found. Where did you get that link from? This is heavily distressing, suspicious, and unexpected.
        </p>

        <p>
          It may have been renamed, removed, or simply never existed. Maybe something below will interest you. It better.
        </p>

        <div className="notfound-links">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/projects">Projects</Link>

          <Link to="/blog">Blog</Link>

          <Link to="/weird">Weird</Link>

          <Link to="/cv&resume">Resume</Link>

        </div>

        <div className="notfound-note">
          ...or simply use that sneaky cat in the corner to find your way back.
        </div>

      </div>

      <Footer color="#7d93b2" />
    </div>
  );
};

export default NotFound;