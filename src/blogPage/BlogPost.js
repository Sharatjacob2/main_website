import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import './BlogPost.css';
import fm from "front-matter";

function BlogPost() {
    const { slug } = useParams();

    const [content, setContent] = useState("");
    const [metadata, setMetadata] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);
    
    useEffect(() => {
        fetch(`/posts/${slug}.md`)
            .then(res => res.text())
            .then(text => {
                const parsed = fm(text);
                setMetadata(parsed.attributes);
                setContent(parsed.body);
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
                        {metadata.author}
                    </div>

                    <div className="post-meta">
                        {metadata.date} • {metadata.time}
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