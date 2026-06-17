import logo from "../assets/images/nakama-logo.svg";


function Navbar() {

    return (

        <header className="navbar">


            <a 
                href="/" 
                className="logo"
            >

                <img
                    src={logo}
                    alt="Nakama"
                />

            </a>



            <nav>

                <a href="#proyectos">
                    COLECCIÓN
                </a>


                <a href="#nosotros">
                    FILOSOFÍA
                </a>


                <a href="#trabajamos">
                    CÓMO TRABAJAMOS
                </a>


                <a href="#contacto">
                    CONTACTO
                </a>


            </nav>


        </header>

    );

}


export default Navbar;