import "./gallery.css";
import GalleryLightbox from "../components/GalleryLightbox";


const dormitorioImages = import.meta.glob(
    "../assets/coleccion/habitaciones/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    {
        eager: true,
        import: "default",
    }
) as Record<string, string>;


const images = Object.entries(dormitorioImages)
    .sort(([a], [b]) =>
        a.localeCompare(b, undefined, { numeric: true })
    )
    .map(([, src]) => src);



function Habitaciones() {

    return (

        <section className="galleryPage">

            <h1>
                DORMITORIOS
            </h1>


            <GalleryLightbox
                images={images}
                altPrefix="Dormitorio"
            />


        </section>

    );

}


export default Habitaciones;