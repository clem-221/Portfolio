import Titre from "./Titre"
import { Monitor, Server, Users } from "lucide-react"

import imgCSS from "../assets/techno/css.png"
import imgJS from "../assets/techno/JavaScript.svg"
import imgREACT from "../assets/techno/react.png"
import imgHTML from "../assets/techno/html.png"
import imgPHP from "../assets/techno/PHP.svg"
import imgJAVA from "../assets/techno/Java.svg"
import imgTYPE from "../assets/techno/typescript.svg"
import imgTAILWIND from "../assets/techno/tailwind.png"
import imgPYTHON from "../assets/techno/Python.svg"
import imgWORDPRESS from "../assets/techno/Wordpress.webp"
import imgANGULAR from "../assets/techno/Angular.webp"
import imgSPRING from "../assets/techno/Spring.svg"
import imgPOSTGRESQL from "../assets/techno/PostgresSQL.svg"
import imgMYSQL from "../assets/techno/MySQL.svg"
import imgGIT from "../assets/techno/Git.svg"
import imgGITHUB from "../assets/techno/GitHub.svg"
import imgGITLAB from "../assets/techno/GitLab.svg"
import imgDOCKER from "../assets/techno/Docker.svg"
import imgFLASK from "../assets/techno/Flask.svg"

const aboutSections = [
    {
        id: 1,
        title: "Frontend",
        description: "Interfaces réactives et bien structurées avec Angular et React, en TypeScript/JavaScript.",
        icon: <Monitor className="w-8 h-8 text-primary" />,
    },
    {
        id: 2,
        title: "Backend",
        description: "APIs et logique métier avec Java/Spring Boot, ainsi qu'en PHP et Python selon le projet.",
        icon: <Server className="w-8 h-8 text-primary" />,
    },
    {
        id: 3,
        title: "Travail en équipe",
        description: "Chef de projet sur une SAÉ en groupe de 3, développeur dans une équipe de 5 : répartition des rôles et intégration du travail de chacun.",
        icon: <Users className="w-8 h-8 text-primary" />,
    },
]

const skillGroups = [
    {
        id: 1,
        title: "Frontend",
        skills: [
            { name: "HTML", image: imgHTML },
            { name: "CSS", image: imgCSS },
            { name: "Tailwind CSS", image: imgTAILWIND },
            { name: "JavaScript", image: imgJS },
            { name: "TypeScript", image: imgTYPE },
            { name: "React", image: imgREACT },
            { name: "Angular", image: imgANGULAR },
        ],
    },
    {
        id: 2,
        title: "Backend & CMS",
        skills: [
            { name: "Java", image: imgJAVA },
            { name: "Spring Boot", image: imgSPRING },
            { name: "PHP", image: imgPHP },
            { name: "Python", image: imgPYTHON },
            { name: "WordPress", image: imgWORDPRESS },
        ],
    },
    {
        id: 3,
        title: "Bases de données",
        skills: [
            { name: "PostgreSQL", image: imgPOSTGRESQL },
            { name: "MySQL", image: imgMYSQL },
        ],
    },
    {
        id: 4,
        title: "Outils",
        skills: [
            { name: "Git", image: imgGIT },
            { name: "GitHub", image: imgGITHUB },
            { name: "GitLab", image: imgGITLAB },
        ],
    },
    {
        id: 5,
        title: "En cours d'apprentissage",
        skills: [
            { name: "Flask", image: imgFLASK },
            { name: "Docker", image: imgDOCKER },
        ],
    },
]

const AboutMe = () => {
    return (
        <section className="bg-base-200 p-10 mb-10 md:mb-32 md:py-20" id="About">
            <Titre titre="À propos de moi" />

            <div className="max-w-3xl mx-auto mt-8 space-y-4 text-lg md:text-xl">
                <p>
                    Étudiant en BUT 3 Informatique à l'IUT de Villetaneuse, je conçois des applications
                    web de bout en bout : interfaces avec Angular et React, logique métier avec
                    Java/Spring Boot, PHP ou Python.
                </p>
                <p>
                    Je recherche un stage de 14 à 16 semaines en développement web full stack, dès le 08 mars 2027,
                    pour travailler sur des projets concrets et progresser auprès d'une équipe.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
                {aboutSections.map(section => (
                    <div key={section.id} className="flex flex-col items-center text-center gap-3 bg-base-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-full">
                            {section.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{section.title}</h3>
                        <p className="text-base text-base-content/80">{section.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-14">
                <h3 className="text-2xl font-semibold mb-6 text-center">Compétences techniques</h3>

                <div className="space-y-8">
                    {skillGroups.map(group => (
                        <div key={group.id}>
                            <h4 className="text-lg font-semibold mb-3">{group.title}</h4>
                            <div className="flex flex-wrap gap-4">
                                {group.skills.map(skill => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-3 bg-base-100 px-4 py-3 rounded-lg shadow-sm"
                                    >
                                        <img src={skill.image} alt="" loading="lazy" className="w-8 h-8 object-contain" />
                                        <span className="text-sm font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutMe