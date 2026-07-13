import { Link } from "react-router-dom";

function BlogItem({ item }) {
  const {
    slug,
    title,
    preview,
    date,
    readingTime,
    image,
    tags = [],
  } = item;

  return (
    <Link to={`/blog/${slug}`} className="blog-card-link">
      <article className="blog-item">
        <div className="blog-image-wrapper">
          <img
            src={`/content/posts/${slug}/${image}`}
            alt={title}
            className="blog-image"
          />
        </div>

        <h2 className="blog-title">{title}</h2>

        <div className="blog-preview">{preview}</div>

        <div className="blog-tags">
          {tags.map((tag) => (
            <span key={tag} className="blog-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="blog-date">
          {date} • {readingTime} mins
        </div>

        <div className="blog-divider"></div>
      </article>
    </Link>
  );
}

export default BlogItem;