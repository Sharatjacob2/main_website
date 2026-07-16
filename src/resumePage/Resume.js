import TitleEffect from "../TitleEffect";
import { ReactComponent as ResumeF } from "./RESUME f.svg";
import { ReactComponent as ResumeB } from "./RESUME b.svg";
import { ReactComponent as ResumeCentre } from "./Resume Centre Test.svg";

import DownloadIcon from "./Download Icon.svg";

import { useEffect, useState } from "react";

import parseResume from "./ResumeParser";
import ResumeSection from "./ResumeSection";

import HeroSection from "./HeroSection";

import PageHeader from "../utils/PageHeader";
import Footer from "../footer/Footer";

import "./Resume.css";

const Resume = () => {
  document.body.classList.remove("hide-scrollbars");
  const [sections, setSections] = useState([]);
  const title = {
    front: ResumeF,
    back: ResumeB,
    centre: ResumeCentre,
    top: -21.094,
    left: -11.875,
    width: 55.313,
    height: 55.313,
  };
  useEffect(() => {
    fetch("/content/resume.md")
      .then((r) => r.text())
      .then((text) => {
        const parsed = parseResume(text);

        console.log(parsed);

        setSections(parsed);
      });
  }, []);
  return (
    <div className="Resume-Page" style={{ backgroundColor: "#c44e2d" }}>
      <TitleEffect title={title} />

      <PageHeader
        title="CURRENTLY STUDYING"
        subtitle="BUT HERE'S A PROFESSIONAL HISTORY ANYWAY."
        accentColor="#e08257"
      />

      <a
        href="/Sharat Resume.pdf"
        download="Sharat Resume.pdf"
        className="resume-download"
      >
        <img src={DownloadIcon} alt="" className="download-icon" />

        <span>Download PDF ↗</span>
      </a>
      <div className="resume-meta">
        Viewing 3 Pages • PDF • Updated July 2026
      </div>
      <div className="resume-document">
        {sections.map((section) => {
          if (section.title === "Hero") {
            return <HeroSection key={section.title} fields={section.fields} />;
          }

          return <ResumeSection key={section.title} section={section} />;
        })}
      </div>

      <Footer color="#e08257" />
    </div>
  );
};

export default Resume;
