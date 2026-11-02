import LoadingSpinner from './LoadingSpinner.jsx'

function ListaFeedbacks({ feedbacks, carregando, erro, onTentarNovamente }) {
  return (
    <div className="mt-6 border-t border-borda pt-6">
      <h3 className="mb-4 font-display text-base font-bold">Feedbacks recentes</h3>

      {carregando && <LoadingSpinner texto="Carregando feedbacks..." />}

      {!carregando && erro && (
        <div className="flex flex-col items-center gap-2.5 rounded-xl border border-perigo/30 bg-perigo/10 p-4 text-center">
          <p className="text-sm text-perigo">{erro}</p>
          <button
            className="cursor-pointer rounded-full border border-verde/50 px-3 py-2 text-xs text-verde hover:bg-verde/10"
            onClick={onTentarNovamente}
          >
            Tentar novamente
          </button>
        </div>
      )}

      {!carregando && !erro && feedbacks.length === 0 && (
        <div className="mt-4 rounded-xl border border-dashed border-white/10 p-4 text-center text-sm text-mudo">
          <p>Ninguém mandou feedback ainda. Seja o primeiro!</p>
        </div>
      )}

      {!carregando && !erro && feedbacks.length > 0 && (
        <ul className="grid gap-2.5">
          {feedbacks.map((item) => {
            const estrelas = Math.min(5, Math.max(0, Number(item.nota) || 0))

            return (
              <li className="rounded-xl border border-borda bg-superficie2 px-3.5 py-3" key={item.id}>
                <div className="mb-1 flex items-center justify-between gap-2.5">
                  <strong className="text-sm wrap-anywhere">{item.nome || 'Anônimo'}</strong>
                  <span className="text-sm tracking-wider whitespace-nowrap text-ouro">
                    {'★'.repeat(estrelas)}{'☆'.repeat(5 - estrelas)}
                  </span>
                </div>
                <p className="text-sm text-mudo wrap-anywhere">{item.mensagem}</p>
                <small className="text-xs text-mudo">{new Date(item.createdAt).toLocaleString('pt-BR')}</small>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default ListaFeedbacks
