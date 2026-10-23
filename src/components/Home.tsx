import { Mail, Download } from "lucide-react"
import portrait from '../assets/photo_portrait.jpg'
import { CV_PATH } from "../constants"

const Home = () => {
  return (
    <section
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 p-4 md:my-16 mx-10 md:min-h-[80vh]"
      id="Home"
    >
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Bonjour,
          <br /> je suis <span className="text-primary">Clément SENE</span>
        </h1>

        <p className="text-xl md:text-2xl font-semibold text-center md:text-left mt-4">
          Étudiant en BUT 3 Informatique, disponible pour un stage (14 à 16 semaines) en développement web full stack à partir du 08 mars 2027.
        </p>

        <p className="text-base md:text-lg text-center md:text-left mt-2 text-base-content/70">
          Java/Spring Boot · Angular · React · TypeScript · Python/Flask
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <a href="#Contact" className="btn btn-primary">
            <Mail className="w-5 h-5" />
            Contactez-moi
          </a>
          <a href={CV_PATH} download className="btn btn-outline">
            <Download className="w-5 h-5" />
            Télécharger mon CV
          </a>
        </div>
      </div>

      <img
        src={portrait}
        alt="Portrait de Clément SENE"
        width={320}
        height={320}
        fetchPriority="high"
        className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl"
      />
    </section>
  )
}

export default Home