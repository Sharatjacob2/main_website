import { useState, useCallback, useEffect } from "react";
import GalleryContext from "./GalleryContext";
import "./Gallery.css";

function GalleryProvider({ children }) {
  const [images, setImages] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(null);

  const isOpen = currentIndex !== null;

  //-----------------------------------------
  // Register an image
  //-----------------------------------------

  const registerImage = useCallback((image) => {
    setImages((prev) => {
      const exists = prev.find((img) => img.src === image.src);

      if (exists) return prev;

      return [...prev, image];
    });
  }, []);

  //-----------------------------------------
  // Open / Close
  //-----------------------------------------

  const openImage = (src) => {
    const index = images.findIndex((img) => img.src === src);

    if (index !== -1) setCurrentIndex(index);
  };

  const closeGallery = () => {
    setCurrentIndex(null);
  };

  //-----------------------------------------
  // Navigation
  //-----------------------------------------
  const nextImage = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const previousImage = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  //-----------------------------------------
  // Keyboard
  //-----------------------------------------

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      switch (e.key) {
        case "Escape":
          closeGallery();
          break;

        case "ArrowRight":
          nextImage();
          break;

        case "ArrowLeft":
          previousImage();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, nextImage, previousImage]);
  //-----------------------------------------

  return (
    <GalleryContext.Provider
      value={{
        registerImage,
        openImage,
      }}
    >
      {children}

      {isOpen && (
        <div className="gallery-overlay" onClick={closeGallery}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-close"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              ✕
            </button>
            <div className="gallery-image-container">
              <button
                className="gallery-arrow gallery-arrow-left"
                onClick={previousImage}
              >
                &#8249;
              </button>

              <img
                src={images[currentIndex].src}
                alt=""
                className="gallery-image"
              />

              <button
                className="gallery-arrow gallery-arrow-right"
                onClick={nextImage}
              >
                &#8250;
              </button>
            </div>
            <div className="gallery-footer">
              <div className="gallery-caption">
                {images[currentIndex].caption}
              </div>

              <div className="gallery-controls">
                <div>
                  {currentIndex + 1}
                  {" / "}
                  {images.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </GalleryContext.Provider>
  );
}

export default GalleryProvider;
