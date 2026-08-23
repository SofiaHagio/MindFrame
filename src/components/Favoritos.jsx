import FotoCard from './FotoCard.jsx'

function Favoritos({ materias, onRemoverFoto, onAlternarFavorito, onSalvarAnotacao }) {
  const favoritos = []

  materias.forEach((materia) => {
    materia.fotos.forEach((foto) => {
      if (foto.favorita) {
        favoritos.push({
          foto,
          materiaId: materia.id,
          materiaNome: materia.nome,
          cor: materia.cor,
        })
      }
    })
  })

  if (favoritos.length === 0) {
    return (
      <div className="estado-vazio">
        <strong>Nenhum favorito ainda.</strong>
        <p>Use a estrela nos materiais importantes para encontrá-los rapidamente antes de uma prova.</p>
      </div>
    )
  }

  return (
    <div className="favoritos-area">
      <div className="favoritos-intro">
        <strong>Seus materiais importantes</strong>
        <p>{favoritos.length} item(ns) marcado(s) para revisão rápida.</p>
      </div>

      <div className="grade-fotos">
        {favoritos.map(({ foto, materiaId, materiaNome, cor }) => (
          <FotoCard
            key={`${materiaId}-${foto.id}`}
            foto={foto}
            cor={cor}
            materiaNome={materiaNome}
            onRemover={() => onRemoverFoto(materiaId, foto.id)}
            onAlternarFavorito={() => onAlternarFavorito(materiaId, foto.id)}
            onSalvarAnotacao={(anotacao) => onSalvarAnotacao(materiaId, foto.id, anotacao)}
          />
        ))}
      </div>
    </div>
  )
}

export default Favoritos
