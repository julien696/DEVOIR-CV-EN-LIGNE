import { Link } from "react-router-dom"

export default function Header() {
    return(
        <header>
            <nav class="navbar navbar-expand-lg bg-dark text-uppercase">
                <div class="container">
                    <a class="navbar-brand text-uppercase text-white" href="#">john doe</a>
                    <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-lg-1">
                        <Link to="/" class="nav-link py-3 px-0 px-lg-3 rounded text-white-50">Acceuil</Link>
                        </li>
                        <li class="nav-item mx-lg-1">
                        <Link to="/service" class="nav-link py-3 px-0 px-lg-3 rounded text-white-50">Services</Link>
                        </li>
                        <li class="nav-item mx-lg-1">
                        <Link to="/portfolio" class="nav-link py-3 px-0 px-lg-3 rounded text-white-50">Réalisations</Link>
                        </li>
                        <li class="nav-item mx-lg-1">
                        <Link to="/blog" class="nav-link py-3 px-0 px-lg-3 rounded text-white-50">Blog</Link>
                        </li>
                        <li class="nav-item mx-lg-1">
                        <Link to="/contact" class="nav-link py-3 px-0 px-lg-3 rounded text-white-50">Me Contacter</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}