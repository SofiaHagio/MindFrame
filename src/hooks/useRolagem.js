import { useEffect, useState } from 'react'

export function useRolagem(limite = 30) {
  const [rolado, setRolado] = useState(false)

  useEffect(() => {
    function verificarScroll() {
      setRolado(window.scrollY > limite)
    }

    window.addEventListener('scroll', verificarScroll)
    verificarScroll()

    return () => window.removeEventListener('scroll', verificarScroll)
  }, [limite])

  return rolado
}
