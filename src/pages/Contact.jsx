import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

const Contact = () => {
    return(
          <>
            <header>
                <Navbar />
            </header>
            <main>
                <div>
                    <h2>me contacter</h2>
                    <span>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</span>
                </div>
                <div>
                    <h3>Formulaire de contact</h3>
                    <form action="#" method="post">
                        <input type="text" placeholder="Votre nom"/>
                        <input type="email" placeholder="Votre adresse e-mail"/>
                        <input type="tel" placeholder="Votre numéro de téléphone"/>
                        <input type="text" placeholder="Sujet"/>
                        <textarea name="user_message" id="msg" placeholder="Votre message"></textarea>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
                <div>
                    <h3>Mes coordonées</h3>
                    <div>
                        <img src="../public/icon/location-dot-solid.svg" alt="Icon de localisation" className="icon"/>
                        <span> 40 Rue Laure Diebold, 69009 Lyon, France</span>
                    </div>
                    <div>
                        <img src="../public/icon/mobile-screen-button-solid.svg" alt="Icon de téléphone portable" className="icon"/>
                        <span> 06 20 30 40 50</span>
                    </div>
                    <img src="../public/img/Capture-Lyon.jpg" alt="Plan google maps de l'adresse 40 rue Laure Diebold Lyon" />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
          </>  
    )
}

export default Contact;