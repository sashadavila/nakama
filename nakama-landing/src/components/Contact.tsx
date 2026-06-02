function Contact() {
    return (
        <section id="contacto" className="contactSection">
            <div className="contactContent">
                <span>HABLEMOS DE TU PROYECTO</span>

                <h2>CONTACTO</h2>

                <p>
                    Contanos qué querés construir, diseñar o materializar. En Nakama
                    podemos ayudarte a transformar una idea en un mueble único.
                </p>

                <div className="contactButtons">
                    <a
                        href="https://wa.me/549XXXXXXXXXX"
                        target="_blank"
                        rel="noreferrer"
                        className="primaryButton"
                    >
                        ESCRIBIR POR WHATSAPP
                    </a>

                    <a href="mailto:contacto@nakama.com" className="secondaryButton">
                        ENVIAR EMAIL
                    </a>
                </div>
            </div>

            <a
                href="https://wa.me/549XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="whatsappFloat"
            >
                WhatsApp
            </a>
        </section>
    );
}

export default Contact;