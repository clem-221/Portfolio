import Titre from "./Titre"
import otoradio from "../assets/companies/logo Otoradio rogné.jpg"
import mmv from "../assets/companies/icon.webp"

interface Experience {
    id: number
    poste: string
    organisation: string
    periode: string
    contexte: string
    missions: string[]
    resultat?: string
    skills: string[]
    logo: string
    logoAlt: string
    lien?: string
}

const experiences: Experience[] = [
    {
        id: 1,
        poste: "Stage Développeur Web WordPress",
        organisation: "OTORADIO – webradio associative Paris Banlieue Sud",
        periode: "2026",
        contexte: "Mise en place du nouveau site de la webradio et automatisation de l'affichage de ses contenus.",
        missions: [
            "Installer et configurer le nouveau site WordPress (thème Pro.Radio avec thème enfant) et migrer les contenus de l'ancien site",
            "Transférer les fichiers par SFTP après avoir contourné une limite d'import de 240 secondes imposée par l'hébergeur",
            "Développer des plugins PHP qui affichent automatiquement les réseaux sociaux (Facebook, Instagram, YouTube) et les podcasts SoundCloud",
            "Sécuriser les clés d'API en les sortant du code des plugins (variables définies dans wp-config.php)",
            "Ajouter des fonctionnalités sur mesure (historique des chansons, boutons « like », nuage d'émissions) et du CSS responsive",
        ],
        // Ajoute ici un résultat réel si tu en as un, par exemple :
        // resultat: "Les équipes n'ont plus à publier manuellement leurs contenus sur le site.",
        skills: ["WordPress", "PHP", "Intégration d'API", "HTML/CSS", "JavaScript", "SFTP"],
        logo: otoradio,
        logoAlt: "Logo OTORADIO",
        lien: "https://otoradio.com",
    },
    {
        id: 2,
        poste: "Animateur polyvalent (emploi saisonnier)",
        organisation: "Hôtels et résidences club MMV",
        periode: "2022 - 2026",
        contexte: "Étés passés dans cinq sites de montagne (Flaine, Tignes, Les 2 Alpes, L'Alpe d'Huez, Montgenèvre).",
        missions: [
            "Organiser et animer des activités ludiques et sportives pour enfants et adolescents",
            "Assurer leur sécurité lors des activités et des sorties",
            "Communiquer avec les parents pour garantir la satisfaction des clients",
        ],
        skills: ["Autonomie", "Travail en équipe", "Communication", "Adaptabilité"],
        logo: mmv,
        logoAlt: "Logo MMV",
    },
]

const ExperiencesProfessionnelles = () => {
    return (
        <section className="bg-base-200 p-10 mb-10 md:py-20" id="ExperiencesProfessionnelles">
            <Titre titre="Expériences professionnelles" />

            <div className="flex flex-col gap-6 mt-10 max-w-5xl mx-auto">
                {experiences.map(exp => (
                    <article
                        key={exp.id}
                        className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-base-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={exp.logo}
                            alt={exp.logoAlt}
                            loading="lazy"
                            className="w-32 md:w-44 h-auto object-contain rounded-lg shrink-0"
                        />

                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-semibold">{exp.poste}</h3>
                            <p className="font-medium text-primary">
                                {exp.organisation} · <span className="font-mono text-sm italic">{exp.periode}</span>
                            </p>
                            <p className="mt-2 text-base-content/80">{exp.contexte}</p>

                            <h4 className="text-lg font-bold mt-4">Missions</h4>
                            <ul className="text-sm text-base-content/80 mt-2 list-disc pl-5 space-y-1 text-left">
                                {exp.missions.map((mission, index) => (
                                    <li key={index}>{mission}</li>
                                ))}
                            </ul>

                            {exp.resultat && (
                                <p className="mt-4 text-sm">
                                    <span className="font-bold">Résultat : </span>
                                    {exp.resultat}
                                </p>
                            )}

                            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                                {exp.skills.map((skill, index) => (
                                    <span key={index} className="badge badge-outline badge-primary">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {exp.lien && (
                                <a
                                    href={exp.lien}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link link-primary inline-block mt-4"
                                >
                                    Voir le site →
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default ExperiencesProfessionnelles