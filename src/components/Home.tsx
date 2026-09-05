import { Mail } from "lucide-react"
import portrait from '../assets/photo_portrait.jpg'

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center items-center p-4 md:my-32 mx-10 md:h-screen" id="Home">
      
      <div className="flex flex-col ">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0 ">
            Bonjour, 
            <br /> je suis <span className="text-accent">Clément SENE</span>,
            <br />
        </h1>
        <p className="text-lg md:text-xl text-center md:text-left mt-4 md:mt-3 md:mr-2">
            développeur informatique junior passionné par les technologies web et mobile.
        </p>

        <a href="#Contact" className="btn btn-primary md:w-fit">
            <Mail className="w-5 h-5"/>
            <span className="ml-2">Contactez-moi</span>
        </a>

      </div>
      
      <div>
        <img src={portrait} alt="Clément SENE" className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mb-4 md:mb-0 shadow-2xl"/>
      </div>

    </div>
  )
}

export default Home
