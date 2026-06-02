const steps = [
    {
        number: "01",
        title: "Reunión y relevamiento",
        text: "Escuchamos la idea, analizamos el espacio y definimos las necesidades del proyecto.",
    },
    {
        number: "02",
        title: "Diseño y documentación técnica",
        text: "Desarrollamos la propuesta, planos, renders o documentación necesaria para avanzar.",
    },
    {
        number: "03",
        title: "Fabricación",
        text: "Construimos cada pieza con precisión, seleccionando materiales y terminaciones adecuadas.",
    },
    {
        number: "04",
        title: "Instalación",
        text: "Realizamos la colocación final cuidando cada detalle para lograr una terminación profesional.",
    },
];

function Process() {
    return (
        <section id="trabajamos" className="process">
            <div className="processHeader">
                <span>NUESTRO PROCESO</span>
                <h2>CÓMO TRABAJAMOS</h2>
                <p>
                    Acompañamos cada proyecto desde la idea inicial hasta la instalación
                    final, cuidando la técnica, la estética y la funcionalidad.
                </p>
            </div>

            <div className="processGrid">
                {steps.map((step) => (
                    <article className="processCard" key={step.number}>
                        <span>{step.number}</span>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Process;