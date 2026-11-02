import { useState } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'

function Login() {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const { logado, entrar } = useAuth()
  const location = useLocation()

  const campo = 'mb-4 block w-full rounded-lg border border-borda bg-superficie2 px-4 py-3 text-base outline-none transition-colors duration-200 focus:border-roxo'

  function enviar(evento) {
    evento.preventDefault()

    if (!usuario.trim() || !senha.trim()) {
      setErro('Preencha todos os campos.')
      return
    }

    if (!entrar(usuario.trim(), senha)) {
      setErro('Usuário ou senha incorretos.')
      setSenha('')
    }
  }

  if (logado) {
    return <Navigate to={location.state?.voltarPara || '/modo-estudo'} replace />
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-fundo p-5">
      <form
        className="w-full max-w-sm rounded-2xl border border-borda bg-superficie px-10 py-12 text-center"
        onSubmit={enviar}
      >
        <h2 className="mb-2 font-display text-2xl font-bold">Bem-vindo ao <span className="text-roxo">MindFrame</span></h2>
        <p className="mb-6 text-sm text-mudo">Entre para continuar</p>

        <input
          className={campo}
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          autoComplete="username"
        />

        <input
          className={campo}
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          autoComplete="current-password"
        />

        <p className="mb-2.5 min-h-5 text-sm text-perigo">{erro}</p>
        <button
          type="submit"
          className="mb-4 w-full cursor-pointer rounded-lg bg-roxo p-3 font-display text-base font-bold text-white transition-opacity duration-200 hover:opacity-90"
        >Entrar</button>
        <small className="text-xs text-mudo">Use: <b>admin</b> / <b>1234</b></small>
        <Link to="/" className="mt-4 block text-sm text-mudo hover:text-texto">← Voltar para o início</Link>
      </form>
    </div>
  )
}

export default Login
