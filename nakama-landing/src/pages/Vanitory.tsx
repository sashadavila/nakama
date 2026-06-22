import "./gallery.css";
import GalleryLightbox from "../components/GalleryLightbox";


const vanitoryImages = import.meta.glob(
    "../assets/coleccion/vanitory/*.{jpg,jpeg,png,webp}",
    {
        eager: true,
        import: "default",
    }
) as Record<string, string>;


const images = Object.entries(vanitoryImages)
    .sort(([a], [b]) =>
        a.localeCompare(b, undefined, { numeric: true })
    )
    .map(([, src]) => src);



function Vanitory() {

    return (

        <section className="galleryPage">

            <h1>
                VANITORY
            </h1>


            <GalleryLightbox
                images={images}
                altPrefix="Vanitory"
            />


        </section>

    );

}


export default Vanitory;