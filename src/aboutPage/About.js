import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import TitleEffect from "../TitleEffect";
import { ReactComponent as AboutF } from "./ABOUT f.svg";
import { ReactComponent as AboutB } from "./ABOUTb.svg";
import { ReactComponent as Sharat } from "./SharatAboutPage.svg";

import Footer from "../footer/Footer";
import PageHeader from "../utils/PageHeader";

import "./About.css";

function About() {
  document.body.classList.remove("hide-scrollbars");

  const title = {
    front: AboutF,
    back: AboutB,
    centre: Sharat,
    color: "#2E294E",
    top: -9.375,
    right: 15.625,
    display: "none",
  };

  const [content, setContent] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch("/content/about.md")
      .then((res) => res.text())
      .then(setContent);
  }, []);

  const sections = content ? content.split("section-break") : [];

  return (
    <div className="About-Page" style={{ backgroundColor: "#2E294E" }}>
      <TitleEffect title={title} />
      <PageHeader
        title="THIS IS ME."
        subtitle="Last revised · July 2026"
        accentColor="#7F74C6"
      />

      {sections.map((section, index) => (
        <div key={index} className="about-card">
          <div className="section-number">
            {String(index + 1).padStart(2, "0")}
          </div>

          <ReactMarkdown>{section}</ReactMarkdown>
        </div>
      ))}

      <Footer color="#7F74C6" />
    </div>
  );
}

export default About;
