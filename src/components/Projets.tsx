import { useRef, useState } from "react"
import { Images } from "lucide-react"
import Titre from "./Titre"
import github from "../assets/techno/github-light.webp"

import supervision1 from "../assets/projects/SAE4_devweb/Supervision_lecteurs_gares_admin_1.png"
import supervision2 from "../assets/projects/SAE4_devweb/Supervision_lecteurs_admin_3.png"
import supervision3 from "../assets/projects/SAE4_devweb/Supervision_lecteurs_gares_commercial.png"
import supervision4 from "../assets/projects/SAE4_devweb/Supervision_lecteurs_gares_retail.png"
import exapunk from "../assets/projects/Projet_Exapunk/Exapunk.png"
import exapunk_infobulle from "../assets/projects/Projet_Exapunk/Exapunk_infos_bulle.png"

interface Competence {
    label: string
    detail: string
}

interface Repo {
    label: string
    url: string
}

interface Project {
    id: number
    title: string
    context: string
    description: string
    technologies: string[]
    missions: string[]
    competences?: Competence[]
    screenshots: string[]
    repos: Repo[]
    demoLink?: string
}

// À ajouter quand elle sera présentable : la SAÉ de recommandation de voyages (Flask, React, Docker)
const projects: Project[] = [
    {
        id: 1,
        title: "Supervision des lecteurs en gares",
        context: "SAÉ BUT 2 · équipe de 3 · Chef de projet et responsable frontend",
        description:
            "Application web de supervision audio synchrone et asynchrone de lecteurs multi-sites en gare, avec trois profils utilisateurs : admin IT, responsable retail et commercial.",
        technologies: ["Angular", "TypeScript", "PHP", "Python", "Volumio", "Snapcast"],
        missions: [
            "Développer le frontend Angular en composants réutilisables reliés par des routes",
            "Mettre en place un calendrier en glisser-déposer pour planifier les playlists par gare",
            "Intégrer l'API Volumio (pochette, titre, auteur, playlist en cours, commandes play/pause/stop/volume)",
            "Configurer les boutons play/stop dans la colonne « Action » de la supervision technique des gares",
            "Coordonner l'équipe de 3 en tant que chef de projet",
        ],
        competences: [
            { label: "Réaliser", detail: "Développement des composants Angular, du calendrier drag-and-drop et de l'intégration de l'API Volumio pour l'affichage et le contrôle des lecteurs." },
            { label: "Optimiser", detail: "Découpage de l'application en composants Angular indépendants et réutilisables plutôt qu'un code monolithique." },
            { label: "Administrer", detail: "Configuration de l'infrastructure audio Snapcast (snapserver sur l'appareil master, snapclient sur les clients) et des instances Volumio associées." },
            { label: "Gérer", detail: "Répartition et suivi des rôles entre les 3 membres (base de données/authentification, backend métier, frontend)." },
            { label: "Conduire", detail: "Pilotage du projet : définition des 3 profils utilisateurs cibles et de leurs besoins." },
            { label: "Collaborer", detail: "Travail articulé avec les deux autres membres, notamment sur l'intégration commune de l'API Volumio." },
        ],
        screenshots: [supervision1, supervision2, supervision3, supervision4],
        repos: [{ label: "Code", url: "https://github.com/clem-221/sae-supervision-lecteurs-gares" }],
    },
    {
        id: 2,
        title: "Application de gestion de films",
        context: "BUT 3 · Python / Flask",
        description:
            "Application web de gestion de films avec authentification sécurisée, structurée en architecture MVC / DAO / Service.",
        technologies: ["Python", "Flask", "SQLite", "MVC"],
        missions: [
            "Structurer l'application en couches MVC, DAO et Service",
            "Gérer la persistance des données avec SQLite",
            "Mettre en place une authentification sécurisée",
        ],
        screenshots: [],
        repos: [{ label: "Code", url: "https://github.com/clem-221/application-gestion-de-films" }],
    },
    {
        id: 3,
        title: "Spring Boot : API REST et application web",
        context: "Projet individuel · parcours OpenClassrooms",
        description:
            "API REST de gestion d'employés (CRUD complet) et application web Thymeleaf qui la consomme, sans base de données propre : toute la persistance passe par l'API.",
        technologies: ["Java", "Spring Boot", "Spring Data JPA", "Thymeleaf", "H2", "Maven", "JUnit"],
        missions: [
            "Structurer l'API en couches (controller, service, repository, model) avec une entité JPA sur une base H2 en mémoire",
            "Développer les 5 endpoints REST (GET, GET/id, POST, PUT, DELETE) et les tester avec MockMvc",
            "Créer l'application Thymeleaf (liste, formulaire de création/modification, suppression) qui consomme l'API via RestTemplate",
            "Isoler les appels à l'API dans une couche Proxy et externaliser son URL avec @ConfigurationProperties",
        ],
        competences: [
            { label: "Réaliser", detail: "Développement d'une API REST CRUD (Spring Data JPA, 5 endpoints), puis d'une interface Thymeleaf qui la consomme." },
            { label: "Optimiser", detail: "Lombok et CrudRepository pour réduire le code répétitif ; couche Proxy dédiée pour isoler les appels à l'API." },
            { label: "Administrer", detail: "Configuration de la base H2 en mémoire, de Maven et de la communication entre les deux applications (ports 9000 et 9001) via des propriétés externalisées." },
            { label: "Gérer", detail: "Identification autonome des pistes d'amélioration : validation des champs, DTO pour ne pas exposer le mot de passe, gestion des erreurs HTTP et de l'indisponibilité de l'API." },
            { label: "Conduire", detail: "Auto-formation structurée via OpenClassrooms, de la découverte de Spring Boot jusqu'à l'écriture de tests." },
            { label: "Collaborer", detail: "Deux applications indépendantes mais complémentaires : la webapp réutilise l'API comme unique source de données." },
        ],
        screenshots: [],
        repos: [
            { label: "Code API", url: "https://github.com/clem-221/api_springboot" },
            { label: "Code Application Web", url: "https://github.com/clem-221/application-web-springboot" },
        ],
    },
    {
        id: 4,
        title: "EXAPUNK Java Game",
        context: "Projet de groupe (5) L2 Informatique · Responsable de l'interface graphique",
        description:
            "Reproduction simplifiée du jeu EXAPUNKS en Java, avec éditeur de code assembleur, zone de jeu et robots animés.",
        technologies: ["Java", "Swing"],
        missions: [
            "Concevoir et développer l'interface graphique complète avec Java Swing",
            "Implémenter les éditeurs de code assembleur, la zone de jeu et le dessin des robots",
            "Mettre en place les boutons RUN/STEP/STOP/PAUSE avec raccourcis clavier",
            "Ajouter la musique de fond, les messages de fin de mission et une classe de sauvegarde des fichiers pour l'exécution du code assembleur",
        ],
        competences: [
            { label: "Réaliser", detail: "Implémentation de 7 classes Java constituant l'intégralité de l'interface graphique du jeu." },
            { label: "Optimiser", detail: "Redimensionnement des zones d'édition, ajout du scroll, ajustement des couleurs et tailles des boutons pour une interface plus lisible." },
            { label: "Administrer", detail: "Gestion des fichiers de sauvegarde du code assembleur, utilisés ensuite par le moteur d'exécution." },
            { label: "Gérer", detail: "Prise en charge autonome du rôle « Interface Graphique », avec auto-formation sur Swing via un ouvrage de référence et des exercices ciblés." },
            { label: "Conduire", detail: "Progression méthodique depuis la découverte de JFrame jusqu'à la gestion complète des interactions utilisateur." },
            { label: "Collaborer", detail: "Coordination avec les autres membres : intégration de la carte dans la zone de jeu, fichiers de sauvegarde nécessaires à l'exécution du code, accompagnement par un tuteur GUI." },
        ],
        screenshots: [exapunk, exapunk_infobulle],
        repos: [{ label: "Code", url: "https://github.com/clem-221/exapunk-java-game" }],
    },
]

const ProjectCard = ({ project }: { project: Project }) => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const [current, setCurrent] = useState(0)
    const total = project.screenshots.length

    const previous = () => setCurrent(i => (i - 1 + total) % total)
    const next = () => setCurrent(i => (i + 1) % total)

    return (
        <article className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="text-xs font-medium text-primary">{project.context}</p>
                <p className="text-sm text-base-content/80">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map(tech => (
                        <span key={tech} className="badge badge-outline badge-primary">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="collapse collapse-arrow bg-base-200 mt-3">
                    <input type="checkbox" aria-label={`Afficher les missions : ${project.title}`} />
                    <div className="collapse-title text-sm font-semibold">Missions</div>
                    <div className="collapse-content">
                        <ul className="list-disc list-inside text-sm text-base-content/80 space-y-1">
                            {project.missions.map((mission, index) => (
                                <li key={index}>{mission}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {project.competences && (
                    <div className="collapse collapse-arrow bg-base-200 mt-2">
                        <input type="checkbox" aria-label={`Afficher les compétences : ${project.title}`} />
                        <div className="collapse-title text-sm font-semibold">
                            Compétences mobilisées (référentiel BUT)
                        </div>
                        <div className="collapse-content">
                            <div className="space-y-2">
                                {project.competences.map(comp => (
                                    <div key={comp.label}>
                                        <span className="text-sm font-bold text-primary">{comp.label} : </span>
                                        <span className="text-sm text-base-content/80">{comp.detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <div className="card-actions justify-end mt-auto pt-4">
                    {total > 0 && (
                        <button
                            className="btn btn-sm btn-ghost"
                            onClick={() => {
                                setCurrent(0)
                                dialogRef.current?.showModal()
                            }}
                        >
                            <Images className="w-4 h-4" aria-hidden="true" />
                            Captures
                        </button>
                    )}

                    {project.demoLink && (
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-accent">
                            Démo
                        </a>
                    )}

                    {project.repos.map(repo => (
                        <a
                            key={repo.url}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-primary"
                        >
                            <img src={github} alt="" className="w-4 h-4" />
                            {repo.label}
                        </a>
                    ))}
                </div>
            </div>

            {total > 0 && (
                <dialog ref={dialogRef} className="modal">
                    <div className="modal-box max-w-3xl">
                        <h3 className="font-bold text-lg mb-4">{project.title}</h3>
                        <img
                            src={project.screenshots[current]}
                            alt={`${project.title} - capture ${current + 1} sur ${total}`}
                            loading="lazy"
                            className="w-full object-contain rounded-lg"
                        />
                        <div className="flex items-center justify-between mt-4">
                            <button className="btn btn-circle btn-sm" onClick={previous} aria-label="Capture précédente">
                                ❮
                            </button>
                            <span className="text-sm">
                                {current + 1} / {total}
                            </span>
                            <button className="btn btn-circle btn-sm" onClick={next} aria-label="Capture suivante">
                                ❯
                            </button>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>fermer</button>
                    </form>
                </dialog>
            )}
        </article>
    )
}

const Projets = () => {
    return (
        <section className="p-10 mb-10 md:mb-32" id="Projets">
            <Titre titre="Mes Projets" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-6xl mx-auto">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projets