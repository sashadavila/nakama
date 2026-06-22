import "./gallery.css";
import GalleryLightbox from "../components/GalleryLightbox";


const playroomImages = import.meta.glob(
    "../assets/coleccion/playroom/*.{jpg,jpeg,png,webp}",
    {
        eager: true,
        import: "default",
    }
) as Record<string, string>;


const images = Object.entries(playroomImages)
    .sort(([a], [b]) =>
        a.localeCompare(b, undefined, { numeric: true })
    )
    .map(([, src]) => src);



function Playroom() {

    return (

        <section className="galleryPage">

            <h1>
                PLAY ROOM
            </h1>


            <GalleryLightbox
                images={images}
                altPrefix="Playroom"
            />


        </section>

    );

}


export default Playroom;