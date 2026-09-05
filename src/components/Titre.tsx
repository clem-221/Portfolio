interface TitreProps {
  titre: string;
}

const Titre = ({titre}: TitreProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold uppercase mb-5 text-center text-primary">{titre}</h1>
    </div>
  )
}

export default Titre

