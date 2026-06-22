import { useState } from "react";

type GalleryLightboxProps = {
    images: string[];
    altPrefix: string;
};

function GalleryLightbox({ images, altPrefix }: GalleryLightboxProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    const showPrev = () => {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
        );
    };

    const showNext = () => {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
        );
    };

    return (
        <>
            <div className="galleryGrid">
                {images.map((image, index) => (
                    <button
                        className="galleryItem"
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <img src={image} alt={`${altPrefix} ${index + 1}`} />
                    </button>
                ))}
            </div>

            {selectedIndex !== null && (
                <div className="lightbox">
                    <button className="lightboxClose" onClick={closeLightbox}>
                        ×
                    </button>

                    <button className="lightboxArrow lightboxPrev" onClick={showPrev}>
                        ‹
                    </button>

                    <img
                        src={images[selectedIndex]}
                        alt={`${altPrefix} ${selectedIndex + 1}`}
                    />

                    <button className="lightboxArrow lightboxNext" onClick={showNext}>
                        ›
                    </button>
                </div>
            )}
        </>
    );
}

export default GalleryLightbox;