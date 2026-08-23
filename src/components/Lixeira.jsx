import { useState } from 'react'

function Lixeira({ lixeira, onRestaurarFoto, onExcluirDefinitivamente }) {
  const [aviso, setAviso] = useState('')

  function restaurar(item) {
    // onRestaurarFoto devolve false quando a matéria original não existe
    // mais (foi excluída) — nesse caso não tem pra onde mandar a foto de volta
    const restaurado = onRestaurarFoto(item)
    if (!restaurado) {
      setAviso(`A matéria “${item.materiaNome}” não existe mais. Crie a matéria novamente antes de restaurar.`)
    } else {
      setAviso('Material restaurado com sucesso.')
    }
  }

  if (lixeira.length === 0) {
    return <div className="estado-vazio">A lixeira está vazia.</div>
  }

  return (
    <div className="lixeira-area">
      {aviso && <p className="aviso-lixeira">{aviso}</p>}

      <div className="lista-lixeira">
        {lixeira.map((item) => (
          <article key={item.id}>
            <div>
              <strong>{item.tema}</strong>
              <p>{item.materiaNome} • {item.nome}</p>
              <small>Removido em {item.removidaEm}</small>
            </div>
            <div className="acoes-lixeira">
              <button className="btn-secundario pequeno" onClick={() => restaurar(item)}>Restaurar</button>
              <button className="btn-texto perigo" onClick={() => onExcluirDefinitivamente(item.id)}>Excluir</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Lixeira
