import Titre from "./Titre"
import { GraduationCap } from "lucide-react"

const formations = [
  {
    id: 1,
    titre: "Licence 0 Parcours aménagé Informatique",
    etablissement: "Université Sorbonne Paris Nord",
    periode: "2021 - 2022",
  },
  {
    id: 2,
    titre: "Licence 1 Informatique",
    etablissement: "Université Sorbonne Paris Nord",
    periode: "2022 - 2023",
  },
  {
    id: 3,
    titre: "Licence 2 Informatique",
    etablissement: "Université Sorbonne Paris Nord",
    periode: "2023 - 2025",
  },
  {
    id: 4,
    titre: "BUT 2 Informatique & Science des Données",
    etablissement: "IUT de Villetaneuse - Université Sorbonne Paris Nord",
    periode: "2025 - 2026",
  },
  {
    id: 5,
    titre: "BUT 3 Informatique",
    etablissement: "IUT de Villetaneuse - Université Sorbonne Paris Nord",
    periode: "2026 - 2027",
  },
]

const ParcoursAcademique = () => {
  return (
    <div className="flex flex-col p-10 mb-10 md:mb-32" id="ParcoursAcademique">
      <Titre titre="Parcours académique" />

      <ul className="timeline timeline-vertical timeline-snap-icon max-w-2xl mx-auto mt-16">
        {formations.map((formation, index) => (
          <li key={formation.id}>
            {index !== 0 && <hr className="bg-primary" />}
            <div className="timeline-middle">
              <GraduationCap className="text-primary w-5 h-5" />
            </div>
            <div
              className={`${
                index % 2 === 0 ? "timeline-start md:text-end" : "timeline-end"
              } mb-10`}
            >
              <time className="font-mono italic text-sm">{formation.periode}</time>
              <div className="text-lg font-black">{formation.titre}</div>
              {formation.etablissement}
            </div>
            {index !== formations.length - 1 && <hr className="bg-primary" />}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ParcoursAcademique