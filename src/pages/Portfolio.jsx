import CardPortfolio from "../components/components-items/CardPortfolio";

const Portfolio = () => {
    return(
        <>
           <main className="bg-body-tertiary">
                 <div>
                    <img src="../public/img/banner.jpg" alt="banner théme bleu et lumiére" className="img-fluid" style={{minWidth:'100%', maxHeight:'10rem'}}/>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center py-5 px-3">
                    <h2 className="fs-1 px-5 text-center">PORTFOLIO</h2>
                    <span className="fs-4 text-center gradient">Voici quelques-unes de mes réalisations</span>
                </div>
                <div className="container-fluid py-5">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
                        <section className="col">
                            <div className="card text-center m-3">
                                <CardPortfolio src = "../public/portfolio/fresh-food.jpg" 
                                    alt = "Image représentant un panier de légume frais"
                                    title = "Fresh food"
                                    text = "Réalisation d'un site avec commande en ligne."
                                    span = "Site réalisé avec PHP et MySQL"/>
                            </div>
                        </section>
                        <section className="col">
                            <div className="card text-center m-3">
                                <CardPortfolio src = "../public/portfolio/restaurant-japonais.jpg"
                                    alt = "Image représentant des sushis et des makis"
                                    title = "Restaurant Akira"
                                    text = "Réalisation d'un site vitrine."
                                    span = "Site réalisé avec WordPress"/>
                            </div>
                        </section>
                        <section className="col">
                            <div className="card text-center m-3">
                                <CardPortfolio src = "../public/portfolio/espace-bien-etre.jpg"
                                    alt = "Image représentant un bouddha une fleur de lotus et des pierres d'équilibre zen."
                                    title = "Espace bien-être"
                                    text = "Réalisation d'un site vitrine pour un praticien de bien-être."
                                    span = "Site réalisé en HTML/CSS"/>
                            </div>
                        </section>
                    </div>
                </div>
           </main>            
        </>
    )
}

export default Portfolio;