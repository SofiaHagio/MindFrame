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
      <div className="mt-4 rounded-xl border border-dashed border-white/10 px-5 py-8 text-center text-mudo">
        <strong className="text-texto">Nenhum favorito ainda.</strong>
        <p>Use a estrela nos materiais importantes para encontrá-los rapidamente antes de uma prova.</p>
      </div>
    )
  }

  return (
    <div>
      <div className="rounded-xl border border-borda bg-superficie p-4">
        <strong className="text-sm">Seus materiais importantes</strong>
        <p className="mt-1 text-xs text-mudo">{favoritos.length} item(ns) marcado(s) para revisão rápida.</p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
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
