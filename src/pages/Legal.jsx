import Navbar from "../components/Navbar"

const Legal = () => {
    return(
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <h2>mentions légales</h2>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                éditeur de site
                            </button>
                        </h3>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h4>John Doe</h4>
                                <div>
                                    <div>
                                        <img src="../public/icon/location-dot-solid.svg" alt="Icon de localisation" />
                                        <span>40 Rue Laure Diebold</span><br />
                                        <span>69009 Lyon, France</span>
                                    </div>
                                    <div>
                                        <img src="../public/icon/mobile-screen-button-solid.svg" alt="Icon de téléphone portable" />
                                        <span><a href="tel: 0620304050">06 20 30 40 50</a></span>
                                    </div>
                                    <div>
                                        <img src="../public/icon/envelope-solid.svg" alt="Icon d'une enveloppe" />
                                        <span><a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Hébergeur
                            </button>
                        </h3>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h4>Always Data</h4>
                                <span>91 rue du Faubourg Saint Honoré</span><br />
                                <span>75008 Paris</span>
                                <div>
                                    <img src="../public/icon/globe-solid.svg" alt="Icon de globe" />
                                    <a href="https://www.alwaysdata.com/fr/">www.alwaysdata.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Crédits
                            </button>
                        </h3>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h4>Crédits</h4>
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