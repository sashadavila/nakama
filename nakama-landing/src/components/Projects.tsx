import { useState } from "react";

import cocinaImg from "../assets/coleccion/cocina/cocinaportada.jpeg";
import playroomImg from "../assets/coleccion/playroom/PlayRoomsportada.jpeg";
import placardImg from "../assets/coleccion/placard-habitaciones/Vestidoresportada.jpeg";
import dormitorioImg from "../assets/coleccion/placard-habitaciones/dormitorioportada.jpeg";
import comercialesImg from "../assets/coleccion/comerciales/comerciales.jpg";
import vanitoyImg from "../assets/coleccion/vanitory/Vanitoryportada.jpeg";


const mainProjects = [

    {
        id:1,
        title:"Mobiliario de cocina",
        link:"/cocinas",
        image:cocinaImg,
    },

    {
        id:2,
        title:"Placares / Vestidores",
        link:"/placards",
        image:placardImg,
    },

    {
        id:3,
        title:"Play room",
        link:"/playroom",
        image:playroomImg,
    },

];



const extraProjects = [

    {
        id:4,
        title:"Dormitorios",
        link:"/habitaciones",
        image:dormitorioImg,
    },

    {
        id:5,
        title:"Comerciales",
        link:"/comerciales",
        image:comercialesImg,
    },

    {
        id:6,
        title:"Vanitori",
        link:"#",
        image:vanitoyImg,
    },

];



function Projects() {


    const [showMore, setShowMore] = useState(false);


    const projects = showMore
        ? [...mainProjects, ...extraProjects]
        : mainProjects;



    return (

        <section
            id="proyectos"
            className="projects"
        >


            <h2>
                COLECCIÓN
            </h2>



            <div className="projectsGrid">


                {
                    projects.map((project)=>(


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

                                <p>
                                    {project.title}
                                </p>

                            </div>


                        </a>


                    ))
                }


            </div>



            <button
                className="btn"
                onClick={() => setShowMore(!showMore)}
            >

                {
                    showMore
                    ? "VER MENOS"
                    : "VER MÁS"
                }

            </button>


        </section>

    );

}


export default Projects;