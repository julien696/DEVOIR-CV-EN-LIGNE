import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

const Blog = () => {
    return(
        <>
            <header>
                <Navbar />
                <div>
                    <img src="../public/img/banner.jpg" alt="banner théme bleu et lumiére" />
                </div>
            </header>
            <main>
                <div>
                    <h2>BLOG</h2>
                    <span>Retrouver ici quelques articles sur le développement web.</span>
                </div>
                <div>
                    <article>
                        <div>
                            <img src="../public/blog/coder.jpg" alt="image représentant un écran avec des lignes de code" />
                            <h3>Coder son site en HTML/CSS</h3>
                            <span>Some quick example text to build on the card title and make upthe bulk of the card's content.</span>
                            <button type="button" className="btn btn-primary">Lire la suite</button>
                        </div>
                        <span>Publié le <time dateTime="2022-08-22">22 août 2022</time></span>
                    </article>
                    <article>
                        <div>
                            <img src="../public/blog/croissance.jpg" alt="image représentant la croissance d'une plante ayant comme racine des piéces" />
                            <h3>Vendre ses produits sur le web</h3>
                            <span>Some quick example text to build on the card title and make upthe bulk of the card's content.</span>
                            <button type="button" className="btn btn-primary">Lire la suite</button>
                        </div>
                        <span>Publié le <time dateTime="2022-08-20">20 août 2022</time></span>
                    </article>
                    <article>
                        <div>
                            <img src="../public/blog/google.jpg" alt="image représentant un ordinateur portable sur le navigateur Google" />
                            <h3>Se positionner sur Google</h3>
                            <span>Some quick example text to build on the card title and make upthe bulk of the card's content.</span>
                            <button type="button" className="btn btn-primary">Lire la suite</button>
                        </div>
                        <span>Publié le <time dateTime="2022-08-01">1 août 2022</time></span>
                    </article>
                    <article>
                        <div>
                            <img src="../public/blog/screens.jpg" alt="image représentant un ordinateur de burreau avec un ordinateur portable et une tablette sur une table en bois." />
                            <h3>Coder en responsive design</h3>
                            <span>Some quick example text to build on the card title and make upthe bulk of the card's content.</span>
                            <button type="button" className="btn btn-primary">Lire la suite</button>
                        </div>
                        <span>Publié le <time dateTime="2022-07-31">31 juillet 2022</time></span>
                    </article>
                    <article>
                        <div>
                            <img src="../public/blog/seo.jpg" alt="image sur fond bleu avec plusieurs mots écrient de façon horizontale et vertical" />
                            <h3>Techniques de référencement</h3>
                            <span>Some quick example text to build on the card title and make upthe bulk of the card's content.</span>
                            <button type="button" className="btn btn-primary">Lire la suite</button>
                        </div>
                        <span>Publié le <time dateTime="2022-07-30">30 juillet 2022</time></span>
                    </article>
                    <article>
                        <div>
                            <img src="../public/blog/technos.jpg" alt="image représentant une grille de couleur avec les différentes marques d'outils de développement web." />
                            <h3>Apprendre à coder</h3>
                            <span>Some quick example text to build on the card title and make upthe bulk of the card's content.</span>
                            <button type="button" className="btn btn-primary">Lire la suite</button>
                        </div>
                        <span>Publié le <time dateTime="2022-07-12">12 juillet 2022</time></span>
                    </article>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Blog;