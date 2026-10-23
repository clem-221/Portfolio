import Titre from "./Titre"
import { GraduationCap } from "lucide-react"

interface Formation {
  id: number
  titre: string
  etablissement: string
  periode: string
  enCours?: boolean
  details?: string[]
}

const formations: Formation[] = [
  {
    id: 1,
    titre: "BUT 3 Informatique",
    etablissement: "IUT de Villetaneuse - Université Sorbonne Paris Nord",
    periode: "2026 - 2027",
    enCours: true,
    details: [
      "Parcours : Réalisation d'applications web (conception, développement, validation)",
      "Projet : SAÉ de recommandation de voyages - Flask, React, Docker (en cours)",
    ],
  },
  {
    id: 2,
    titre: "BUT 2 Informatique & Science des Données",
    etablissement: "IUT de Villetaneuse - Université Sorbonne Paris Nord",
    periode: "2025 - 2026",
    details: [
      "Stage de développeur web WordPress chez Otoradio (8 semaines)",
      "SAÉ de supervision des lecteurs en gares (Angular, TypeScript, PHP, MySQL, API Volumio, Snapcast)",
    ],
  },
  {
    id: 3,
    titre: "Licence Informatique (L0 à L2)",
    etablissement: "Université Sorbonne Paris Nord",
    periode: "2021 - 2025",
  },
]

const ParcoursAcademique = () => {
  return (
    <section className="p-10 mb-10 md:mb-32" id="ParcoursAcademique">
      <Titre titre="Parcours académique" />

      <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact max-w-3xl mx-auto mt-12">
        {formations.map((formation, index) => (
          <li key={formation.id}>
            {index !== 0 && <hr className="bg-primary" />}

            <div className="timeline-middle">
              <GraduationCap className="text-primary w-5 h-5" aria-hidden="true" />
            </div>

            <div
              className={`${
                index % 2 === 0 ? "timeline-start md:text-end" : "timeline-end"
              } mb-10`}
            >
              <div className="flex items-center gap-2 md:justify-end">
                <time className="font-mono italic text-sm">{formation.periode}</time>
                {formation.enCours && (
                  <span className="badge badge-primary badge-sm">En cours</span>
                )}
              </div>

              <h3 className="text-lg font-black">{formation.titre}</h3>
              <p className="text-base-content/80">{formation.etablissement}</p>

              {formation.details && formation.details.length > 0 && (
                <ul className="mt-2 text-sm text-base-content/70 list-disc list-inside space-y-1">
                  {formation.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>

            {index !== formations.length - 1 && <hr className="bg-primary" />}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ParcoursAcademique