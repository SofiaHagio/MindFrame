function Dashboard({ materias }) {
  // números rápidos pra dar uma visão geral do acervo — nada é salvo
  // à parte, tudo é recalculado em cima do array de matérias mesmo
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
    <div className="dashboard-cards">
      {dados.map(([titulo, valor]) => (
        <div className="dashboard-card" key={titulo}>
          <span>{titulo}</span>
          <strong>{valor}</strong>
        </div>
      ))}
    </div>
  )
}

export default Dashboard
