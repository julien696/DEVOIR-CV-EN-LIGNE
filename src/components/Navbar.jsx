import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-dark text-uppercase">
                <div className="container">
                    <Link className="navbar-brand text-uppercase text-white" to="/"><img src="../public/img/favicon.png" alt="logo du site représentant 4 vagues de couleurs bleu et violet superposées" /></Link>
                    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-lg-1">
                            <Link to="/" className="nav-link py-3 px-0 px-lg-3 rounded text-white-50">Acceuil</Link>
                            </li>
                            <li className="nav-item mx-lg-1">
                            <Link to="/service" className="nav-link py-3 px-0 px-lg-3 rounded text-white-50">Services</Link>
                            </li>
                            <li className="nav-item mx-lg-1">
                            <Link to="/portfolio" className="nav-link py-3 px-0 px-lg-3 rounded text-white-50">Réalisations</Link>
                            </li>
                            <li className="nav-item mx-lg-1">
                            <Link to="/blog" className="nav-link py-3 px-0 px-lg-3 rounded text-white-50">Blog</Link>
                            </li>
                            <li className="nav-item mx-lg-1">
                            <Link to="/contact" className="nav-link py-3 px-0 px-lg-3 rounded text-white-50">Me Contacter</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}