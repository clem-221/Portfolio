import { ArrowUp, Home } from "lucide-react"
import github from "../assets/techno/github-light.webp"
import linkedin from "../assets/techno/linkedin-logo-icon-svg-download-png-5640870.webp"
import { LINKEDIN_URL, GITHUB_URL } from "../constants"

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-accent text-accent-content p-10">
      <aside>
        <a href="/">
            <Home className='w-10 h-10' />
        </a>
        <p className="font-bold text-lg">Clément SENE</p>
        <p>Étudiant en BUT 3 Informatique · Recherche de stage (14 à 16 semaines) en développement web</p>
        <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
      </aside>

      <nav aria-label="Liens externes">
        <div className="grid grid-flow-col gap-4">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn">
            <img src={linkedin} alt="" className="w-10 h-10" />
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="Profil GitHub">
            <img src={github} alt="" className="w-10 h-10" />
          </a>
        </div>
      </nav>

      <a href="#Home" className="btn btn-sm btn-ghost">
        <ArrowUp className="w-4 h-4" aria-hidden="true" />
        Retour en haut
      </a>
    </footer>
  )
}

export default Footer