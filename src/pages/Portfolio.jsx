import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

const Portfolio = () => {
    return(
        <>
           <header>
                <Navbar />
                <div>
                    <img src="../public/img/banner.jpg" alt="banner théme bleu et lumiére" />
                </div>
           </header>
           <main>
                <h2>PORTFOLIO</h2>
                <span>Voici quelques-unes de mes réalisations</span>
                <div>
                    <section>
                        <div>
                            <img src="../public/portfolio/fresh-food.jpg" alt="Image représentant un panier de légume frais" />
                            <h3>Fresh food</h3>
                            <span>Réalisation d'un site avec commande en ligne.</span>
                            <button type="button" class="btn btn-outline-primary">Voir</button>
                        </div>
                        <span>Site réalisé avec PHP et MySQL</span>
                    </section>
                    <section>
                        <div>
                            <img src="../public/portfolio/restaurant-japonais.jpg" alt="Image représentant des sushis et des makis" />
                            <h3>Restaurant Akira</h3>
                            <span>Réalisation d'un site vitrine.</span>
                            <button type="button" class="btn btn-outline-primary">Voir</button>
                        </div>
                        <span>Site réalisé avec WordPress</span>
                    </section>
                    <section>
                        <div>
                            <img src="../public/portfolio/espace-bien-etre.jpg" alt="Image représentant un bouddha une fleur de lotus et des pierres d'équilibre zen." />
                            <h3>Espace bien-être</h3>
                            <span>Réalisation d'un site vitrine pour un praticien de bien-être.</span>
                            <button type="button" class="btn btn-outline-primary">Voir</button>
                        </div>
                        <span>Site réalisé en HTML/CSS</span>
                    </section>
                </div>
           </main>
           <footer>
                <Footer />
           </footer>
            
        </>
    )
}

export default Portfolio;