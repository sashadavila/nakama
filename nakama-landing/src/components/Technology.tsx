const technologies = [
    {
        id: 1,
        title: "Corte",
        image: "/images/corte.jpg",
        text:
            "Procesos de corte precisos utilizando equipamiento profesional para lograr terminaciones de alta calidad.",
    },

    {
        id: 2,
        title: "CNC",
        image: "/images/cnc.jpg",
        text:
            "Mecanizado y perforado de piezas mediante tecnología CNC para obtener precisión en cada detalle.",
    },

    {
        id: 3,
        title: "Laqueado",
        image: "/images/laqueado.jpg",
        text:
            "Terminaciones mate, semimate y brillante en laca color, blanca y transparente.",
    },

    {
        id: 4,
        title: "Armado",
        image: "/images/armado.jpg",
        text:
            "Cada pieza es ensamblada cuidando estructura, estética y funcionalidad.",
    },

    {
        id: 5,
        title: "Instalación",
        image: "/images/instalacion.jpg",
        text:
            "Realizamos la instalación final garantizando precisión y terminaciones profesionales.",
    },
];


function Technology() {

    return (

        <section className="technology">

            <h2>
                TECNOLOGÍA EN FABRICACIÓN
            </h2>


            <div className="technologyGrid">


                {technologies.map((item) => (


                    <article
                        className="technologyCard"
                        key={item.id}
                    >

                        <img
                            src={item.image}
                            alt={item.title}
                        />


                        <div>

                            <h3>
                                {item.title}
                            </h3>


                            <p>
                                {item.text}
                            </p>


                        </div>


                    </article>


                ))}


            </div>


        </section>


    )

}


export default Technology;