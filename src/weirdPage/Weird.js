import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import TitleEffect from "../TitleEffect";
import { ReactComponent as WeirdF } from "./WEIRD f.svg";
import { ReactComponent as WeirdB } from "./WEIRD b.svg";
import { ReactComponent as WeirdCentre } from "./Weird Test Scentre.svg";

import Footer from "../footer/Footer";
import parseFrontmatter from "../utils/parseFrontmatter";
import PageHeader from "../utils/PageHeader";



import "./Weird.css";

const slugs = [
  "pixel-art",
  "p5",
  "figma",
];

const WeirdCard = ({ item }) => {
  const { slug, title, subtitle, preview, cover } = item;

  return (
    <Link
      to={`/weird/${slug}`}
      className="weird-card-link"
    >
      <article className="weird-card">

        <div className="weird-image-wrapper">
          <img
            src={`/content/weird/${slug}/${cover}`}
            alt={title}
            className="weird-image"
          />
        </div>

        <div className="weird-card-body">

          <div className="weird-subtitle">
            {subtitle}
          </div>

          <h2 className="weird-title">
            {title}
          </h2>

          <p className="weird-preview">
            {preview}
          </p>

          <div className="weird-open">
            Discover ↗
          </div>

        </div>

      </article>
    </Link>
  );
};

const Weird = () => {
  document.body.classList.remove("hide-scrollbars");

  const [exhibitions, setExhibitions] = useState([]);

  useEffect(() => {
    Promise.all(
      slugs.map(async (slug) => {
        const response = await fetch(
          `/content/weird/${slug}/${slug}.md`
        );

        const text = await response.text();

        const parsed = parseFrontmatter(text);

        return {
          slug,
          ...parsed.metadata,
        };
      })
    ).then((items) => {
      items.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
      setExhibitions(items);
    });
  }, []);

  const title = {
    front: WeirdF,
    back: WeirdB,
    centre: WeirdCentre,
    left: 34.906,
    top: -5.8,
    width: 30,
    height: 30,
  };

  return (
    <div
      className="Weird-Page"
      style={{ backgroundColor: "#26857a" }}
    >
      <TitleEffect title={title} />
      <PageHeader
        title="EXHIBITIONS"
        subtitle="Stuff I Made to Mess Around."
        accentColor="#74c6b0"
      />

      <div className="weird-grid">
        {exhibitions.map((item) => (
          <WeirdCard
            key={item.slug}
            item={item}
          />
        ))}
      </div>

      <Footer color="#7db0aa" />
    </div>
  );
};

export default Weird;