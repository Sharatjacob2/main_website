import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./weirdPost.css";
import parseFrontmatter from "../utils/parseFrontmatter";
import Footer from "../footer/Footer";
import "../utils/ContentPage.css";
import { Link } from "react-router-dom";

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
      <div className="weirds-post-wrapper content-page-wrapper">
        <Link to="/weird" className="back-button">
          ← Back to Weird
        </Link>
        <div className="content-page weird-content-page">
          <div className="weirds-hero">
            <img
              src={`/content/images/${metadata.cover}`}
              alt={metadata.title}
              className="weirds-cover"
            />
          </div>
          <div className="weird-content-body">
            <div className="content-header">
              <div className="weirds-exhibition">
                EXHIBITION {metadata.order}
              </div>

              <h1 className="content-title">{metadata.title}</h1>

              <div className="content-subtitle">{metadata.subtitle}</div>
            </div>

            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </div>
      <Footer color={"#6aa28f"} />
    </>
  );
}

export default WeirdPost;
