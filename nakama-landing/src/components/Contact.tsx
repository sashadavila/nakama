import { useState } from "react";


function Contact() {

    const [sent, setSent] = useState(false);


    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault();


        const form = e.currentTarget;

        const data = new FormData(form);


        await fetch(
            "https://formsubmit.co/ajax/Info@mobiliariosnakama.com",
            {
                method: "POST",
                body: data,
            }
        );


        setSent(true);

        form.reset();


        setTimeout(() => {
            setSent(false);
        }, 4000);

    };


    return (

        <section id="contacto" className="contactSection">


            <div className="contactContent">


                <span>
                    HABLEMOS DE TU PROYECTO
                </span>


                <h2>
                    CONTACTO
                </h2>


                <p>
                    Contanos qué querés construir, diseñar o materializar.
                    En Nakama podemos ayudarte a transformar una idea
                    en un mueble único.
                </p>



                <form
                    onSubmit={handleSubmit}
                    className="contactForm"
                >


                    <input
                        type="text"
                        name="Nombre"
                        placeholder="Nombre"
                        required
                    />


                    <input
                        type="email"
                        name="Email"
                        placeholder="Correo electrónico"
                        required
                    />


                    <input
                        type="tel"
                        name="Telefono"
                        placeholder="Teléfono"
                    />


                    <textarea
                        name="Consulta"
                        placeholder="Contanos sobre tu proyecto"
                        required
                    />


                    <input
                        type="hidden"
                        name="_subject"
                        value="Nueva consulta desde la web Nakama"
                    />


                    <button
                        type="submit"
                        className="primaryButton"
                    >

                        ENVIAR CONSULTA

                    </button>


                    {sent && (

                        <p className="successMessage">
                            Consulta enviada correctamente.
                        </p>

                    )}


                </form>



                <div className="contactButtons">


                    <a
                        href="https://wa.me/5491135566477"
                        target="_blank"
                        rel="noreferrer"
                        className="primaryButton"
                    >

                        ESCRIBIR POR WHATSAPP

                    </a>


                    <a
                        href="mailto:Info@mobiliariosnakama.com"
                        className="secondaryButton"
                    >

                        ENVIAR EMAIL

                    </a>


                </div>


            </div>



            <a
                href="https://wa.me/5491135566477"
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