import { useState } from 'react'
import AdicionarFotoForm from './AdicionarFotoForm.jsx'
import FotoCard from './FotoCard.jsx'

function MateriaCard({
  materia,
  onAdicionarFoto,
  onRemoverFoto,
  onExcluirMateria,
  onAlternarFavorito,
  onSalvarAnotacao,
}) {
  const [adicionando, setAdicionando] = useState(false)

  function confirmarExclusao() {
    const mensagem = materia.fotos.length > 0
      ? `Excluir ${materia.nome}? Os materiais serão enviados para a lixeira.`
      : `Excluir ${materia.nome}?`

    if (window.confirm(mensagem)) {
      onExcluirMateria(materia.id)
    }
  }

  return (
    <section
      className="rounded-xl border border-l-4 border-borda bg-superficie p-6"
      style={{ borderLeftColor: materia.cor }}
    >
      <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
        <div>
          <span className="mr-2 inline-block size-2 rounded-full" style={{ backgroundColor: materia.cor }} />
          <h3 className="inline font-display text-base font-bold">{materia.nome}</h3>
          <small className="mt-1 block text-xs text-mudo">{materia.fotos.length} material(is) • criada em {materia.criadaEm}</small>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="cursor-pointer rounded-full border border-verde/50 px-3 py-2 text-xs text-verde hover:bg-verde/10"
            onClick={() => setAdicionando(!adicionando)}
          >
            + Adicionar
          </button>
          <button className="cursor-pointer p-2 text-xs text-perigo" onClick={confirmarExclusao}>Excluir matéria</button>
        </div>
      </div>

      {adicionando && (
        <AdicionarFotoForm
          materiaId={materia.id}
          onAdicionarFoto={onAdicionarFoto}
          onCancelar={() => setAdicionando(false)}
        />
      )}

      {materia.fotos.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-white/10 p-4 text-center text-sm text-mudo">
          <p>Nenhum material salvo nesta matéria ainda.</p>
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {materia.fotos.map((foto) => (
            <FotoCard
              key={foto.id}
              foto={foto}
              cor={materia.cor}
              onRemover={() => onRemoverFoto(materia.id, foto.id)}
              onAlternarFavorito={() => onAlternarFavorito(materia.id, foto.id)}
              onSalvarAnotacao={(anotacao) => onSalvarAnotacao(materia.id, foto.id, anotacao)}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default MateriaCard
