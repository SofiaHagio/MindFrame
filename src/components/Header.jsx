import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRolagem } from '../hooks/useRolagem.js'
import { useAuth } from '../hooks/useAuth.js'

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const rolado = useRolagem(30)
  const { logado, sair } = useAuth()

  const linkNav = 'cursor-pointer text-sm font-medium text-mudo transition-colors duration-200 hover:text-texto'

  function fecharMenu() {
    setMenuAberto(false)
  }

  function sairDaConta() {
    fecharMenu()
    sair()
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-6 transition-colors duration-300 md:px-8 ${
        rolado ? 'border-b border-borda bg-fundo/90 backdrop-blur-sm' : ''
      }`}
    >
      <Link to="/#inicio" className="font-display text-xl font-black text-texto" onClick={fecharMenu}>
        Mind<span className="text-roxo">Frame</span>
      </Link>

      <div
        className={`absolute inset-x-0 top-16 flex-col items-start gap-4 border-b border-borda bg-fundo px-8 py-6 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-b-0 md:bg-transparent md:p-0 ${
          menuAberto ? 'flex' : 'hidden'
        }`}
      >
        <Link to="/#sobre" className={linkNav} onClick={fecharMenu}>Sobre</Link>
        <Link to="/#resolucao" className={linkNav} onClick={fecharMenu}>Resolução</Link>
        <Link to="/#tecnologia" className={linkNav} onClick={fecharMenu}>Tecnologias</Link>
        <Link to="/#time" className={linkNav} onClick={fecharMenu}>Time</Link>
        <Link
          to="/modo-estudo"
          className="rounded-full border border-verde/30 px-3 py-1.5 text-sm font-medium text-verde transition-colors duration-200 hover:bg-verde/10"
          onClick={fecharMenu}
        >
          Testar
        </Link>
        {logado && (
          <button className={linkNav} onClick={sairDaConta}>
            Sair
          </button>
        )}
      </div>

      <button
        className="cursor-pointer text-2xl text-texto md:hidden"
        aria-label="Abrir menu"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        {menuAberto ? '✕' : '☰'}
      </button>
    </nav>
  )
}

export default Header
