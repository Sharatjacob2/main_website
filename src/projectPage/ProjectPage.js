import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./ProjectPage.css";
import parseFrontmatter from "../utils/parseFrontmatter";

function ProjectPage() {
  const { slug } = useParams();

  const [content, setContent] = useState("");
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    fetch(`/content/projects/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseFrontmatter(text);
        setMetadata(parsed.metadata);
        setContent(parsed.content);
      });
  }, [slug]);

  return (
    <div className="project-post-wrapper">
      <div className="project-post">
        <div className="project-header">
          <h1 className="project-title">{metadata.title}</h1>

          <div className="project-subtitle">{metadata.subtitle}</div>

          <a
            href={metadata.linkref}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {metadata.link}
          </a>
        </div>

        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default ProjectPage;
