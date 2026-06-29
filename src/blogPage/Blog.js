import { useState, useEffect } from "react";
import TitleEffect from "../TitleEffect";
import { ReactComponent as BlogF } from './BLOG f.svg';
import { ReactComponent as BlogB } from './BLOG b.svg';
import { ReactComponent as BlogCentre } from './Blog Centre.svg';
import './Blog.css';
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import fm from "front-matter";

const slugs = [
    "lethality-human-feedback",
];


const BlogItem = (props) => {
    const { slug, title, preview, date } = props.item;
    return (
        <div className="blog-item">

            <Link to={`/blog/${slug}`}>
                <div className="blog-title">{title}</div>
                <div className="blog-preview">{preview}</div>
                <div className="blog-date">{date}</div>
                <div className="blog-divider"></div>
            </Link>
        </div>
    );
}


const Blog = () => {
    document.body.classList.remove('hide-scrollbars');

    // { link: "https://alignedkitten.substack.com/p/interlude-my-possibly-controversial", title: "Interlude: My (Possibly Controversial) Takes on the AI Art Discourse", preview: "I strongly uphold your sentiment, but I probably disagree heavily with your argument.", date: "31st MAR 2025" },


    // { link: "https://docs.google.com/document/d/1zjBKDtviu-NuGaZz2md8KvPRVicNLX5P6_fkmI3FVK4/edit?tab=t.0", title: "A Flawed Primer of my Experience in AI Alignment so far", preview: "My views on artificial intelligence developed early on in school, unintentionally. I had begun learning computer science, programming in C++ and instantly dismissed the idea of an AI overlord, that WE had designed, turning on us and conquering the world.....", date: "24th JUL 2024" },

    // { link: "https://www.lesswrong.com/posts/WNTGe87fHwDZMLqzW/the-disastrously-confident-and-inaccurate-ai", title: "The Disastrously Confident And Inaccurate AI", preview: "Pseudo-aligned mesa-optimizers may be a super difficult problem to address or it may be a kinda easy problem to address. But the truth of the matter is that the facts we have pertaining to them are few in number, in fact, we know very little about them truly....", date: "1st NOV 2022" },

    // { link: "https://medium.com/paperkin/should-art-pay-the-price-for-its-artists-b1f24d88103b", title: "Should Art Pay the Price for its Artists?", preview: "Van Gogh was depressed and alone.", date: "2nd AUG 2022" }

    const [blogitems, setBlogitems] = useState([]);

    useEffect(() => {
        Promise.all(
            slugs.map(async (slug) => {
                const response = await fetch(`/posts/${slug}.md`);
                const text = await response.text();

                const parsed = fm(text);

                return {
                    slug,
                    ...parsed.attributes
                };
            })
        ).then(setBlogitems);
    }, []);



    const title = { front: BlogF, back: BlogB, centre: BlogCentre, color: '#C5D86D', top: -11.719, width: 46.875, height: 46.875, right: 27.344 };
    return (
        <div className="Blog-Page" style={{ backgroundColor: '#C5D86D' }}>
            <TitleEffect className="title-margin" title={title} />
            <div className="blog-main-title">POSTS</div>
            <div className="blog-main-title-underline"></div>
            {blogitems.map((blogitem) => (
                <BlogItem
                    key={blogitem.slug}
                    item={blogitem} />
            ))}
            <Footer color={'#B7A555'} />
        </div>
    );
}

export default Blog;