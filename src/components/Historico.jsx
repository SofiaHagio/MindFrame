function Historico({ historico }) {
  if (historico.length === 0) {
    return (
      <div className="mt-4 rounded-xl border border-dashed border-white/10 px-5 py-8 text-center text-mudo">
        O histórico aparecerá aqui conforme você usar o Modo Estudo.
      </div>
    )
  }

  return (
    <div className="grid gap-2.5">
      {historico.map((item) => (
        <article className="flex items-start gap-3 border-b border-borda px-1 pt-3 pb-4" key={item.id}>
          <span className="mt-2 size-2 shrink-0 rounded-full bg-verde ring-4 ring-verde/10" />
          <div>
            <p>{item.texto}</p>
            <small className="text-xs text-mudo">{item.data}</small>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Historico
