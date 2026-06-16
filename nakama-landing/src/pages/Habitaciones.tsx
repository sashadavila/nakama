import "./gallery.css";


import dormitorio1 from "../assets/coleccion/placard-habitaciones/dormitorio1.jpeg";
import dormitorio2 from "../assets/coleccion/placard-habitaciones/dormitorio2.jpeg";
import dormitorio3 from "../assets/coleccion/placard-habitaciones/dormitorio3.jpeg";
import dormitorio4 from "../assets/coleccion/placard-habitaciones/dormitorio4.jpeg";
import dormitorio5 from "../assets/coleccion/placard-habitaciones/dormitorio5.jpeg";
import dormitorio6 from "../assets/coleccion/placard-habitaciones/dormitorio6.jpeg";
import dormitorio7 from "../assets/coleccion/placard-habitaciones/dormitorio7.jpeg";
import dormitorio8 from "../assets/coleccion/placard-habitaciones/dormitorio8.jpeg";
import dormitorio9 from "../assets/coleccion/placard-habitaciones/dormitorio9.jpeg";
import dormitorio10 from "../assets/coleccion/placard-habitaciones/dormitorio10.jpeg";
import dormitorio11 from "../assets/coleccion/placard-habitaciones/dormitorio11.jpeg";
import dormitorio12 from "../assets/coleccion/placard-habitaciones/dormitorio12.jpeg";
import dormitorio13 from "../assets/coleccion/placard-habitaciones/dormitorio13.jpeg";
import dormitorio14 from "../assets/coleccion/placard-habitaciones/dormitorio14.jpeg";
import dormitorio15 from "../assets/coleccion/placard-habitaciones/dormitorio15.jpeg";
import dormitorio16 from "../assets/coleccion/placard-habitaciones/dormitorio16.jpeg";


const images = [
    dormitorio1,
    dormitorio2,
    dormitorio3,
    dormitorio4,
    dormitorio5,
    dormitorio6,
    dormitorio7,
    dormitorio8,
    dormitorio9,
    dormitorio10,
    dormitorio11,
    dormitorio12,
    dormitorio13,
    dormitorio14,
    dormitorio15,
    dormitorio16,
];


function Habitaciones() {

    return (

        <section className="galleryPage">

            <h1>
                HABITACIONES
            </h1>


            <div className="galleryGrid">

                {
                    images.map((image, index) => (

                        <div
                            className="galleryItem"
                            key={index}
                        >

                            <img
                                src={image}
                                alt={`Habitación ${index + 1}`}
                            />

                        </div>

                    ))
                }

            </div>


        </section>

    );

}


export default Habitaciones;