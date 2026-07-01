import { useState, useEffect } from "react";
import TitleEffect from "../TitleEffect";
import { ReactComponent as BlogF } from "./BLOG f.svg";
import { ReactComponent as BlogB } from "./BLOG b.svg";
import { ReactComponent as BlogCentre } from "./Blog Centre.svg";
import "./Blog.css";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import parseFrontmatter from "../utils/parseFrontmatter";

const slugs = ["lethality-human-feedback", "bad-photos", "lethality-human-feedback",];

const BlogItem = (props) => {
  const { slug, title, preview, date, readingTime } = props.item;
  return (
    <Link to={`/blog/${slug}`} className="blog-card-link">
      <div className="blog-item">
        <div className="blog-title">{title}</div>
        <div className="blog-preview">{preview}</div>
        <div className="blog-date">{date} • {readingTime} mins</div>
        <div className="blog-divider"></div>
      </div>
    </Link>
  );
};

const Blog = () => {
  document.body.classList.remove("hide-scrollbars");
  const [blogitems, setBlogitems] = useState([]);

  useEffect(() => {
    Promise.all(
      slugs.map(async (slug) => {
        const response = await fetch(`/content/posts/${slug}.md`);
        const text = await response.text();

        const parsed = parseFrontmatter(text);

        return {
          slug,
          ...parsed.metadata,
        };
      }),
    ).then(setBlogitems);
  }, []);

  const title = {
    front: BlogF,
    back: BlogB,
    centre: BlogCentre,
    color: "#C5D86D",
    top: -11.719,
    width: 46.875,
    height: 46.875,
    right: 27.344,
  };
  return (
    <div className="Blog-Page" style={{ backgroundColor: "#9dae4d" }}>
      <TitleEffect className="title-margin" title={title} />
      <div className="blog-main-title">POSTS</div>
      <div className="blog-main-title-underline"></div>
      <div className="blog-grid">
        {blogitems.map((blogitem) => (
          <BlogItem key={blogitem.slug} item={blogitem} />
        ))}
      </div>
      <Footer color={"#c6bc90"} />
    </div>
  );
};

export default Blog;
