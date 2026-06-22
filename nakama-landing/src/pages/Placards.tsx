import "./gallery.css";
import GalleryLightbox from "../components/GalleryLightbox";


import placard1 from "../assets/coleccion/placard-habitaciones/placard1.jpeg";
import placard2 from "../assets/coleccion/placard-habitaciones/placard (2).jpeg";
import placard3 from "../assets/coleccion/placard-habitaciones/placard (3).jpeg";
import placard4 from "../assets/coleccion/placard-habitaciones/placard (4).jpeg";
import placard5 from "../assets/coleccion/placard-habitaciones/placard (5).jpeg";
import placard6 from "../assets/coleccion/placard-habitaciones/placard (6).jpeg";
import placard7 from "../assets/coleccion/placard-habitaciones/placard (7).jpeg";
import placard8 from "../assets/coleccion/placard-habitaciones/placard (8).jpeg";
import placard9 from "../assets/coleccion/placard-habitaciones/placard (9).jpeg";
import placard10 from "../assets/coleccion/placard-habitaciones/placard (10).jpeg";


const images = [
    placard1,
    placard2,
    placard3,
    placard4,
    placard5,
    placard6,
    placard7,
    placard8,
    placard9,
    placard10,
];


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