import { useState, useEffect, useMemo } from "react";

import "./Blog.css";

import { ReactComponent as BlogF } from "./BLOG f.svg";
import { ReactComponent as BlogB } from "./BLOG b.svg";
import { ReactComponent as BlogCentre } from "./Blog Centre.svg";

import TitleEffect from "../TitleEffect";
import Footer from "../footer/Footer";
import PageHeader from "../utils/PageHeader";

import parseFrontmatter from "../utils/parseFrontmatter";

import BlogItem from "./BlogItem";
import TagFilter from "./TagFilter";

const slugs = [
  "art_vs_artist",
  "psychodatanalysis",
  "cult-potential",
];

function Blog() {
  document.body.classList.remove("hide-scrollbars");

  const [blogItems, setBlogItems] = useState([]);

  const [selectedTags, setSelectedTags] = useState([]);

  //-----------------------------------------
  // Load posts
  //-----------------------------------------

  useEffect(() => {
    Promise.all(
      slugs.map(async (slug) => {
        const response = await fetch(
          `/content/posts/${slug}/${slug}.md`
        );

        const text = await response.text();

        const parsed = parseFrontmatter(text);

        return {
          slug,
          ...parsed.metadata,
        };
      })
    ).then((items) => {
      items.sort(
        (a, b) =>
          new Date(b.date) - new Date(a.date)
      );

      setBlogItems(items);
    });
  }, []);

  //-----------------------------------------
  // All tags
  //-----------------------------------------

  const allTags = useMemo(() => {
    return [...new Set(
      blogItems.flatMap(post => post.tags || [])
    )].sort();
  }, [blogItems]);

  //-----------------------------------------
  // Visible blogs
  //-----------------------------------------

  const visibleBlogs = useMemo(() => {

    if (selectedTags.length === 0)
      return blogItems;

    return blogItems.filter(post =>
      selectedTags.every(tag =>
        (post.tags || []).includes(tag)
      )
    );

  }, [blogItems, selectedTags]);

  //-----------------------------------------
  // Toggle tag
  //-----------------------------------------

  function toggleTag(tag) {

    setSelectedTags(prev => {

      if (prev.includes(tag))
        return prev.filter(t => t !== tag);

      return [...prev, tag];

    });

  }

  //-----------------------------------------

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

  //-----------------------------------------

  return (
    <div
      className="Blog-Page"
      style={{ backgroundColor: "#9dae4d" }}
    >

      <TitleEffect title={title} />

      <PageHeader
        title="THOUGHTS & OPINIONS"
        subtitle="A Penny for my Head."
        accentColor="#a8c779"
      />

      <div className="blog-main-title-underline"></div>

      <TagFilter
        tags={allTags}
        selectedTags={selectedTags}
        onToggleTag={toggleTag}
        onClear={() => setSelectedTags([])}
      />

      <div className="blog-grid">

        {visibleBlogs.map(post => (
          <BlogItem
            key={post.slug}
            item={post}
          />
        ))}

      </div>

      <Footer color="#8ba26a" />

    </div>
  );
}

export default Blog;