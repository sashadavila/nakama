import "./gallery.css";
import GalleryLightbox from "../components/GalleryLightbox";


import cocina1 from "../assets/coleccion/cocina/4.jpeg";

import cocina2 from "../assets/coleccion/cocina/cocina1-1.jpeg";
import cocina3 from "../assets/coleccion/cocina/cocina1-2.jpeg";
import cocina4 from "../assets/coleccion/cocina/cocina1-3.jpeg";
import cocina5 from "../assets/coleccion/cocina/cocina1-4.jpeg";
import cocina6 from "../assets/coleccion/cocina/cocina1-5.jpeg";
import cocina7 from "../assets/coleccion/cocina/cocina1-6.jpeg";

import cocina8 from "../assets/coleccion/cocina/cocina2-1.jpg";
import cocina9 from "../assets/coleccion/cocina/cocina2-2.jpg";
import cocina10 from "../assets/coleccion/cocina/cocina2-3.jpg";
import cocina11 from "../assets/coleccion/cocina/cocina2-4.jpg";
import cocina12 from "../assets/coleccion/cocina/cocina2-5.jpg";


const images = [
    cocina1,
    cocina2,
    cocina3,
    cocina4,
    cocina5,
    cocina6,
    cocina7,
    cocina8,
    cocina9,
    cocina10,
    cocina11,
    cocina12,
];


function Cocinas() {

    return (

        <section className="galleryPage">

            <h1>
                COCINAS
            </h1>


            <GalleryLightbox
                images={images}
                altPrefix="Cocina"
            />


        </section>

    );

}


export default Cocinas;