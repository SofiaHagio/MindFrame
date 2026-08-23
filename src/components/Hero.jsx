import { useEffect, useState } from 'react'

const slides = [
  '/img/carrossel1.png',
  '/img/carrossel2.png',
  '/img/carrossel3.png',
  '/img/carrossel4.png',
  '/img/carrossel5.png',
  '/img/carrossel6.png',
]

function Hero() {
  const [slideAtual, setSlideAtual] = useState(0)
  const [automatico, setAutomatico] = useState(true)

  useEffect(() => {
    if (!automatico) return

    const intervalo = setInterval(() => {
      setSlideAtual((atual) => (atual + 1) % slides.length)
    }, 5000)

    return () => clearInterval(intervalo)
  }, [automatico])

  // assim que o usuário mexe numa seta, para o carrossel automático —
  // achei estranho a imagem trocar sozinha enquanto a pessoa tá navegando
  function voltarSlide() {
    setAutomatico(false)
    setSlideAtual((atual) => (atual - 1 + slides.length) % slides.length)
  }

  function avancarSlide() {
    setAutomatico(false)
    setSlideAtual((atual) => (atual + 1) % slides.length)
  }

  return (
    <section className="hero" id="inicio">
      <div className="hero-slideshow">
        <img
          src={slides[slideAtual]}
          alt={`Tela ${slideAtual + 1} do protótipo MindFrame`}
        />
      </div>

      <div className="hero-nevoa" />

      <div className="hero-texto">
        <p className="hero-tag">Ferramenta Educacional</p>
        <h1>Organize o que<br /><em>você aprende</em></h1>
        <p className="hero-sub">
          Modo Estudo — câmera inteligente para estudantes que fotografam conteúdo em sala de aula.
        </p>
        <a href="#sobre" className="btn-hero">Descobrir →</a>

        <div className="slide-controles">
          <button onClick={voltarSlide} aria-label="Slide anterior">‹</button>
          <span>{slideAtual + 1} / {slides.length}</span>
          <button onClick={avancarSlide} aria-label="Próximo slide">›</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
