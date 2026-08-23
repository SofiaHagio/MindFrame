import { useEffect } from 'react'

function VideoModal({ aberto, onFechar }) {
  useEffect(() => {
    function fecharComEsc(evento) {
      if (evento.key === 'Escape') onFechar()
    }

    // só escuta o teclado enquanto o modal está aberto, senão fica um
    // listener "fantasma" rodando o app inteiro sem necessidade
    if (aberto) {
      window.addEventListener('keydown', fecharComEsc)
    }

    return () => window.removeEventListener('keydown', fecharComEsc)
  }, [aberto, onFechar])

  if (!aberto) return null

  return (
    <div className="modal-fundo" onMouseDown={onFechar}>
      <div className="modal-conteudo" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-fechar" onClick={onFechar}>✕</button>
        <p className="label">Protótipo</p>
        <h2>Modo Estudo em vídeo</h2>
        <div className="video-area">
          <iframe
            src="https://www.youtube.com/embed/IvCBLI9XZ4A"
            title="Protótipo MindFrame"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default VideoModal
