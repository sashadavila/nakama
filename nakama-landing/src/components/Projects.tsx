const projects = [
    {
        id: 1,
        image: "/images/project-1.jpg",
        title: "Diseño residencial",
    },

    {
        id: 2,
        image: "/images/project-2.jpg",
        title: "Mobiliario a medida",
    },

    {
        id: 3,
        image: "/images/project-3.jpg",
        title: "Espacios corporativos",
    },
];


function Projects() {

    return (

        <section
            id="proyectos"
            className="projects"
        >

            <h2>PROYECTOS</h2>


            <div className="projectsGrid">


                {
                    projects.map((project) => (

                        <div
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


                        </div>

                    ))
                }


            </div>


            <button className="btn">
                VER MÁS
            </button>


        </section>

    );

}


export default Projects;