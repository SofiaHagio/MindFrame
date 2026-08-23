import { useState } from 'react'

function Feedback() {
  const [mensagem, setMensagem] = useState('')

  function pedirFeedback() {
    const texto = window.prompt('O que você achou do MindFrame? Deixe seu feedback:')

    if (texto === null) return // usuário clicou em cancelar, não faz nada

    if (texto.trim() === '') {
      setMensagem('Nenhum feedback digitado.')
      return
    }

    setMensagem(`Obrigado pelo feedback: “${texto.trim()}” 💜`)
  }

  return (
    <>
      {mensagem && (
        <div className="feedback-aviso">
          <span>{mensagem}</span>
          <button onClick={() => setMensagem('')}>✕</button>
        </div>
      )}

      <button className="feedback-botao" onClick={pedirFeedback}>
        💬 Feedback
      </button>
    </>
  )
}

export default Feedback
