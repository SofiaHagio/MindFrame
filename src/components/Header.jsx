import { useEffect, useState } from 'react'

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [rolado, setRolado] = useState(false)

  useEffect(() => {
    function verificarScroll() {
      setRolado(window.scrollY > 30)
    }

    window.addEventListener('scroll', verificarScroll)
    verificarScroll() // roda uma vez de cara pra já entrar com o estado certo

    return () => window.removeEventListener('scroll', verificarScroll)
  }, [])

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <nav className={`navbar ${rolado ? 'rolado' : ''}`}>
      <a href="#inicio" className="logo" onClick={fecharMenu}>
        Mind<span>Frame</span>
      </a>

      <div className={menuAberto ? 'nav-links aberto' : 'nav-links'}>
        <a href="#sobre" onClick={fecharMenu}>Sobre</a>
        <a href="#resolucao" onClick={fecharMenu}>Resolução</a>
        <a href="#tecnologia" onClick={fecharMenu}>Tecnologias</a>
        <a href="#time" onClick={fecharMenu}>Time</a>
        <a href="#modo-estudo" className="nav-teste" onClick={fecharMenu}>Testar</a>
      </div>

      <button
        className="hamburger"
        aria-label="Abrir menu"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        {menuAberto ? '✕' : '☰'}
      </button>
    </nav>
  )
}

export default Header
