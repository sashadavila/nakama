import "./gallery.css";
import GalleryLightbox from "../components/GalleryLightbox";


import vanitory1 from "../assets/coleccion/vanitory/Vanitory 1.jpg";
import vanitory2 from "../assets/coleccion/vanitory/Vanitory 2.png";
import vanitory3 from "../assets/coleccion/vanitory/Vanitory 3 (1).png";
import vanitory4 from "../assets/coleccion/vanitory/Vanitory 3.jpg";
import vanitory5 from "../assets/coleccion/vanitory/Vanitory 3.png";
import vanitory6 from "../assets/coleccion/vanitory/Vanitory 4.png";
import vanitory7 from "../assets/coleccion/vanitory/Vanitory 5.jpg";
import vanitory8 from "../assets/coleccion/vanitory/Vanitory 6.jpg";
import vanitory9 from "../assets/coleccion/vanitory/Vanitory 7.jpg";


const images = [
    vanitory1,
    vanitory2,
    vanitory3,
    vanitory4,
    vanitory5,
    vanitory6,
    vanitory7,
    vanitory8,
    vanitory9,
];


function Vanitory() {

    return (

        <section className="galleryPage">

            <h1>VANITORY</h1>


            <GalleryLightbox
                images={images}
                altPrefix="Vanitory"
            />


        </section>

    );

}


export default Vanitory;