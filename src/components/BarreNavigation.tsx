import { useState } from 'react'
import { Home, Menu, X } from 'lucide-react'

const BarreNavigation = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinks = [
        { href: "#Home", label: "Accueil" },
        { href: "#About", label: "À propos" },
        { href: "#ParcoursAcademique", label: "Parcours académique" },
        { href: "#ExperiencesProfessionnelles", label: "Expériences professionnelles" },
        { href: "#Projets", label: "Mes Projets" },
        { href: "#Contact", label: "Contact" },
    ]

    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-100 shadow-md relative">
            <div className="flex items-center justify-between w-full md:w-auto">
                <a href="Accueil" className="flex items-center text-3xl text-gray-700 hover:text-gray-900 transition-colors duration-300 md:text-xl">
                    <Home className='mr-2' />
                    <span className="font-bold">Clément SENE</span>
                </a>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-700 hover:text-gray-900"
                    aria-label="Ouvrir le menu"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <ul className={`${menuOpen ? "flex" : "hidden"} flex-col w-full mt-4 space-y-2 md:flex md:flex-row md:space-y-0 md:space-x-2 md:mt-0 md:w-auto items-center`}>
                {navLinks.map((link) => (
                    <li key={link.href} className="w-full md:w-auto">
                        <a
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="btn btn-small btn-ghost w-full md:w-auto"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
                <li className="w-full md:w-auto">
                    <a
                        href="/cv-clement-sene.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-small btn-accent w-full md:w-auto"
                    >
                        CV
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default BarreNavigation