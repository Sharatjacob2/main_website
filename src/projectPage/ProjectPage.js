import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./ProjectPage.css";
import "../utils/ContentPage.css";
import Footer from "../footer/Footer";
import parseFrontmatter from "../utils/parseFrontmatter";
import { Link } from "react-router-dom";
import GalleryProvider from "../Gallery/GalleryProvider";
import Figure from "../Gallery/Figure";

function ProjectPage() {
  const { slug } = useParams();

  const [content, setContent] = useState("");
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    fetch(`/content/projects/${slug}/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseFrontmatter(text);
        setMetadata(parsed.metadata);
        setContent(parsed.content);
      });
  }, [slug]);

  return (
    <GalleryProvider>
      <div className="project-post-wrapper content-page-wrapper">
        <Link to="/projects" className="back-button">
          ← Back to Projects
        </Link>
        <div className="content-page">
          <div className="content-header">
            <h1 className="content-title">{metadata.title}</h1>

            <div className="content-subtitle">{metadata.subtitle}</div>

            <a
              href={metadata.linkref}
              target="_blank"
              rel="noopener noreferrer"
              className="content-link"
            >
              {metadata.link}
            </a>
          </div>
          <ReactMarkdown
            components={{
              img: ({ src, alt }) => <Figure src={src} alt={alt} />,
              a: ({ href, children }) => (
                <Link to={href} className="content-link">
                  {children}
                </Link>
              ),
            }}
          >
            {content}
          </ReactMarkdown>{" "}
        </div>
      </div>
      <Footer color={"#a2756a"} />
    </GalleryProvider>
  );
}

export default ProjectPage;
