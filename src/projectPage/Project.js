import { useState, useEffect } from "react";

import TitleEffect from "../TitleEffect";

import { ReactComponent as ProjectF } from "./PROJECTS f.svg";
import { ReactComponent as ProjectB } from "./PROJECTS b.svg";
import { ReactComponent as ProjectCentre } from "./Projects Centre.svg";

import Footer from "../footer/Footer";

import parseFrontmatter from "../utils/parseFrontmatter";

import "./Project.css";
import { Link } from "react-router-dom";

function ProjectItem({ item }) {
  return (
    <Link to={`/projects/${item.slug}`}>
      <div className="project-item">
        <div className="project-text">
          <div className="project-title">{item.title}</div>

          <div className="project-subtitle">{item.subtitle}</div>

          <div className="project-desc">{item.content}</div>

          <a
            href={item.linkref}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {item.link}
          </a>
        </div>
        <div className="projects-image-wrapper">
          <img
            src={`/content/images/${item.image}`}
            alt={item.title}
            className="project-image"
          />
        </div>

        <div className="project-divider"></div>
      </div>
    </Link>
  );
}

function Project() {
  document.body.classList.remove("hide-scrollbars");

  const title = {
    front: ProjectF,
    back: ProjectB,
    centre: ProjectCentre,
    top: -14.063,
    right: 0,
    width: 62.5,
    height: 54.688,
  };

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function loadProjects() {
      const slugs = await fetch("/content/projects/index.json").then((res) =>
        res.json(),
      );

      const projects = await Promise.all(
        slugs.map(async (slug) => {
          const response = await fetch(`/content/projects/${slug}.md`);

          const text = await response.text();

          const parsed = parseFrontmatter(text);

          return {
            slug,
            ...parsed.metadata,
            content: parsed.content.trim(),
          };
        }),
      );

      setProjects(projects);
    }

    loadProjects();
  }, []);
  return (
    <div className="Projects-Page" style={{ backgroundColor: "#8d2835" }}>
      <TitleEffect title={title} />
      <div className="about-header">
        <div className="about-heading">ALL OF MY WORKS.</div>

        <div className="about-updated">Last revised · July 2026</div>
      </div>

      <div className="projects-divider" />
      {projects.map((project) => (
        <ProjectItem key={project.slug} item={project} />
      ))}

      <Footer color="#c96a6a" />
    </div>
  );
}

export default Project;
