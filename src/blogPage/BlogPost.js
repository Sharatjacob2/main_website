import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import './BlogPost.css';
import parseFrontmatter from "../utils/parseFrontmatter";

function BlogPost() {
    const { slug } = useParams();

    const [content, setContent] = useState("");
    const [metadata, setMetadata] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        fetch(`/content/posts/${slug}.md`)
            .then(res => res.text())
            .then(text => {
                const parsed = parseFrontmatter(text);
                setMetadata(parsed.metadata);
                setContent(parsed.content);
            });

            
    }, [slug]);

    return (
        <div className="blog-post-wrapper">
            <div className="blog-post">
                <div className="post-header">

                    <h1 className="post-title">
                        {metadata.title}
                    </h1>

                    <div className="post-author">
                        By {metadata.author}
                    </div>

                    <div className="post-meta">
                        {metadata.date} • {metadata.readingTime} minute read
                    </div>

                </div>

                <ReactMarkdown>
                    {content}
                </ReactMarkdown>
            </div>
        </div>

    );
}

export default BlogPost;