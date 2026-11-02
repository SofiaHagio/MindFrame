import { useState } from 'react'

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function buscarMateriais(materias, busca) {
  const termo = normalizar(busca.trim())
  if (!termo) return []

  const encontrados = []

  materias.forEach((materia) => {
    materia.fotos.forEach((foto) => {
      const conteudo = normalizar(
        `${materia.nome} ${foto.tema} ${foto.nome} ${foto.anotacao || ''}`
      )

      if (conteudo.includes(termo)) {
        encontrados.push({ ...foto, materiaNome: materia.nome, cor: materia.cor })
      }
    })
  })

  return encontrados
}

function Busca({ materias }) {
  const [busca, setBusca] = useState('')

  const resultados = buscarMateriais(materias, busca)

  return (
    <div className="rounded-xl border border-borda bg-superficie p-4">
      <label className="mb-1.5 block text-xs font-medium text-mudo" htmlFor="busca-geral">Buscar no acervo</label>
      <div className="flex items-center rounded-lg border border-borda bg-fundo pl-3 focus-within:border-roxo/70">
        <span className="text-xl text-mudo">⌕</span>
        <input
          className="w-full min-w-0 bg-transparent p-3 outline-none"
          id="busca-geral"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Digite matéria, tema, arquivo ou anotação..."
        />
      </div>

      {busca.trim() && (
        <div className="mt-4">
          <p className="mb-2.5 text-sm text-mudo"><strong>{resultados.length}</strong> resultado(s) encontrado(s)</p>

          {resultados.length === 0 ? (
            <div className="mt-4 rounded-xl border border-dashed border-white/10 p-4 text-center text-sm text-mudo">Nenhum material encontrado.</div>
          ) : (
            <div className="grid gap-2">
              {resultados.map((foto) => (
                <article
                  className="flex flex-wrap items-center gap-3 rounded-lg bg-superficie2 p-3"
                  key={`${foto.materiaNome}-${foto.id}`}
                >
                  <span className="size-2.5 shrink-0 rounded-full" style={{ backgroundColor: foto.cor }} />
                  <div className="min-w-0 flex-1">
                    <strong className="wrap-anywhere">{foto.favorita && '★ '}{foto.tema}</strong>
                    <p className="text-xs text-mudo wrap-anywhere">{foto.materiaNome} • {foto.nome}</p>
                    {foto.anotacao && <p className="mt-1 text-xs text-mudo wrap-anywhere">Anotação: {foto.anotacao}</p>}
                  </div>
                  <small className="w-full pl-6 text-xs text-mudo md:w-auto md:pl-0">{foto.data}</small>
                </article>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Busca
