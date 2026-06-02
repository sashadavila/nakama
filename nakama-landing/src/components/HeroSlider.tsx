import { useEffect, useState } from "react";

const images = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
];


function HeroSlider() {

    const [currentImage, setCurrentImage] = useState(0);


    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentImage((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );

        }, 2000);


        return () => clearInterval(interval);

    }, []);



    return (

        <>


            <section
                className="hero"
                style={{
                    backgroundImage: `url(${images[currentImage]})`
                }}
            />


            <section className="intro">

                <h1>
                    Desarrollamos muebles a medida que convierten tu visión
                    en una experiencia única.
                </h1>


                <p>
                    Materializamos la excelencia en cada detalle, con precisión,
                    innovación y tecnología de fabricación de última generación.
                </p>


                <p>
                    Cada proyecto es único, nuestra misión es superar tus expectativas
                    al lograr el espacio soñado.
                </p>


            </section>


        </>

    )

}


export default HeroSlider;