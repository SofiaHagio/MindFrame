function Dashboard({ materias }) {
  const totalFotos = materias.reduce((total, materia) => total + materia.fotos.length, 0)
  const totalFavoritos = materias.reduce((total, materia) => {
    return total + materia.fotos.filter((foto) => foto.favorita).length
  }, 0)
  const media = materias.length > 0 ? Math.round(totalFotos / materias.length) : 0
  const maiorPasta = materias.length > 0
    ? Math.max(...materias.map((materia) => materia.fotos.length))
    : 0

  const dados = [
    ['Matérias', materias.length],
    ['Materiais', totalFotos],
    ['Favoritos', totalFavoritos],
    ['Média por matéria', media],
    ['Maior pasta', maiorPasta],
  ]

  return (
    <div className="mt-10 mb-6 grid grid-cols-2 gap-4 lg:grid-cols-5">
      {dados.map(([titulo, valor]) => (
        <div className="rounded-xl border border-borda bg-superficie2 p-5" key={titulo}>
          <span className="mb-1 block text-xs text-mudo">{titulo}</span>
          <strong className="font-display text-2xl">{valor}</strong>
        </div>
      ))}
    </div>
  )
}

export default Dashboard
