import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./BlogPost.css";
import "../utils/ContentPage.css";
import parseFrontmatter from "../utils/parseFrontmatter";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
function BlogPost() {
  const { slug } = useParams();

  const [content, setContent] = useState("");
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    fetch(`/content/posts/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseFrontmatter(text);
        setMetadata(parsed.metadata);
        setContent(parsed.content);
      });
  }, [slug]);

  return (
    <>
      <div className="blog-post-wrapper content-page-wrapper">
        <Link to="/blog" className="back-button">
          ← Back to Blog
        </Link>
        <div className="content-page">
          <div className="content-header">
            <h1 className="content-title">{metadata.title}</h1>

            <div className="content-author">By {metadata.author}</div>

            <div className="content-meta">
              {metadata.date} • {metadata.readingTime} minute read
            </div>
          </div>

          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
      <Footer color={"#8ba26a"} />
    </>
  );
}

export default BlogPost;
