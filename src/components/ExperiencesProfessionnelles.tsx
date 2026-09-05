import Titre from "./Titre"
import otoradio from "../assets/companies/logo Otoradio rogné.jpg"
import mmv from "../assets/companies/icon.webp"

const ExperiencesProfessionnelles = () => {

    const experiencesSections = [
        {
            id: 1,
            title: "Stage Développeur Web WordPress (2026): ",
            description: "Modernisation et optimisation du site de la webradio OTORADIO - Association Radioweb Banlieue Sud (2026)",
            missions: [
                "Migrer tous les fichiers du site web vers un nouveau thème WordPress Pro.Radio plus moderne et plus professionnel",
                "Améliorer l'ergonomie et l'expérience utilisateur du site web pour faciliter la navigation et l'accès aux contenus",
                "Créer de nouveaux plugins PHP pour automatiser l'affichage des réseaux-sociaux (Facebook, Instagram, Youtube) ainsi que les podcast Soundcloud sur le site web afin de faciliter la gestion des contenus",
                "Participer à la refactorisation du code selon les bonnes pratiques",
            ],
            skills: [
                "WordPress",
                "PHP",
                "HTML",
                "CSS",
                "JavaScript",
            ],
            icon: <img src={otoradio} alt="Logo OTORADIO" className="w-50 h- rounded-lg" />,
            lien: "https://otoradio.com",
        },
        {
            id: 2,
            title: "Animateur polyvalent Hôtels/Résidences club MMV (2022 - 2026) :",
            description: "Job d'été saisonnier ( respectivement à MMV Flaine, MMV Tignes Les Brévières, MMV Le Clarines - Les 2 Alpes, MMV Les Bergers Alpes d'Huez, MMV Le Hameau des Airelles - Montgenèvre)",
            missions: [
                "Proposer de nouveaux jeux en cas d’imprévues météorologiques",
                "superviser l'apprentissage des chorégraphies pour le spectacle de fin de semaine du mini-club",
                "Assurer la sécurité des enfants et des adolescents lors des activités et des sorties",
                "Organiser et animer des activités ludiques et sportives pour les enfants et les adolescents",
                "Assurer la communication avec les parents pour garantir la satisfaction des clients",
            ],
            skills: [
                "Autonomie",
                "Sens de la communication",
                "Travail en équipe",
                "Gestion du temps",
                "Créativité",
                "Adaptabilité",
            ],
            icon: <img src={mmv} alt="Logo MMV" className="w-50 h- rounded-lg" />,
            lien: "https://www.mmv.fr/",
        },
    ];

    return (
        <div className="bg-accent p-10 mb-10 md:h-screen" id="ExperiencesProfessionnelles">
            <Titre titre="Expériences professionnelles" />

            <div className=" flex flex-col gap-5 mt-10 md:mt-0  flex flex-col justify-center">
                {experiencesSections.map(section => (
                    <div key={section.id} className="flex flex-col md:flex-row items-center gap-5 bg-base-100 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="w-70 h- flex items-center justify-center  text-base-100 rounded-full">
                            {section.icon}
                        </div>
                        <div className="md:ml-1 text-center md:text-left">
                            <h3 className="text-xl font-semibold">{section.title}</h3>
                            <p className="text-base">{section.description}</p>
                            <h3 className="text-lg  font-bold mt-4">Missions :</h3>
                            <ul className="text-sm text-muted-foreground mt-2 list-disc pl-5">
                                {section.missions.map((mission, index) => (
                                    <li key={index}>{mission}</li>
                                ))}
                            </ul>
                            <h3 className="text-lg  font-bold mt-4">Compétences développées :</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {section.skills.map((skill, index) => (
                                    <span key={index} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {section.lien && (
                                <a
                                    href={section.lien}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 text-accent underline hover:text-accent-focus transition-colors"
                                >
                                    Voir le site →
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

        </div >
    )
}

export default ExperiencesProfessionnelles
