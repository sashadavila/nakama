import leo from "../assets/founders/leo.jpeg";
import dario from "../assets/founders/dario.jpeg";

function Philosophy() {
    return (
        <section id="nosotros" className="philosophy">
            <div className="foundersImages">
                <div className="founderPhoto">
                    <img src={leo} alt="Leo fundador Nakama" />
                    <span>Leo</span>
                </div>

                <div className="founderPhoto">
                    <img src={dario} alt="Dario fundador Nakama" />
                    <span>Dario</span>
                </div>
            </div>

            <div className="philosophyContent">
                <h2>FILOSOFÍA</h2>

                <p>
                    Nakama significa colega, compañero o amigo. Evoca un vínculo profundo,
                    basado en la confianza, la colaboración y un verdadero sentido de pertenencia.
                    Esa es, exactamente nuestra historia.
                    Somos Leo y Dario, los fundadores y socios detrás de este proyecto, somos
                    nakamas de la vida.
                </p>

                <p>
                    Nuestra marca nació de esa misma sinergia: una amistad sólida, el respeto por
                    el diseño y la convicción de que los grandes proyectos se construyen en
                    equipo. De la unión de la visión de ambos, de la pasión por los detalles y del
                    compromiso con el cliente, se formó el pilar de lo que hoy es Nakama.
                </p>
            </div>
        </section>
    );
}

export default Philosophy;