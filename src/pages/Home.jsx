import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

const Home = () => {
    return(
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section>
                    <div>
                        <h1>Bonjour, je suis John Doe</h1>
                        <h2>Développeur web full stack</h2>
                        <button type="button" class="btn btn-primary">En savoir plus</button>
                    </div>
                </section>
                <section>
                    <article>
                        <h3>à propos</h3>
                        <p>Passioné par l'informatique et les nouvelles technologies,
                            j'ai suivi une formation d'<strong>intégrateur-développeur web </strong>
                            au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides
                             pour travailler dans le domaine du <strong>développement web</strong>.
                        </p>
                        <p>
                            Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour 
                            consolider ma formation de <strong>développeur web full stack</strong>.
                        </p>
                        <p>
                            J'accorde une attention particulière à la qualité du code que j'écris et 
                            je respecte les bonnes pratiques du web.
                        </p>
                    </article>
                    <div>
                        <img src="../../public/img/about.jpg" alt="Photo de profil de John Doe" />
                        <h4>Mes compétences</h4>
                            <div>
                                <span>HTML5 90%</span>
                                <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-danger w-90" style={{width:'90%'}}></div>
                                </div>
                                <span>CSS3 80%</span>
                                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-info" style={{width:'80%'}}></div>
                                </div>
                                <span>JAVASCRIPT 70%</span>
                                <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-warning" style={{width:'70%'}}></div>
                                </div>
                                <span>PHP 60%</span>
                                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-success" style={{width:'25%'}}></div>
                                </div>
                                <span>REACT 50%</span>
                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-basic" style={{width:'50%'}}></div>
                                </div>
                            </div>
                    </div>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
       </>
    )
}

export default Home;