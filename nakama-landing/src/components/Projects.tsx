import { useState } from "react";

import cocinaImg from "../assets/coleccion/cocina/cocinaportada.jpeg";
import placardImg from "../assets/coleccion/placard/Vestidoresportada.jpeg";
import dormitorioImg from "../assets/coleccion/habitaciones/dormitorioportada.jpeg";
import playroomImg from "../assets/coleccion/playroom/PlayRoomsportada.jpeg";
import rackImg from "../assets/coleccion/rackdetv/Rack TV0.jpg";
import vanitoryImg from "../assets/coleccion/vanitory/Vanitoryportada.jpeg";


const mainProjects = [
    {
        id: 1,
        title: "Mobiliario de cocina",
        link: "/cocinas",
        image: cocinaImg,
    },
    {
        id: 2,
        title: "Placares / Vestidores",
        link: "/placards",
        image: placardImg,
    },
    {
        id: 3,
        title: "Dormitorios",
        link: "/habitaciones",
        image: dormitorioImg,
    },
];


const extraProjects = [
    {
        id: 4,
        title: "Play room",
        link: "/playroom",
        image: playroomImg,
    },
    {
        id: 5,
        title: "Rack de TV",
        link: "/rack-de-tv",
        image: rackImg,
    },
    {
        id: 6,
        title: "Vanitory",
        link: "/vanitory",
        image: vanitoryImg,
    },

];


function Projects() {
    const [showMore, setShowMore] = useState(false);

    const projects = showMore
        ? [...mainProjects, ...extraProjects]
        : mainProjects;

    return (
        <section id="proyectos" className="projects">
            <h2>COLECCIÓN</h2>

            <div className="projectsGrid">
                {projects.map((project) => (
                    <a
                        href={project.link}
                        className="projectCard"
                        key={project.id}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                        />

                        <div className="projectOverlay">
                            <p>{project.title}</p>
                        </div>
                    </a>
                ))}
            </div>

            <button
                className="btn"
                onClick={() => setShowMore(!showMore)}
            >
                {showMore ? "VER MENOS" : "VER MÁS"}
            </button>
        </section>
    );
}

export default Projects;