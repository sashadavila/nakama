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

        }, 3000);

        return () => clearInterval(interval);

    }, []);

    return (

        <>

            <section
                className="hero"
                style={{
                    backgroundImage: `url(${images[currentImage]})`,
                }}
            />

            <section className="intro">

                <h1>
                    Desarrollamos mobiliarios a medida con identidad,
                    dándole vida a tu visión.
                </h1>

                <p>
                    Combinamos precisión artesanal e innovación tecnológica
                    para cuidar cada detalle.
                </p>

                <p>
                    Creamos espacios únicos. Nuestra meta es superar lo que
                    imaginaste y materializar el entorno de tus sueños.
                </p>

            </section>

        </>

    );

}

export default HeroSlider;