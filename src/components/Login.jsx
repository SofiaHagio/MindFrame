import { useState } from 'react'

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  function entrar(evento) {
    evento.preventDefault()

    if (!usuario.trim() || !senha.trim()) {
      setErro('Preencha todos os campos.')
      return
    }

    // login fixo só pra essa entrega/demo — em uma versão real isso
    // viria de uma API com autenticação de verdade
    if (usuario !== 'admin' || senha !== '1234') {
      setErro('Usuário ou senha incorretos.')
      setSenha('')
      return
    }

    setErro('')

    // usando prompt() mesmo pra manter simples nessa versão web de teste
    const nome = window.prompt('Login feito com sucesso! Qual é o seu nome?')
    onLogin(nome && nome.trim() ? nome.trim() : 'Estudante')
  }

  return (
    <div className="login-overlay">
      <form className="login-box" onSubmit={entrar}>
        <h2>Bem-vindo ao <span>MindFrame</span></h2>
        <p>Entre para continuar</p>

        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          autoComplete="username"
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          autoComplete="current-password"
        />

        <p className="login-erro">{erro}</p>
        <button type="submit" className="btn-login">Entrar</button>
        <small>Use: <b>admin</b> / <b>1234</b></small>
      </form>
    </div>
  )
}

export default Login
