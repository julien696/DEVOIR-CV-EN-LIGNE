import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

const Service = () => {
    return(
        <>
         <header>
                <Navbar />
                <div>
                    <img src="../public/img/banner.jpg" alt="banner théme bleu et lumiére" />
                </div>
           </header>
           <main>
                <h2>MON OFFRE DE SERVICES</h2>
                <span>Voici les prestations sur lesquelles je peus intervenir.</span>
                <div>
                    <section>
                        <img src="../public/icon/display-solid.svg" alt="icon d'un ordinateur." className="iconservice"/>
                        <h3>UX DESIGN</h3>
                        <p>
                            L'<strong>UX Design </strong>est une méthode de conception centrée sur l'utilisateur.
                         Son but est d'offrir une expérience de navigation optimale à l'internaute.
                        </p>
                    </section>
                    <section>
                        <img src="../public/icon/file-code-solid.svg" alt="icon d'un fichier." className="iconservice"/>
                        <h3>développement web</h3>
                        <p>
                            Le<strong> développement des sites web </strong>repose sur l'utilisation des langages
                             HTML, CSS, JavaScript et PHP.
                        </p>
                    </section>
                    <section>
                        <img src="../public/icon/magnifying-glass-dollar-solid.svg" alt="icon d'une loupe avec le signe du dollar à l'intérieur." className="iconservice"/>
                        <h3>référencement</h3>
                        <p>Le<strong> référencement naturel d'un site, </strong>aussi appelé SEO, consiste à mettre
                         des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>
                    </section>
                </div>
           </main>
           <footer>
                <Footer />
           </footer>
        </>
    )
}

export default Service;