import "./gallery.css";
import GalleryLightbox from "../components/GalleryLightbox";

const cocinaImages = import.meta.glob(
    "../assets/coleccion/cocina/*.{jpg,jpeg,png,webp}",
    {
        eager: true,
        import: "default",
    }
) as Record<string, string>;

const images = Object.entries(cocinaImages)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => src);

function Cocinas() {
    return (
        <section className="galleryPage">
            <h1>COCINAS</h1>

            <GalleryLightbox
                images={images}
                altPrefix="Cocina"
            />
        </section>
    );
}

export default Cocinas;