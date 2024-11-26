import CardBlog from "../components/components-items/CardBlog";

const Blog = () => {
    return(
        <>
            <main className="bg-body-tertiary">
                 <div>
                    <img src="../public/img/banner.jpg" alt="banner théme bleu et lumiére" className="img-fluid" style={{minWidth:'100%', maxHeight:'10rem'}}/>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center py-5 px-3">
                    <h1 className="fs-1 px-5 text-center">BLOG</h1>
                    <span className="fs-4 text-center gradient">Retrouver ici quelques articles sur le développement web.</span>
                </div>
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
                        <article className="col">
                            <div className="card m-3">
                                <CardBlog src = "../public/blog/coder.jpg"
                                    alt = "image représentant un écran avec des lignes de code"
                                    title = "Coder son site en HTML/CSS"
                                    text = "Some quick example text to build on the card title and make upthe bulk of the card's content."
                                    date = "2022-08-22"
                                    span = "22 août 2022"/>
                            </div>
                        </article>
                        <article className="col">
                            <div className="card m-3">
                                <CardBlog src = "../public/blog/croissance.jpg"
                                        alt = "image représentant la croissance d'une plante ayant comme racine des piéces"
                                        title = "Vendre ses produits sur le web"
                                        text = "Some quick example text to build on the card title and make upthe bulk of the card's content."
                                        date = "2022-08-20"
                                        span = "20 août 2022"/>
                            </div>
                         </article>
                         <article className="col">
                            <div className="card m-3">
                                <CardBlog src = "../public/blog/google.jpg"
                                        alt = "image représentant un ordinateur portable sur le navigateur Google"
                                        title = "Se positionner sur Google"
                                        text = "Some quick example text to build on the card title and make upthe bulk of the card's content."
                                        date = "2022-08-01"
                                        span = "1 août 2022"/>
                            </div>
                        </article>
                        <article className="col">
                            <div className="card m-3">
                                <CardBlog src = "../public/blog/screens.jpg"
                                        alt = "image représentant un ordinateur de burreau avec un ordinateur portable et une tablette sur une table en bois."
                                        title = "Coder en responsive design"
                                        text = "Some quick example text to build on the card title and make upthe bulk of the card's content."
                                        date = "2022-07-31"
                                        span = "31 juillet 2022"/>
                            </div>            
                        </article>
                        <article className="col">
                            <div className="card m-3">
                                <CardBlog src = "../public/blog/seo.jpg"
                                        alt = "image sur fond bleu avec plusieurs mots écrient de façon horizontale et vertical"
                                        title = "Techniques de référencement"
                                        text = "Some quick example text to build on the card title and make upthe bulk of the card's content."
                                        date = "2022-07-30"
                                        span = "30 juillet 2022"/>
                            </div>
                        </article>
                        <article className="col">
                            <div className="card m-3">
                                <CardBlog src = "../public/blog/technos.jpg"
                                        alt = "image représentant une grille de couleur avec les différentes marques d'outils de développement web."
                                        title = "Apprendre à coder"
                                        text = "Some quick example text to build on the card title and make upthe bulk of the card's content."
                                        date = "2022-07-12"
                                        span = "12 juillet 2022"/>
                            </div>
                        </article>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Blog;