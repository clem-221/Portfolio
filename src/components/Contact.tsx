import { Mail } from "lucide-react"
import Titre from "./Titre"

const Contact = () => {
  return (
    <div className="bg-base-200 p-10 mb-10 flex flex-col justify-center" id="Contact">
      <Titre titre="Contact" />

      <div className="flex flex-col items-center gap-6 mt-10">
        <p className="text-lg md:text-xl text-center max-w-xl">
          Vous avez un projet, une opportunité d'alternance ou simplement une question ?
          N'hésitez pas à me contacter directement par email.
        </p>
        <a
        
          href="mailto:clement.sene@edu.univ-paris13.fr?subject=Contact via votre portfolio"
          className="btn btn-accent btn-lg gap-2"
        >
          <Mail className="w-5 h-5" />
          Me contacter par email
        </a>
      </div>
    </div>
  )
}

export default Contact