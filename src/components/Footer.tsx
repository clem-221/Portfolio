import { Home } from "lucide-react"
import github from '../assets/techno/github-light.webp'
import linkedin from '../assets/techno/linkedin-logo-icon-svg-download-png-5640870.webp'

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-accent text-secondary-content p-10">
            <aside>
                <a href="/">
                    <Home className='w-10 h-10' />

                </a>

                <p className="font-bold">
                    <span className="font-bold">Clément SENE</span>
                </p>

                <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>

            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/clement-sene/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="w-10 h-10 text-current" />
                    </a>
                    <a href="https://github.com/clem-221" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" className="w-10 h-10 text-current" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
