const Contact = () => {
    return(
        <>
            <main>
                <div className="container-contact">
                    <div className="layout-contact pt-2 px-3 pb-5">
                        <div className="border border-1 rounded-3 mt-3 mx-4 mb-5 bg-white">
                            <div className="d-flex flex-column justify-content-center align-items-center p-5">
                                <h2 className="fs-1 px-5 text-center">ME CONTACTER</h2>
                                <span className="fs-4 text-center gradient">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</span>
                            </div>
                            <div className="container-fluid mx-auto p-5">
                                <div className="row row-cols-1 row-cols-md-2">
                                    <div className="col">
                                        <h3 className="fs-2 pb-2 my-3 border-bottom border-primary border-3">Formulaire de contact</h3>
                                        <form className="text-center my-5" action="#" method="post">
                                            <input className="form-control mb-3" type="text" placeholder="Votre nom"/>
                                            <input className="form-control mb-3" type="email" placeholder="Votre adresse e-mail"/>
                                            <input className="form-control mb-3" type="tel" placeholder="Votre numéro de téléphone"/>
                                            <input className="form-control mb-3" type="text" placeholder="Sujet"/>
                                            <textarea className="form-control mb-3" rows="6" placeholder="Votre message"></textarea>
                                            <button className="btn btn-primary" type="submit">Envoyer</button>
                                        </form>
                                    </div>
                                    <div className="col">
                                        <h3 className="fs-2 pb-2 my-3 border-bottom border-primary border-3">Mes coordonées</h3>
                                        <div>
                                            <img src="../public/icon/location-dot-solid.svg" alt="Icon de localisation" className="icon"/>
                                            <span> 40 Rue Laure Diebold, 69009 Lyon, France</span>
                                        </div>
                                        <div className="mb-3">
                                            <img src="../public/icon/mobile-screen-button-solid.svg" alt="Icon de téléphone portable" className="icon"/>
                                            <span> 06 20 30 40 50</span>
                                        </div>
                                        <img src="../public/img/Capture-Lyon.jpg" alt="Plan google maps de l'adresse 40 rue Laure Diebold Lyon" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>  
    )
}

export default Contact;