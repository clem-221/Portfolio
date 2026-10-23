interface TitreProps {
  titre: string;
}

const Titre = ({titre}: TitreProps) => {
  return (
    <div>
      <h2 className="text-3xl font-bold uppercase mb-5 text-center text-primary">{titre}</h2>
    </div>
  )
}

export default Titre

