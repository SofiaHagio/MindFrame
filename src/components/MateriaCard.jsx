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
    // avisa que vai pra lixeira só quando tem material, senão a
    // mensagem de confirmação fica confusa sem necessidade
    const mensagem = materia.fotos.length > 0
      ? `Excluir ${materia.nome}? Os materiais serão enviados para a lixeira.`
      : `Excluir ${materia.nome}?`

    if (window.confirm(mensagem)) {
      onExcluirMateria(materia.id)
    }
  }

  return (
    <section className="materia-card" style={{ '--cor-materia': materia.cor }}>
      <div className="materia-topo">
        <div>
          <span className="bolinha-cor" />
          <h3>{materia.nome}</h3>
          <small>{materia.fotos.length} material(is) • criada em {materia.criadaEm}</small>
        </div>

        <div className="acoes-materia">
          <button className="btn-secundario pequeno" onClick={() => setAdicionando(!adicionando)}>
            + Adicionar
          </button>
          <button className="btn-texto perigo" onClick={confirmarExclusao}>Excluir matéria</button>
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
        <div className="estado-vazio pequeno-vazio">
          <p>Nenhum material salvo nesta matéria ainda.</p>
        </div>
      ) : (
        <div className="grade-fotos">
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
