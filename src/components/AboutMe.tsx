import Titre from "./Titre"
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.jpeg";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgPHP from "../assets/techno/php-6.webp";
import imgJAVA from "../assets/techno/Java.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPYTHON from "../assets/techno/Python-Emblem.png";
import imgWORDPRESS from "../assets/techno/Wordpress.webp";
import imgANGULAR from "../assets/techno/Angular.webp";
import imgSPRING from "../assets/techno/Spring.png";
import imgPOSTGRESQL from "../assets/techno/postgresql.jpg";
import imgMYSQL from "../assets/techno/mySql.jpg";
import imgGIT from "../assets/techno/git.jpg";
import imgGITHUB from "../assets/techno/github.jpg";
import imgGITLAB from "../assets/techno/gitlab.jpg";
import imgDOCKER from "../assets/techno/docker.webp";

const AboutMe = () => {

    const aboutSections = [
        {
            id: 1,
            title: "Développeur Frontend",
            description: "Je développe des interfaces avec Angular et React, en TypeScript/JavaScript, pour des applications réactives et bien structurées.",
            icon: <LetterText className="text-accent scale-150" />,
        },
        {
            id: 2,
            title: "Développeur Backend",
            description: "Je conçois et consomme des APIs robustes avec Java/Spring Boot, ainsi qu'en PHP et Python selon les besoins du projet.",
            icon: <CalendarSync className="text-accent scale-150" />,
        },
        {
            id: 3,
            title: "Passionné par l'UI/UX",
            description: "Je conçois des interfaces claires et intuitives, en veillant à la cohérence visuelle et à l'expérience utilisateur.",
            icon: <Paintbrush className="text-accent scale-150" />,
        },
    ];

    const skills = [
        { id: 1, name: "HTML", image: imgHTML },
        { id: 2, name: "CSS", image: imgCSS },
        { id: 3, name: "Tailwind CSS", image: imgTAILWIND },
        { id: 4, name: "PHP", image: imgPHP },
        { id: 5, name: "Javascript", image: imgJS },
        { id: 6, name: "Java", image: imgJAVA },
        { id: 7, name: "Python", image: imgPYTHON },
        { id: 8, name: "TypeScript", image: imgTYPE },
        { id: 9, name: "WordPress", image: imgWORDPRESS },
        { id: 10, name: "React", image: imgREACT },
        { id: 11, name: "Angular", image: imgANGULAR },
        { id: 12, name: "Spring", image: imgSPRING },
        { id: 13, name: "PostgreSQL", image: imgPOSTGRESQL },
        { id: 14, name: "MySQL", image: imgMYSQL },
        { id: 15, name: "Git", image: imgGIT },
        { id: 16, name: "GitHub", image: imgGITHUB },
        { id: 17, name: "Gitlab", image: imgGITLAB },
        { id: 18, name: "Docker", image: imgDOCKER },
    ]

    return (
        <div className="bg-accent p-10 mb-10 md:mb-32 md:h-screen flex flex-col justify-center" id="About">
            <Titre titre="À propos de moi" />

            <div className=" ">

                <div className="text-center pb-10">
                    <p className="text-lg md:text-xl text-justify md:text-left">
                        Étudiant en BUT 3 Informatique, je conçois des applications web de bout en bout :
                        interfaces utilisateur avec Angular et React, logique métier côté serveur avec
                        Java/Spring Boot, PHP ou Python.
                        J'ai également de l'expérience avec WordPress pour des projets plus rapides à mettre en place.
                    </p>
                    <p className="text-lg md:text-xl text-center md:text-left mt-4">
                        Je suis aujourd'hui à la recherche d'une alternance en développement web pour mettre
                        ces compétences au service de projets concrets et continuer à progresser sur le terrain.
                    </p>
                </div>

            </div>

            <div className=" flex flex-col md:flex-row gap-5 mt-10 md:mt-0">
                {aboutSections.map(section => (
                    <div key={section.id} className="flex flex-col md:flex-row items-center gap-5 bg-base-100 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 flex items-center justify-center  text-base-100 rounded-full">
                            {section.icon}
                        </div>
                        <div className="md:ml-4 text-center md:text-left">
                            <h3 className="text-xl font-semibold">{section.title}</h3>
                            <p className="text-base">{section.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <h3 className="text-xl font-semibold mt-10 mb-5">Compétences acquises :</h3>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
                    {skills.map(skill => (
                        <div key={skill.id} className="flex flex-col items-center gap-2 bg-base-100 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img src={skill.image} alt={skill.name} className="w-12 h-12" />
                            <span className="text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default AboutMe
