import { useState } from 'react'

// tira acento pra buscar "materia" e achar "matéria" também
// (NFD separa a letra do acento, aí o regex some com o acento sozinho)
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

// função separada (fora do componente) que faz a busca de verdade —
// assim não precisa de useMemo, é só chamar de novo a cada render
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

  // recalcula a cada render — a lista de matérias não costuma ser grande
  // nesse projeto, então não precisa de memoização pra isso ficar rápido
  const resultados = buscarMateriais(materias, busca)

  return (
    <div className="busca-area">
      <label htmlFor="busca-geral">Buscar no acervo</label>
      <div className="busca-input">
        <span>⌕</span>
        <input
          id="busca-geral"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Digite matéria, tema, arquivo ou anotação..."
        />
      </div>

      {busca.trim() && (
        <div className="resultados-busca">
          <p><strong>{resultados.length}</strong> resultado(s) encontrado(s)</p>

          {resultados.length === 0 ? (
            <div className="estado-vazio pequeno-vazio">Nenhum material encontrado.</div>
          ) : (
            <div className="lista-resultados">
              {resultados.map((foto) => (
                <article key={`${foto.materiaNome}-${foto.id}`}>
                  <span className="mini-cor" style={{ backgroundColor: foto.cor }} />
                  <div>
                    <strong>{foto.favorita && '★ '}{foto.tema}</strong>
                    <p>{foto.materiaNome} • {foto.nome}</p>
                    {foto.anotacao && <p className="resultado-anotacao">Anotação: {foto.anotacao}</p>}
                  </div>
                  <small>{foto.data}</small>
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
