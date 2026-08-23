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

  function salvarAnotacao() {
    onSalvarAnotacao(anotacao.trim())
    setEditandoAnotacao(false)
  }

  function cancelarAnotacao() {
    setAnotacao(foto.anotacao || '')
    setEditandoAnotacao(false)
  }

  return (
    <article className="foto-card">
      <div className="foto-preview" style={{ borderColor: cor }}>
        {foto.imagem ? (
          <img src={foto.imagem} alt={foto.tema} />
        ) : (
          <div className="foto-placeholder">
            <span>📄</span>
            <small>Sem imagem</small>
          </div>
        )}

        <button
          className={`btn-favorito ${foto.favorita ? 'ativo' : ''}`}
          onClick={onAlternarFavorito}
          title={foto.favorita ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          aria-label={foto.favorita ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          {foto.favorita ? '★' : '☆'}
        </button>
      </div>

      <div className="foto-info">
        {materiaNome && <small className="foto-materia">{materiaNome}</small>}
        <span className="tag-foto" style={{ backgroundColor: cor }}>{foto.tema}</span>
        <p title={foto.nome}>{foto.nome}</p>
        <small>{foto.data}</small>

        {foto.anotacao && !editandoAnotacao && (
          <div className="anotacao-salva">
            <strong>Anotação</strong>
            <p>{foto.anotacao}</p>
          </div>
        )}

        {editandoAnotacao && (
          <div className="anotacao-editor">
            <label htmlFor={`anotacao-${foto.id}`}>Anotação</label>
            <textarea
              id={`anotacao-${foto.id}`}
              value={anotacao}
              onChange={(e) => setAnotacao(e.target.value)}
              placeholder="Ex.: revisar esse exercício antes da prova"
              maxLength={300}
            />
            <small>{anotacao.length}/300</small>

            <div className="acoes-anotacao">
              <button className="btn-secundario pequeno" onClick={salvarAnotacao}>Salvar</button>
              <button className="btn-texto" onClick={cancelarAnotacao}>Cancelar</button>
            </div>
          </div>
        )}

        <div className="acoes-foto">
          <button className="btn-texto" onClick={() => setEditandoAnotacao(true)}>
            {foto.anotacao ? 'Editar anotação' : '+ Anotação'}
          </button>
          <button className="btn-texto perigo" onClick={onRemover}>Remover</button>
        </div>
      </div>
    </article>
  )
}

export default FotoCard
