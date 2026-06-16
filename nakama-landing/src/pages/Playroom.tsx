import "./gallery.css";

import play1 from "../assets/coleccion/playroom/playroom (1).jpeg";
import play2 from "../assets/coleccion/playroom/playroom (2).jpeg";
import play3 from "../assets/coleccion/playroom/playroom (3).jpeg";
import play4 from "../assets/coleccion/playroom/playroom (4).jpeg";
import play5 from "../assets/coleccion/playroom/playroom (5).jpeg";
import play6 from "../assets/coleccion/playroom/playroom (6).jpeg";
import play7 from "../assets/coleccion/playroom/playroom (7).jpeg";
import play8 from "../assets/coleccion/playroom/playroom (8).jpeg";
import play9 from "../assets/coleccion/playroom/playroom (9).jpeg";
import play10 from "../assets/coleccion/playroom/playroom (10).jpeg";
import play11 from "../assets/coleccion/playroom/playroom (11).jpeg";
import play12 from "../assets/coleccion/playroom/playroom (12).jpeg";
import play13 from "../assets/coleccion/playroom/playroom (13).jpeg";
import play14 from "../assets/coleccion/playroom/playroom (14).jpeg";
import play15 from "../assets/coleccion/playroom/playroom (15).jpeg";
import play16 from "../assets/coleccion/playroom/playroom (16).jpeg";


const images = [
    play1,
    play2,
    play3,
    play4,
    play5,
    play6,
    play7,
    play8,
    play9,
    play10,
    play11,
    play12,
    play13,
    play14,
    play15,
    play16,
];


function Playroom() {

    return (

        <section className="galleryPage">

            <h1>
                PLAYROOM
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
                                alt={`Playroom ${index + 1}`}
                            />

                        </div>

                    ))
                }

            </div>


        </section>

    );

}


export default Playroom;