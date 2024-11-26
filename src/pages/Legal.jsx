import { Helmet } from "react-helmet";

const Legal = () => {
    return(
        <>

        <Helmet>
            <title>Page non indexée</title>
            <meta name="robots" content="noindex, nofollom" />
            <meta name="description" content="La page mention légale ne sera pas indexée par les moteurs de recherche."/>
        </Helmet>
        
            <main className="bg-body-tertiary">
                <div className="d-flex flex-column justify-content-center align-items-center py-5 px-3">
                    <h1 className="fs-1 px-5 text-center gradient">MENTIONS LÉGALES</h1>
                </div>
                <div className="accordion px-3 py-4" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Éditeur de site
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h3>John Doe</h3>
                                <div>
                                    <div>
                                        <img src="../public/icon/location-dot-solid.svg" alt="Icon de localisation" className="icon"/>
                                        <span> 40 Rue Laure Diebold</span><br />
                                        <span>69009 Lyon, France</span>
                                    </div>
                                    <div>
                                        <img src="../public/icon/mobile-screen-button-solid.svg" alt="Icon de téléphone portable" className="icon"/>
                                        <span><a href="tel: 0620304050"> 06 20 30 40 50</a></span>
                                    </div>
                                    <div>
                                        <img src="../public/icon/envelope-solid.svg" alt="Icon d'une enveloppe" className="icon"/>
                                        <span><a href="mailto:john.doe@gmail.com"> john.doe@gmail.com</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Hébergeur
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h3>Always Data</h3>
                                <span>91 rue du Faubourg Saint Honoré</span><br />
                                <span>75008 Paris</span>
                                <div>
                                    <img src="../public/icon/globe-solid.svg" alt="Icon de globe" className="icon"/>
                                    <a href="https://www.alwaysdata.com/fr/"> www.alwaysdata.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Crédits
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <h3>Crédits</h3>
                                <span>Site développé par John Doe, étudiant du CEF.</span><br />
                                <span>Les images libres de droit, sont issues du site <a href="https://pixabay.com/fr/">Pixabay</a>.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Legal;