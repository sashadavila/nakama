import "./gallery.css";
import GalleryLightbox from "../components/GalleryLightbox";


const rackImages = import.meta.glob(
    "../assets/coleccion/rackdetv/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
    {
        eager: true,
        import: "default",
    }
) as Record<string, string>;


const images = Object.entries(rackImages)
    .sort(([a], [b]) =>
        a.localeCompare(b, undefined, { numeric: true })
    )
    .map(([, src]) => src);



function RackDeTv() {

    return (

        <section className="galleryPage">

            <h1>
                RACK DE TV
            </h1>


            <GalleryLightbox
                images={images}
                altPrefix="Rack de TV"
            />


        </section>

    );

}


export default RackDeTv;