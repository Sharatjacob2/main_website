import { useContext, useEffect } from "react";
import GalleryContext from "./GalleryContext";

function Figure({ src, alt = "", caption }) {
  const { registerImage, openImage } = useContext(GalleryContext);

  const imageCaption = caption || alt;

  useEffect(() => {
    registerImage({
      src,
      caption: imageCaption,
    });
  }, [src, imageCaption, registerImage]);

  return (
    <figure className="gallery-figure">
      <img
        src={src}
        alt={alt}
        className="gallery-inline-image"
        onClick={() => openImage(src)}
      />

      {imageCaption && (
        <figcaption className="gallery-inline-caption">
          {imageCaption}
        </figcaption>
      )}
    </figure>
  );
}

export default Figure;
