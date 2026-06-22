import "./gallery.css";
import GalleryLightbox from "../components/GalleryLightbox";


const placardImages = import.meta.glob(
    "../assets/coleccion/placard/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    {
        eager: true,
        import: "default",
    }
) as Record<string, string>;


const images = Object.entries(placardImages)
    .sort(([a], [b]) =>
        a.localeCompare(b, undefined, { numeric: true })
    )
    .map(([, src]) => src);



function Placards() {

    return (

        <section className="galleryPage">

            <h1>
                PLACARES / VESTIDORES
            </h1>


            <GalleryLightbox
                images={images}
                altPrefix="Placard"
            />


        </section>

    );

}


export default Placards;