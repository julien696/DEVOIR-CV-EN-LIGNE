const Service = () => {
    return(
        <>
            <main>
                <div>
                    <img src="../public/img/banner-mobile.jpg" alt="banner théme bleu et lumiére" className="img-fluid" style={{minWidth:'100%', maxHeight:'10rem'}}/>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center bg-body-tertiary py-5 px-3">
                    <h2 className="fs-1 px-5 text-center">MON OFFRE DE SERVICES</h2>
                    <span className="fs-4 text-center gradient">Voici les prestations sur lesquelles je peux intervenir.</span>
                </div>
                <div className="container-fluid mx-auto bg-body-tertiary">
                    <div className="row text-center justify-content-center py-5 px-3">
                        <section className="col-md-3 flex-grow-1 bg-white border rounded-3 m-3 pt-3 pb-5">
                            <img src="../public/icon/display-solid.svg" alt="icon d'un ordinateur." className="logo"/>
                            <h3 className="fs-3">UX DESIGN</h3>
                            <p>
                                L'<strong>UX Design </strong>est une méthode de conception centrée sur l'utilisateur.
                            Son but est d'offrir une expérience de navigation optimale à l'internaute.
                            </p>
                        </section>
                        <section className="col-md-3 flex-grow-1 bg-white border rounded-3 my-3 pt-3 pb-5">
                            <img src="../public/icon/file-code-solid.svg" alt="icon d'un fichier." className="logo"/>
                            <h3 className="fs-3">DÉVELOPPEMENT WEB</h3>
                            <p>
                                Le<strong> développement des sites web </strong>repose sur l'utilisation des langages <span className="underline">HTML</span>, <span className="underline">CSS,</span> JavaScript 
                                et <span className="underline">PHP</span>.
                            </p>
                        </section>
                        <section className="col-md-3 flex-grow-1 bg-white border rounded-3 m-3 pt-3 pb-5">
                            <img src="../public/icon/magnifying-glass-dollar-solid.svg" alt="icon d'une loupe avec le signe du dollar à l'intérieur." className="logo"/>
                            <h3 className="fs-3">RÉFÉRENCEMENT</h3>
                            <p>Le<strong> référencement naturel d'un site, </strong>aussi appelé <span className="underline">SEO</span>, consiste à mettre
                            des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>
                        </section>
                    </div>
                </div>
           </main>
        </>
    )
}

export default Service;