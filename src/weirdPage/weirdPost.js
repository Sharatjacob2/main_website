import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./weirdPost.css";
import parseFrontmatter from "../utils/parseFrontmatter";
import Footer from "../footer/Footer";

function WeirdPost() {
  const { slug } = useParams();

  const [content, setContent] = useState("");
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    fetch(`/content/weird/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseFrontmatter(text);
        setMetadata(parsed.metadata);
        setContent(parsed.content);
      });
  }, [slug]);

  return (
    <>
      <div className="weirds-post-wrapper">
        <div className="weirds-post">
          <div className="weirds-hero">
            <img
              src={`/content/images/${metadata.cover}`}
              alt={metadata.title}
              className="weirds-cover"
            />
          </div>

          <div className="weirds-header">
            <div className="weirds-exhibition">EXHIBITION {metadata.order}</div>

            <h1 className="weirds-title">{metadata.title}</h1>

            <div className="weirds-subtitle">{metadata.subtitle}</div>

            {metadata.link && (
              <a
                href={metadata.linkref}
                target="_blank"
                rel="noopener noreferrer"
                className="weirds-link"
              >
                {metadata.link} ↗
              </a>
            )}
          </div>

          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
      <Footer color={"#6aa28f"} />
    </>
  );
}

export default WeirdPost;
