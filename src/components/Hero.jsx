import { useCarrossel } from '../hooks/useCarrossel.js'

const slides = [
  '/img/carrossel1.png',
  '/img/carrossel2.png',
  '/img/carrossel3.png',
  '/img/carrossel4.png',
  '/img/carrossel5.png',
  '/img/carrossel6.png',
]

function Hero() {
  const { slideAtual, voltarSlide, avancarSlide } = useCarrossel(slides.length)

  const botaoSlide = 'size-10 cursor-pointer rounded-full border border-roxo/50 bg-roxo/20 text-xl text-white transition-colors duration-200 hover:bg-roxo'

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden" id="inicio">
      <div className="absolute top-0 right-0 z-0 flex h-full w-full items-center justify-center bg-fundo opacity-30 md:w-2/3 md:opacity-100 lg:w-1/2">
        <div className="pointer-events-none absolute top-0 left-0 z-20 h-full w-56 bg-linear-to-r from-fundo via-roxo/20 to-transparent" />
        <img
          className="relative z-10 size-full object-contain transition-opacity duration-500"
          src={slides[slideAtual]}
          alt={`Tela ${slideAtual + 1} do protótipo MindFrame`}
        />
        <div className="pointer-events-none absolute top-0 right-0 z-20 h-full w-32 bg-linear-to-l from-fundo/80 to-transparent" />
      </div>

      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-full bg-fundo/70 md:w-1/2 md:bg-transparent md:bg-linear-to-r md:from-fundo md:from-60% md:to-transparent" />

      <div className="relative z-20 max-w-full px-6 pt-28 pb-12 md:max-w-xl md:pr-0 md:pb-16 md:pl-10 lg:pt-32 lg:pb-20 lg:pl-20">
        <p className="mb-5 inline-block rounded-full border border-verde/30 px-4 py-1.5 text-xs tracking-widest text-verde uppercase">Ferramenta Educacional</p>
        <h1 className="mb-5 font-display text-4xl leading-tight font-black tracking-tight md:text-5xl">
          Organize o que<br /><em className="text-roxo not-italic">você aprende</em>
        </h1>
        <p className="mb-8 max-w-md text-lg text-mudo">
          Modo Estudo — câmera inteligente para estudantes que fotografam conteúdo em sala de aula.
        </p>
        <a href="#sobre" className="mb-8 inline-block rounded-full bg-roxo px-9 py-3.5 font-display text-sm font-bold text-white shadow-lg shadow-roxo/40 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-roxo/60">Descobrir →</a>

        <div className="flex items-center gap-4">
          <button className={botaoSlide} onClick={voltarSlide} aria-label="Slide anterior">‹</button>
          <span className="min-w-9 text-center text-sm text-mudo">{slideAtual + 1} / {slides.length}</span>
          <button className={botaoSlide} onClick={avancarSlide} aria-label="Próximo slide">›</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
