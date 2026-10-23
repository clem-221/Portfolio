import { useState } from "react"
import { Mail, Copy, Check, Download, ExternalLink } from "lucide-react"
import Titre from "./Titre"
import { EMAIL, LINKEDIN_URL, GITHUB_URL, CV_PATH } from "../constants"

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Presse-papiers indisponible : l'adresse reste affichée et sélectionnable
    }
  }

  const subject = encodeURIComponent("Contact via votre portfolio")

  return (
    <section className="bg-base-200 p-10 md:py-20" id="Contact">
      <Titre titre="Contact" />

      <div className="flex flex-col items-center gap-6 mt-10 text-center">
        <p className="text-lg md:text-xl max-w-xl">
          Je recherche une alternance en développement web full stack, disponible dès que possible.
          N'hésitez pas à m'écrire pour échanger sur mon profil et mes projets.
        </p>

        <p className="font-mono text-base md:text-lg select-all break-all">{EMAIL}</p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href={`mailto:${EMAIL}?subject=${subject}`} className="btn btn-primary">
            <Mail className="w-5 h-5" aria-hidden="true" />
            M'écrire un email
          </a>

          <button type="button" onClick={copyEmail} className="btn btn-outline">
            {copied ? (
              <Check className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Copy className="w-5 h-5" aria-hidden="true" />
            )}
            {copied ? "Adresse copiée" : "Copier l'adresse"}
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? "Adresse copiée dans le presse-papiers" : ""}
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-ghost">
            LinkedIn
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-ghost">
            GitHub
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
          <a href={CV_PATH} download className="btn btn-sm btn-ghost">
            Mon CV (PDF)
            <Download className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact