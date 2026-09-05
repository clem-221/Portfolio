# Portfolio – Clément SENE

Portfolio personnel développé avec **React** et **TypeScript**, pour présenter mon parcours, mes projets et me faire contacter pour une alternance en développement web. Ce projet a aussi été l'occasion de mettre en pratique React de façon concrète, à travers une vraie interface avec plusieurs sections, des données statiques à afficher dynamiquement, et des composants interactifs (menu mobile, carrousel, accordéons).

## Stack technique

- [React](https://react.dev/) + TypeScript
- [Vite](https://vite.dev/) – bundler et serveur de développement
- [Tailwind CSS](https://tailwindcss.com/) – styles utilitaires
- [daisyUI](https://daisyui.com/) – composants Tailwind (cards, badges, timeline, modal, footer...)
- [lucide-react](https://lucide.dev/) – icônes

## Sections du site

Le site est composé d'une page unique (`Home`) avec une navigation par ancres, découpée en sections :

| Section | Composant | Contenu |
|---|---|---|
| Accueil | `Home.tsx` | Présentation courte, photo, bouton vers le contact |
| À propos | `AboutMe.tsx` | Présentation de mon profil (frontend, backend, UI/UX) et grille des technologies maîtrisées |
| Parcours académique | `ParcoursAcademique.tsx` | Frise chronologique (timeline daisyUI) de mes formations |
| Expériences professionnelles | `ExperiencesProfessionnelles.tsx` | Stages/jobs, missions et compétences développées pour chacun |
| Mes Projets | `Projets.tsx` | Cartes de projets avec technologies, missions, compétences (accordéons) et captures d'écran (carrousel en modal) |
| Contact | `Contact.tsx` | Lien `mailto:` pour me contacter directement par email |

D'autres composants transverses :
- `BarreNavigation.tsx` : barre de navigation responsive (menu burger sur mobile), avec lien de téléchargement du CV
- `Titre.tsx` : composant réutilisable pour les titres de section
- `Footer.tsx` : pied de page avec liens LinkedIn et GitHub

## Ce que j'ai mis en pratique

- Découpage d'une interface en composants React réutilisables (`Titre`, cartes de projet, sections)
- Typage des props avec des interfaces TypeScript (ex. `TitreProps`)
- Affichage de listes de données via `.map()` (formations, projets, technologies, missions, compétences)
- Gestion d'un état local avec `useState` pour le menu de navigation mobile
- Utilisation de composants daisyUI (timeline, card, badge, collapse, modal, carousel, footer)
- Navigation interne par ancres (`#Home`, `#About`, etc.)
- Mise en place d'une modale avec carrousel d'images pour afficher les captures d'écran d'un projet

## Lancer le projet en local

```bash
npm install
npm run dev
```

Le site est alors accessible sur `http://localhost:5173` (port par défaut de Vite).

Autres commandes utiles :

```bash
npm run build    # Génère la version de production dans /dist
npm run preview  # Prévisualise le build de production en local
```

## Structure du projet

```
src/
├── components/
│   ├── BarreNavigation.tsx
│   ├── Home.tsx
│   ├── AboutMe.tsx
│   ├── ParcoursAcademique.tsx
│   ├── ExperiencesProfessionnelles.tsx
│   ├── Projets.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Titre.tsx
└── assets/
    ├── techno/        # Logos des technologies et réseaux sociaux
    ├── companies/      # Logos des entreprises (expériences pro)
    ├── projects/        # Captures d'écran des projets
    └── photo_portrait.jpg
```

## Pistes d'amélioration

- Externaliser les données statiques (projets, formations, expériences) dans des fichiers JSON ou un CMS headless, plutôt que codées en dur dans les composants
- Ajouter un formulaire de contact fonctionnel (au lieu du lien `mailto:`)
- Ajouter des animations au scroll pour dynamiser l'affichage des sections
- Rendre les images responsives avec des formats optimisés (ex. `srcset`, WebP/AVIF)

## Auteur

**Clément SENE** – [LinkedIn](https://www.linkedin.com/in/clement-sene/) · [GitHub](https://github.com/clem-221)
