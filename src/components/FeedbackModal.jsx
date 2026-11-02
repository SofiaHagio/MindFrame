import { useEffect, useState } from 'react'
import { useFeedbacks } from '../hooks/useFeedbacks.js'
import ListaFeedbacks from './ListaFeedbacks.jsx'

function FeedbackModal({ onFechar }) {
  const { feedbacks, carregando, erro: erroLista, carregarFeedbacks, enviarFeedback } = useFeedbacks()

  const [nota, setNota] = useState(5)
  const [mensagem, setMensagem] = useState('')
  const [nome, setNome] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState('')
  const [aviso, setAviso] = useState('')

  const rotulo = 'mb-1.5 block text-xs font-medium text-mudo'
  const campo = 'w-full min-w-0 rounded-lg border border-borda bg-fundo p-3 outline-none focus:border-roxo/70'

  useEffect(() => {
    function fecharComEsc(evento) {
      if (evento.key === 'Escape') onFechar()
    }

    window.addEventListener('keydown', fecharComEsc)
    return () => window.removeEventListener('keydown', fecharComEsc)
  }, [onFechar])

  async function enviar(evento) {
    evento.preventDefault()
    setErro('')
    setAviso('')

    if (!mensagem.trim()) {
      setErro('Escreva sua mensagem antes de enviar.')
      return
    }

    setEnviando(true)

    try {
      await enviarFeedback({
        nome: nome.trim() || 'Anônimo',
        nota,
        mensagem: mensagem.trim(),
      })

      setMensagem('')
      setNome('')
      setNota(5)
      setAviso('Obrigado pelo feedback! 💜')
    } catch {
      setErro('Não foi possível enviar o feedback. Tente novamente.')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-fundo/90 p-5" onMouseDown={onFechar}>
      <div
        className="relative max-h-full w-full max-w-lg overflow-y-auto rounded-2xl border border-borda bg-superficie p-6 md:p-8"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="absolute top-4 right-4 cursor-pointer text-xl text-mudo hover:text-texto" onClick={onFechar}>✕</button>
        <p className="mb-2 text-xs font-medium tracking-widest text-verde uppercase">Feedback</p>
        <h2 className="mb-5 font-display text-lg font-bold text-verde">O que você achou do MindFrame?</h2>

        <form className="grid gap-4" onSubmit={enviar}>
          <div className="grid">
            <label className={rotulo}>Nota</label>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((valor) => (
                <button
                  key={valor}
                  type="button"
                  className={`size-10 cursor-pointer text-2xl transition duration-150 hover:scale-110 ${
                    valor <= nota ? 'text-ouro' : 'text-white/20'
                  }`}
                  onClick={() => setNota(valor)}
                  aria-label={`Nota ${valor}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className="grid">
            <label className={rotulo} htmlFor="feedback-mensagem">Mensagem</label>
            <textarea
              className={`${campo} min-h-24 resize-y`}
              id="feedback-mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Conte o que achou, o que podia melhorar..."
              maxLength={300}
              autoFocus
            />
            <small className="mt-1 text-right text-xs text-mudo">{mensagem.length}/300</small>
          </div>

          <div className="grid">
            <label className={rotulo} htmlFor="feedback-nome">Nome (opcional)</label>
            <input
              className={campo}
              id="feedback-nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              maxLength={60}
            />
          </div>

          {erro && <p className="text-sm text-perigo">{erro}</p>}
          {aviso && <p className="text-sm text-verde">{aviso}</p>}

          <button
            type="submit"
            className="cursor-pointer justify-self-start rounded-full bg-roxo px-5 py-3 font-display text-sm font-bold text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={enviando}
          >
            {enviando ? 'Enviando...' : 'Enviar feedback'}
          </button>
        </form>

        <ListaFeedbacks
          feedbacks={feedbacks}
          carregando={carregando}
          erro={erroLista}
          onTentarNovamente={carregarFeedbacks}
        />
      </div>
    </div>
  )
}

export default FeedbackModal
