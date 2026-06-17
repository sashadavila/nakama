import { useState } from "react";

import cocinaImg from "../assets/coleccion/cocina/cocina1-1.jpeg";
import playroomImg from "../assets/coleccion/playroom/playroom (1).jpeg";
import placardImg from "../assets/coleccion/placard-habitaciones/placard1.jpeg";
import habitacionImg from "../assets/coleccion/placard-habitaciones/dormitorio1.jpeg";


const projects = [
    {
        id: 1,
        title: "Playroom",
        link: "/playroom",
        images: [
            playroomImg,
        ],
    },

    {
        id: 2,
        title: "Cocinas",
        link: "/cocinas",
        images: [
            cocinaImg,
        ],
    },

    {
        id: 3,
        title: "Placards",
        link: "/placards",
        images: [
            placardImg,
        ],
    },

    {
        id: 4,
        title: "Dormitorios",
        link: "/dormitorios",
        images: [
            habitacionImg,
        ],
    },
];


function Projects() {


    const [currentImages, setCurrentImages] = useState(
        projects.map(() => 0)
    );



    const nextImage = (
        e: React.MouseEvent,
        index: number
    ) => {

        e.preventDefault();
        e.stopPropagation();


        setCurrentImages(prev => {

            const copy = [...prev];

            copy[index] =
                (copy[index] + 1)
                %
                projects[index].images.length;

            return copy;

        });

    };



    const prevImage = (
        e: React.MouseEvent,
        index: number
    ) => {


        e.preventDefault();
        e.stopPropagation();


        setCurrentImages(prev => {

            const copy = [...prev];

            copy[index] =
                copy[index] === 0
                    ? projects[index].images.length - 1
                    : copy[index] - 1;


            return copy;

        });

    };



    return (


        <section
            id="proyectos"
            className="projects"
        >


            <h2>COLECCIÓN</h2>



            <div className="projectsGrid">


                {
                    projects.map((project, index) => (


                        <a
                            href={project.link}
                            className="projectCard"
                            key={project.id}
                        >


                            <img
                                src={
                                    project.images[
                                        currentImages[index]
                                    ]
                                }

                                alt={project.title}
                            />



                            <button
                                className="arrow left"
                                onClick={(e) =>
                                    prevImage(e, index)
                                }
                            >
                                ‹
                            </button>



                            <button
                                className="arrow right"
                                onClick={(e) =>
                                    nextImage(e, index)
                                }
                            >
                                ›
                            </button>



                            <div className="projectOverlay">

                                <p>
                                    {project.title}
                                </p>

                            </div>



                        </a>


                    ))
                }



            </div>


        </section>


    );

}


export default Projects;