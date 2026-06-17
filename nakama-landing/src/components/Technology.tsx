import corte1 from "../assets/images/corte.png";
import corte2 from "../assets/images/corte (2).png";
import cnc1 from "../assets/images/cnc.png";
import cnc2 from "../assets/images/cnc (2).png";
import laqueado1 from "../assets/images/laqueado1.png";
import laqueado2 from "../assets/images/laqueado (2).png";

const processes = [
  {
    title: "Tecnología en fabricación",
    images: [corte1, corte2],
    text: "Disponemos de tecnología de manufactura de alta precisión para el dimensionado, perfilado y mecanizado de piezas, combinada con el profesionalismo técnico necesario para lograr estándares de alta calidad.",
  },
  {
    title: "CNC",
    images: [cnc1, cnc2],
    text: "Tecnología al servicio del detalle. Desarrollamos cortes de alta complejidad, grabados texturizados y mecanizados singulares sobre diversos materiales, utilizando sistemas automatizados láser y de fresado que garantizan una pureza de líneas inigualable.",
  },
  {
    title: "Laqueado",
    images: [laqueado1, laqueado2],
    text: "Tratamos la madera con lustres artesanales de nivel profesional y laqueados de alta resistencia, disponibles en una sofisticada paleta de acabados y matices cromáticos completamente personalizados.",
  },
];

function Technology() {
  return (
    <section className="technology">
      <h2>NUESTROS PROCESOS</h2>

      <div className="technologyGrid">
        {processes.map((item) => (
          <article className="technologyCard" key={item.title}>
            <img
              className="technologyImage baseImage"
              src={item.images[0]}
              alt={item.title}
            />

            <img
              className="technologyImage hoverImage"
              src={item.images[1]}
              alt={item.title}
            />

            <div className="technologyOverlay">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Technology;