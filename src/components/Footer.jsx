import { Link } from "react-router-dom"

export default function Footer() {
    return(
        <>
            <section>
                <h5>John Doe</h5>
                <div>
                    <span>40 rue Laure Diebold</span><br/>
                    <span>69009 Lyon, France</span><br/>
                    <span>Téléphone : 06 20 30 40 50</span>
                </div>
                <div>
                    <a href="https://github.com" target="_blank">
                        <img src="../public/icon/github-brands-solid.svg" alt="Icon de Github" className="logo"/>
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <img src="../public/icon/square-twitter-brands-solid.svg" alt="Icon de Twitter" className="logo"/>
                    </a>
                    <a href="https://linkedin.com" target="_blank">
                        <img src="../public/icon/linkedin-brands-solid.svg" alt="Icon de Linkedin" className="logo"/>
                    </a>
                </div>
            </section>
            <section>
                <h5>Liens utiles</h5>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/">à propos</Link></li>
                    <li><Link to="/service">Services</Link></li>
                    <li><Link to="/contact">Me contacter</Link></li>
                    <li><Link to="/legal">Mentions légales</Link></li>
                </ul>
            </section>
            <section>
                <h5>Mes dernières réalisations</h5>
                <ul>
                    <li><Link to="/portfolio">Fresh food</Link></li>
                    <li><Link to="/portfolio">Restaurant Akira</Link></li>
                    <li><Link to="/portfolio">Espace bien-être</Link></li>
                </ul>
            </section>
            <section>
                <h5>Mes derniers articles</h5>
                <ul>
                    <li><Link to="/blog">Coder son site en HTML/CSS</Link></li>
                    <li><Link to="/blog">Vendre ses produits sur le web</Link></li>
                    <li><Link to="/blog">Se positionner sur Google</Link></li>
                </ul>
            </section>
            <div>
                <img src="../public/icon/copyright-regular.svg" alt="signe copyright" className="icon"/>
                <span>Designed by John Doe</span>
            </div>
        </>
    )
}