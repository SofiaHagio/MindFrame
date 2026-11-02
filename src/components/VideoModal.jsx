import { useEffect } from 'react'

function VideoModal({ aberto, onFechar }) {
  useEffect(() => {
    function fecharComEsc(evento) {
      if (evento.key === 'Escape') onFechar()
    }

    if (aberto) {
      window.addEventListener('keydown', fecharComEsc)
    }

    return () => window.removeEventListener('keydown', fecharComEsc)
  }, [aberto, onFechar])

  if (!aberto) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-fundo/90 p-5" onMouseDown={onFechar}>
      <div className="relative w-full max-w-2xl rounded-2xl border border-borda bg-superficie p-6 md:p-8" onMouseDown={(e) => e.stopPropagation()}>
        <button className="absolute top-4 right-4 cursor-pointer text-xl text-mudo hover:text-texto" onClick={onFechar}>✕</button>
        <p className="mb-2 text-xs font-medium tracking-widest text-verde uppercase">Protótipo</p>
        <h2 className="mb-5 font-display text-lg font-bold text-verde">Modo Estudo em vídeo</h2>
        <div className="aspect-video">
          <iframe
            className="size-full rounded-lg"
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
