import "./gallery.css";


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
import placard11 from "../assets/coleccion/placard-habitaciones/placard (11).jpeg";
import placard12 from "../assets/coleccion/placard-habitaciones/placard (12).jpeg";
import placard13 from "../assets/coleccion/placard-habitaciones/placard (13).jpeg";
import placard14 from "../assets/coleccion/placard-habitaciones/placard (14).jpeg";
import placard15 from "../assets/coleccion/placard-habitaciones/placard (15).jpeg";
import placard16 from "../assets/coleccion/placard-habitaciones/placard (16).jpeg";
import placard17 from "../assets/coleccion/placard-habitaciones/placard (17).jpeg";
import placard18 from "../assets/coleccion/placard-habitaciones/placard (18).jpeg";
import placard19 from "../assets/coleccion/placard-habitaciones/placard (19).jpeg";
import placard20 from "../assets/coleccion/placard-habitaciones/placard (20).jpeg";
import placard21 from "../assets/coleccion/placard-habitaciones/placard (21).jpeg";
import placard22 from "../assets/coleccion/placard-habitaciones/placard (22).jpeg";
import placard23 from "../assets/coleccion/placard-habitaciones/placard (23).jpeg";
import placard24 from "../assets/coleccion/placard-habitaciones/placard (24).jpeg";
import placard25 from "../assets/coleccion/placard-habitaciones/placard (25).jpeg";
import placard26 from "../assets/coleccion/placard-habitaciones/placard (26).jpeg";
import placard27 from "../assets/coleccion/placard-habitaciones/placard (27).jpeg";
import placard28 from "../assets/coleccion/placard-habitaciones/placard (28).jpeg";
import placard29 from "../assets/coleccion/placard-habitaciones/placard (29).jpeg";
import placard30 from "../assets/coleccion/placard-habitaciones/placard (30).jpeg";


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
    placard11,
    placard12,
    placard13,
    placard14,
    placard15,
    placard16,
    placard17,
    placard18,
    placard19,
    placard20,
    placard21,
    placard22,
    placard23,
    placard24,
    placard25,
    placard26,
    placard27,
    placard28,
    placard29,
    placard30,
];


function Placards() {

    return (

        <section className="galleryPage">

            <h1>
                PLACARDS
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
                                alt={`Placard ${index + 1}`}
                            />

                        </div>

                    ))

                }

            </div>


        </section>

    );

}


export default Placards;