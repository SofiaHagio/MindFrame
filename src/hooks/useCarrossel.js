import { useEffect, useState } from 'react'

export function useCarrossel(totalSlides, intervalo = 5000) {
  const [slideAtual, setSlideAtual] = useState(0)
  const [automatico, setAutomatico] = useState(true)

  useEffect(() => {
    if (!automatico) return

    const timer = setInterval(() => {
      setSlideAtual((atual) => (atual + 1) % totalSlides)
    }, intervalo)

    return () => clearInterval(timer)
  }, [automatico, totalSlides, intervalo])

  function voltarSlide() {
    setAutomatico(false)
    setSlideAtual((atual) => (atual - 1 + totalSlides) % totalSlides)
  }

  function avancarSlide() {
    setAutomatico(false)
    setSlideAtual((atual) => (atual + 1) % totalSlides)
  }

  return { slideAtual, voltarSlide, avancarSlide }
}
