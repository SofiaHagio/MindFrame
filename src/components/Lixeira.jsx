import { useState } from 'react'

function Lixeira({ lixeira, onRestaurarFoto, onExcluirDefinitivamente }) {
  const [aviso, setAviso] = useState('')

  function restaurar(item) {
    const restaurado = onRestaurarFoto(item)
    if (!restaurado) {
      setAviso(`A matéria “${item.materiaNome}” não existe mais. Crie a matéria novamente antes de restaurar.`)
    } else {
      setAviso('Material restaurado com sucesso.')
    }
  }

  if (lixeira.length === 0) {
    return (
      <div className="mt-4 rounded-xl border border-dashed border-white/10 px-5 py-8 text-center text-mudo">
        A lixeira está vazia.
      </div>
    )
  }

  return (
    <div>
      {aviso && <p className="mb-4 rounded-lg border border-roxo/20 bg-roxo/10 px-3 py-2.5 text-sm">{aviso}</p>}

      <div className="grid gap-2.5">
        {lixeira.map((item) => (
          <article
            className="flex flex-col items-start justify-between gap-2 rounded-xl border border-borda bg-superficie p-4 md:flex-row md:items-center"
            key={item.id}
          >
            <div>
              <strong>{item.tema}</strong>
              <p className="text-sm text-mudo wrap-anywhere">{item.materiaNome} • {item.nome}</p>
              <small className="text-xs text-mudo">Removido em {item.removidaEm}</small>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="cursor-pointer rounded-full border border-verde/50 px-3 py-2 text-xs text-verde hover:bg-verde/10"
                onClick={() => restaurar(item)}
              >
                Restaurar
              </button>
              <button className="cursor-pointer p-2 text-xs text-perigo" onClick={() => onExcluirDefinitivamente(item.id)}>Excluir</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Lixeira
