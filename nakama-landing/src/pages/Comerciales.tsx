import "./gallery.css";

import comercial1 from "../assets/coleccion/placard-habitaciones/comercial1.jpeg";
import comercial2 from "../assets/coleccion/placard-habitaciones/comercial2.jpeg";
import comercial3 from "../assets/coleccion/placard-habitaciones/comercial3.jpeg";
import comercial4 from "../assets/coleccion/placard-habitaciones/comercial4.jpeg";
import comercial5 from "../assets/coleccion/placard-habitaciones/comercial5.jpeg";
import comercial6 from "../assets/coleccion/placard-habitaciones/comercial6.jpeg";
import comercial7 from "../assets/coleccion/placard-habitaciones/comercial7.jpeg";
import comercial8 from "../assets/coleccion/placard-habitaciones/comercial8.jpeg";
import comercial9 from "../assets/coleccion/placard-habitaciones/comercial9.jpeg";
import comercial10 from "../assets/coleccion/placard-habitaciones/comercial10.jpeg";
import comercial11 from "../assets/coleccion/placard-habitaciones/comercial11.jpeg";
import comercial12 from "../assets/coleccion/placard-habitaciones/comercial12.jpeg";
import comercial13 from "../assets/coleccion/placard-habitaciones/comercial13.jpeg";
import comercial14 from "../assets/coleccion/placard-habitaciones/comercial14.jpeg";
import comercial15 from "../assets/coleccion/placard-habitaciones/comercial15.jpeg";
import comercial16 from "../assets/coleccion/placard-habitaciones/comercial16.jpeg";
import comercial17 from "../assets/coleccion/placard-habitaciones/comercial17.jpeg";
import comercial18 from "../assets/coleccion/placard-habitaciones/comercial18.jpeg";

const images = [
    comercial1,
    comercial2,
    comercial3,
    comercial4,
    comercial5,
    comercial6,
    comercial7,
    comercial8,
    comercial9,
    comercial10,
    comercial11,
    comercial12,
    comercial13,
    comercial14,
    comercial15,
    comercial16,
    comercial17,
    comercial18,
];

function Comerciales() {
    return (
        <section className="galleryPage">
            <h1>COMERCIALES</h1>

            <div className="galleryGrid">
                {images.map((image, index) => (
                    <div className="galleryItem" key={index}>
                        <img src={image} alt={`Comercial ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Comerciales;