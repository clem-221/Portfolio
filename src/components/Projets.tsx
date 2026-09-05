import Titre from "./Titre"
import github from '../assets/techno/github-light.webp';
import { Images } from "lucide-react";

// Screenshots pour les projets qui en ont
import supervision1 from "../assets/projects/SAE4_devweb/Supervision_lecteurs_gares_admin_1.png";
import supervision2 from '../assets/projects/SAE4_devweb/Supervision_lecteurs_admin_3.png';
import supervision3 from '../assets/projects/SAE4_devweb/Supervision_lecteurs_gares_commercial.png';
import supervision4 from '../assets/projects/SAE4_devweb/Supervision_lecteurs_gares_retail.png';

const Projets = () => {

    const projects = [
        {
            id: 1,
            title: 'Supervision des lecteurs en gares',
            description: "Application web de supervision audio synchrone/asynchrone de lecteurs multi-sites en gare, réalisée en groupe de 3. Chef de projet et responsable frontend.",
            technologies: ['Angular', 'TypeScript', 'PHP', 'Python', 'Volumio', 'Snapcast'],
            repoLink: 'https://github.com/clem-221/sae-supervision-lecteurs-gares',
            screenshots: [supervision1, supervision2, supervision3, supervision4],
            missions: [
                "Développement du frontend en Angular, divisé en composants réutilisables reliés par des routes",
                "Mise en place d'un calendrier en glisser-déposer pour la planification des playlists par gare",
                "Intégration de l'API Volumio (pochette, titre, auteur, playlist en cours, commandes play/pause/stop/volume)",
                "Configuration des boutons play/stop dans la colonne \"Action\" de la Supervision Technique des Gares",
                "Coordination de l'équipe de 3 en tant que chef de projet",
            ],
            competences: [
                { label: "Réaliser", detail: "Développement des composants Angular, du calendrier drag-and-drop et de l'intégration de l'API Volumio pour l'affichage et le contrôle des lecteurs." },
                { label: "Optimiser", detail: "Découpage de l'application en composants Angular indépendants et réutilisables, communiquant via des imports de classes plutôt qu'un code monolithique." },
                { label: "Administrer", detail: "Configuration de l'infrastructure audio Snapcast (snapserver sur l'appareil master, snapclient sur les appareils clients) et des instances Volumio associées." },
                { label: "Gérer", detail: "Répartition et suivi des rôles entre les 3 membres (base de données/authentification, backend métier, frontend)." },
                { label: "Conduire", detail: "Pilotage du projet en tant que chef de projet : définition des 3 profils utilisateurs cibles (admin IT, responsable retail, commercial) et des besoins associés." },
                { label: "Collaborer", detail: "Travail articulé avec Fousseynou (base de données/rôles) et Hani (backend métier et visuel du lecteur), notamment sur l'intégration commune de l'API Volumio." },
            ],
        },
        {
            id: 2,
            title: 'EXAPUNK Java Game',
            description: "Reproduction simplifiée du jeu EXAPUNKS en Java, réalisée en groupe de 5. Responsable de l'interface graphique (Swing).",
            technologies: ['Java', 'Swing'],
            repoLink: 'https://github.com/clem-221/exapunk-java-game',
            screenshots: [],
            missions: [
                "Conception et développement de l'interface graphique complète avec Java Swing",
                "Implémentation des éditeurs de code assembleur, de la zone de jeu et du dessin des robots",
                "Mise en place des boutons RUN/STEP/STOP/PAUSE avec raccourcis clavier",
                "Ajout de la musique de fond et des messages de fin de mission",
                "Développement d'une classe de sauvegarde de fichiers pour l'exécution du code assembleur",
            ],
            competences: [
                { label: "Réaliser", detail: "Implémentation de 7 classes Java (Editeur_de_texte, ZoneMission, MusiqueDeFond, Zone_de_jeu, ExapunkRobot, Zone_boutons, Exapunk) constituant l'intégralité de l'interface graphique du jeu." },
                { label: "Optimiser", detail: "Redéfinition de la taille des zones d'édition, ajout du scroll, ajustement des couleurs/tailles des boutons pour une interface plus lisible." },
                { label: "Administrer", detail: "Gestion des fichiers de sauvegarde du code assembleur (via la classe SauvegarderTexteAssembleur) utilisés ensuite par le moteur d'exécution." },
                { label: "Gérer", detail: "Prise en charge autonome du rôle \"Interface Graphique\" au sein du groupe, avec auto-formation sur Swing via un ouvrage de référence et des exercices ciblés." },
                { label: "Conduire", detail: "Progression méthodique depuis la découverte de JFrame jusqu'à la gestion complète des interactions utilisateur (clics, raccourcis clavier, affichage des messages de résultat)." },
                { label: "Collaborer", detail: "Coordination avec Badr (intégration de sa classe Map dans la zone de jeu), Idriss (fichiers de sauvegarde nécessaires à l'exécution du code), Kaba SAKHO (Chef de projet) et accompagnement par Souleymane FALL (tuteur GUI)." },
            ],
        },
        {
            id: 3,
            title: 'API REST avec Spring Boot',
            description: "API REST de gestion d'employés (CRUD complet) développée avec Spring Boot et Spring Data JPA, dans le cadre du cours OpenClassrooms.",
            technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'H2', 'Maven', 'JUnit'],
            repoLink: 'https://github.com/clem-221/api_springboot',
            screenshots: [],
            missions: [
                "Structuration du projet en couches (controller, service, repository, model)",
                "Création d'une entité JPA mappée sur une base H2 en mémoire",
                "Développement des 5 endpoints REST (GET, GET/id, POST, PUT, DELETE)",
                "Initialisation de données via script SQL et tests unitaires avec MockMvc",
            ],
            competences: [
                { label: "Réaliser", detail: "Développement complet d'une API REST CRUD avec Spring Data JPA, incluant les 5 endpoints de gestion des employés." },
                { label: "Optimiser", detail: "Utilisation de Lombok pour réduire le code répétitif et de CrudRepository pour éviter d'écrire du SQL manuel." },
                { label: "Administrer", detail: "Configuration de la base H2 en mémoire, de sa console d'administration et de l'environnement Maven (wrapper inclus)." },
                { label: "Gérer", detail: "Identification autonome des pistes d'amélioration (validation des champs, DTO pour ne pas exposer le mot de passe, gestion des erreurs HTTP)." },
                { label: "Conduire", detail: "Auto-formation structurée via le parcours OpenClassrooms, de la découverte de Spring Boot jusqu'à l'écriture de tests." },
                { label: "Collaborer", detail: "Projet individuel, réalisé en suivant les ressources et le cadre pédagogique fournis par OpenClassrooms." },
            ],
        },
        {
            id: 4,
            title: 'Application web Spring Boot (Thymeleaf)',
            description: "Interface web Thymeleaf consommant l'API REST du projet précédent, sans base de données propre — toute la persistance passe par l'API.",
            technologies: ['Java', 'Spring Boot', 'Thymeleaf', 'RestTemplate', 'Maven'],
            repoLink: 'https://github.com/clem-221/application-web-springboot',
            screenshots: [],
            missions: [
                "Développement d'une application MVC avec Thymeleaf consommant l'API via RestTemplate",
                "Mise en place d'un pattern Proxy pour isoler la consommation de l'API",
                "Externalisation de la configuration de l'URL de l'API via @ConfigurationProperties",
                "Gestion d'un formulaire de création/modification et d'une règle métier (mise en majuscule du nom)",
            ],
            competences: [
                { label: "Réaliser", detail: "Développement de l'interface Thymeleaf (liste, formulaire, suppression) reliée à l'API REST développée dans le projet précédent." },
                { label: "Optimiser", detail: "Isolation de la logique d'appel API dans une couche Proxy dédiée plutôt que d'appeler l'API directement depuis le service." },
                { label: "Administrer", detail: "Configuration de la communication entre les deux applications (webapp sur le port 9001, API sur le port 9000) via des propriétés externalisées." },
                { label: "Gérer", detail: "Identification des limites actuelles (pas de gestion d'erreur si l'API est indisponible) et des pistes d'évolution (migration vers RestClient/WebClient)." },
                { label: "Conduire", detail: "Enchaînement logique avec le projet précédent : cette application réutilise l'API développée en amont comme unique source de données." },
                { label: "Collaborer", detail: "Réutilisation et intégration avec son propre projet précédent (api_springboot), assurant la cohérence entre les deux applications." },
            ],
        },
    ];

    return (
        <div className="p-10 mb-10 md:mb-32" id="Projets">
            <Titre titre="Mes Projets" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {projects.map(project => (
                    <div key={project.id} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="card-body">
                            <h3 className="card-title">{project.title}</h3>
                            <p className="text-sm text-base-content/70">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="badge badge-outline badge-primary">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="collapse collapse-arrow bg-base-200 mt-3">
                                <input type="checkbox" />
                                <div className="collapse-title text-sm font-semibold">
                                    Tâches réalisées
                                </div>
                                <div className="collapse-content">
                                    <ul className="list-disc list-inside text-sm text-base-content/70 space-y-1">
                                        {project.missions.map((mission, index) => (
                                            <li key={index}>{mission}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow bg-base-200 mt-2">
                                <input type="checkbox" />
                                <div className="collapse-title text-sm font-semibold">
                                    Compétences acquises
                                </div>
                                <div className="collapse-content">
                                    <div className="space-y-2">
                                        {project.competences.map((comp, index) => (
                                            <div key={index}>
                                                <span className="text-sm font-bold text-accent">{comp.label} : </span>
                                                <span className="text-sm text-base-content/70">{comp.detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="card-actions justify-end mt-4">
                                {project.screenshots.length > 0 && (
                                    <button
                                        className="btn btn-sm btn-ghost"
                                        onClick={() => (document.getElementById(`modal-${project.id}`) as HTMLDialogElement)?.showModal()}
                                    >
                                        <Images className="w-4 h-4" />
                                        Captures
                                    </button>
                                )}

                                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                                    <img src={github} alt="GitHub" className="w-4 h-4" />
                                    Code
                                </a>
                            </div>
                        </div>

                        {project.screenshots.length > 0 && (
                            <dialog id={`modal-${project.id}`} className="modal">
                                <div className="modal-box max-w-3xl">
                                    <h3 className="font-bold text-lg mb-4">{project.title}</h3>
                                    <div className="carousel w-full rounded-lg">
                                        {project.screenshots.map((shot, index) => (
                                            <div key={index} id={`slide-${project.id}-${index}`} className="carousel-item relative w-full">
                                                <img src={shot} alt={`${project.title} - capture ${index + 1}`} className="w-full object-contain" />
                                                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                                                    <a href={`#slide-${project.id}-${(index - 1 + project.screenshots.length) % project.screenshots.length}`} className="btn btn-circle btn-sm">❮</a>
                                                    <a href={`#slide-${project.id}-${(index + 1) % project.screenshots.length}`} className="btn btn-circle btn-sm">❯</a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>fermer</button>
                                </form>
                            </dialog>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projets