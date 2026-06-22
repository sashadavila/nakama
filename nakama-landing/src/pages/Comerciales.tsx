import "./gallery.css";
import GalleryLightbox from "../components/GalleryLightbox";


const comercialImages = import.meta.glob(
    "../assets/coleccion/comerciales/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    {
        eager: true,
        import: "default",
    }
) as Record<string, string>;


const images = Object.entries(comercialImages)
    .sort(([a], [b]) =>
        a.localeCompare(b, undefined, { numeric: true })
    )
    .map(([, src]) => src);



function Comerciales() {

    return (

        <section className="galleryPage">

            <h1>
                COMERCIALES
            </h1>


            <GalleryLightbox
                images={images}
                altPrefix="Comercial"
            />


        </section>

    );

}


export default Comerciales;