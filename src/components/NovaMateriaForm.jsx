import { useState } from 'react'

const cores = ['#8b7cf6', '#4ed8c0', '#ff8a65', '#62a8ff', '#f0c75e', '#d77cf6']

function NovaMateriaForm({ materias, onCriarMateria }) {
  const [nome, setNome] = useState('')
  const [cor, setCor] = useState(cores[0])
  const [erro, setErro] = useState('')

  function sortearCor() {
    const indice = Math.floor(Math.random() * cores.length)
    setCor(cores[indice])
  }

  function enviar(evento) {
    evento.preventDefault()
    const nomeLimpo = nome.trim()

    if (!nomeLimpo) {
      setErro('Digite o nome da matéria.')
      return
    }

    // compara ignorando maiúscula/minúscula pra não deixar criar
    // "Matemática" e "matemática" como se fossem coisas diferentes
    const repetida = materias.some((materia) => materia.nome.toLowerCase() === nomeLimpo.toLowerCase())
    if (repetida) {
      setErro('Essa matéria já foi criada.')
      return
    }

    onCriarMateria(nomeLimpo, cor)
    setNome('')
    setErro('')
    sortearCor()
  }

  return (
    <form className="form-materia" onSubmit={enviar}>
      <div className="form-campo cresce">
        <label htmlFor="nome-materia">Nova matéria</label>
        <input
          id="nome-materia"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Ex.: Web Development"
        />
      </div>

      <div className="form-campo campo-cor">
        <label htmlFor="cor-materia">Cor</label>
        <input
          id="cor-materia"
          type="color"
          value={cor}
          onChange={(e) => setCor(e.target.value)}
        />
      </div>

      <button type="submit" className="btn-principal">Criar matéria</button>
      {erro && <p className="mensagem-erro form-erro">{erro}</p>}
    </form>
  )
}

export default NovaMateriaForm
