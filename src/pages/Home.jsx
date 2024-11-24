import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
            <main>
                <div className="container-first-title">
                    <div className="layout-first-title d-flex flex-column justify-content-center align-items-center "> 
                        <h1 className="m-2 p-2 text-light first-title">Bonjour, je suis John Doe</h1>
                        <h2 className="mb-2 p-2 text-light ">Développeur web full stack</h2>
                        <Link to="" type="button" className="btn btn-primary">En savoir plus</Link>
                    </div>
                </div>
                <section className="container-fluid mx-auto p-5 bg-body-tertiary">
                    <div className="row shadow bg-white">
                        <article className="col-md-6 px-4 py-5">
                            <h3 className="fs-2 pb-2 mb-3 border-bottom border-primary border-3">À propos</h3>
                            <p className="fs-5">Passioné par l'informatique et les nouvelles technologies,
                                j'ai suivi une formation d'<strong>intégrateur-développeur web </strong>
                                au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides
                                pour travailler dans le domaine du <strong>développement web</strong>.
                            </p>
                            <p className="fs-5">
                                Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour 
                                consolider ma formation de <strong>développeur web full stack</strong>.
                            </p>
                            <p className="fs-5">
                                J'accorde une attention particulière à la qualité du code que j'écris et 
                                je respecte les bonnes pratiques du web.
                            </p>
                        </article>
                        <div className="col-md-6 px-4 py-5">
                            <img src="../../public/img/john-doe-about.jpg" alt="Photo de profil de John Doe" className="img-fluid"/>
                            <h4 className="my-1 py-1">Mes compétences</h4>
                            <div>
                                <span>HTML5 90%</span>
                                <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-danger w-90" style={{width:'90%'}}></div>
                                </div>
                                <span>CSS3 80%</span>
                                <div className="progress mb-2" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-info" style={{width:'80%'}}></div>
                                </div>
                                <span>JAVASCRIPT 70%</span>
                                <div className="progress mb-2" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-warning" style={{width:'70%'}}></div>
                                </div>
                                <span>PHP 60%</span>
                                <div className="progress mb-2" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-success" style={{width:'25%'}}></div>
                                </div>
                                <span>REACT 50%</span>
                                <div className="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-basic" style={{width:'50%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;