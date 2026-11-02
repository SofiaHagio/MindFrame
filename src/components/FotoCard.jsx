import { useState } from 'react'

function FotoCard({
  foto,
  cor,
  materiaNome,
  onRemover,
  onAlternarFavorito,
  onSalvarAnotacao,
}) {
  const [editandoAnotacao, setEditandoAnotacao] = useState(false)
  const [anotacao, setAnotacao] = useState(foto.anotacao || '')

  const botaoTexto = 'cursor-pointer p-2 text-xs text-mudo hover:text-texto'

  function salvarAnotacao() {
    onSalvarAnotacao(anotacao.trim())
    setEditandoAnotacao(false)
  }

  function cancelarAnotacao() {
    setAnotacao(foto.anotacao || '')
    setEditandoAnotacao(false)
  }

  return (
    <article className="relative overflow-hidden rounded-xl border border-borda bg-fundo">
      <div className="h-40 overflow-hidden border-b-2 bg-black" style={{ borderColor: cor }}>
        {foto.imagem ? (
          <img className="size-full object-cover" src={foto.imagem} alt={foto.tema} />
        ) : (
          <div className="flex size-full flex-col items-center justify-center gap-1 text-mudo">
            <span className="text-2xl">📄</span>
            <small className="text-sm">Sem imagem</small>
          </div>
        )}

        <button
          className={`absolute top-2.5 right-2.5 flex size-9 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-fundo/80 text-xl transition duration-200 hover:scale-105 hover:border-white/50 ${
            foto.favorita ? 'text-ouro' : 'text-white'
          }`}
          onClick={onAlternarFavorito}
          title={foto.favorita ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          aria-label={foto.favorita ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          {foto.favorita ? '★' : '☆'}
        </button>
      </div>

      <div className="p-3">
        {materiaNome && <small className="mb-1.5 block text-xs text-verde">{materiaNome}</small>}
        <span
          className="mb-2 inline-block max-w-full truncate rounded-full px-2 py-1 text-xs font-bold text-fundo"
          style={{ backgroundColor: cor }}
        >{foto.tema}</span>
        <p className="truncate text-xs" title={foto.nome}>{foto.nome}</p>
        <small className="text-xs text-mudo">{foto.data}</small>

        {foto.anotacao && !editandoAnotacao && (
          <div className="mt-3 rounded-md border-l-2 border-roxo bg-roxo/10 px-2.5 py-2">
            <strong className="mb-1 block text-xs">Anotação</strong>
            <p className="text-xs text-mudo">{foto.anotacao}</p>
          </div>
        )}

        {editandoAnotacao && (
          <div className="mt-3">
            <label className="mb-1.5 block text-xs text-mudo" htmlFor={`anotacao-${foto.id}`}>Anotação</label>
            <textarea
              className="min-h-24 w-full resize-y rounded-lg border border-borda bg-superficie2 p-2.5 text-xs outline-none focus:border-roxo/70"
              id={`anotacao-${foto.id}`}
              value={anotacao}
              onChange={(e) => setAnotacao(e.target.value)}
              placeholder="Ex.: revisar esse exercício antes da prova"
              maxLength={300}
            />
            <small className="mt-1 block text-right text-xs text-mudo">{anotacao.length}/300</small>

            <div className="mt-2 flex items-center gap-1.5">
              <button
                className="cursor-pointer rounded-full border border-verde/50 px-3 py-2 text-xs text-verde hover:bg-verde/10"
                onClick={salvarAnotacao}
              >
                Salvar
              </button>
              <button className={botaoTexto} onClick={cancelarAnotacao}>Cancelar</button>
            </div>
          </div>
        )}

        <div className="mt-3 flex items-center justify-between gap-1.5 border-t border-borda pt-2">
          <button className={botaoTexto} onClick={() => setEditandoAnotacao(true)}>
            {foto.anotacao ? 'Editar anotação' : '+ Anotação'}
          </button>
          <button className="cursor-pointer p-2 text-xs text-perigo" onClick={onRemover}>Remover</button>
        </div>
      </div>
    </article>
  )
}

export default FotoCard
