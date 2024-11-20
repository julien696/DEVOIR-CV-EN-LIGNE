import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

const Home = () => {
    return(
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="d-flex flex-column justify-content-center align-items-center container-first-title" >
                    <h1 className="m-2 p-2 text-light first-title">Bonjour, je suis John Doe</h1>
                    <h2 className="mb-2 p-2 text-light ">Développeur web full stack</h2>
                    <button type="button" className="btn btn-primary">En savoir plus</button>
                </div>
                <section className="d-flex flex-column mx-4 my-5 px-4 py-5 container-about">
                    <article >
                        <h3 className="">À propos</h3>
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
                    <div className="">
                        <img src="../../public/img/about.jpg" alt="Photo de profil de John Doe" />
                        <h4>Mes compétences</h4>
                            <div>
                                <span>HTML5 90%</span>
                                <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-danger w-90" style={{width:'90%'}}></div>
                                </div>
                                <span>CSS3 80%</span>
                                <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-info" style={{width:'80%'}}></div>
                                </div>
                                <span>JAVASCRIPT 70%</span>
                                <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-warning" style={{width:'70%'}}></div>
                                </div>
                                <span>PHP 60%</span>
                                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-success" style={{width:'25%'}}></div>
                                </div>
                                <span>REACT 50%</span>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-basic" style={{width:'50%'}}></div>
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