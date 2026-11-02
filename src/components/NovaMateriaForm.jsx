import { useState } from 'react'

const cores = ['#8b7cf6', '#4ed8c0', '#ff8a65', '#62a8ff', '#f0c75e', '#d77cf6']

function NovaMateriaForm({ materias, onCriarMateria }) {
  const [nome, setNome] = useState('')
  const [cor, setCor] = useState(cores[0])
  const [erro, setErro] = useState('')

  const rotulo = 'mb-1.5 block text-xs font-medium text-mudo'

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
    <form
      className="flex flex-col flex-wrap items-stretch gap-4 rounded-xl border border-borda bg-superficie p-4 md:flex-row md:items-end"
      onSubmit={enviar}
    >
      <div className="grid min-w-56 flex-1">
        <label className={rotulo} htmlFor="nome-materia">Nova matéria</label>
        <input
          className="w-full min-w-0 rounded-lg border border-borda bg-fundo p-3 outline-none focus:border-roxo/70"
          id="nome-materia"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Ex.: Web Development"
        />
      </div>

      <div className="grid">
        <label className={rotulo} htmlFor="cor-materia">Cor</label>
        <input
          className="h-12 w-full min-w-0 cursor-pointer rounded-lg border border-borda bg-fundo p-1 outline-none focus:border-roxo/70 md:w-16"
          id="cor-materia"
          type="color"
          value={cor}
          onChange={(e) => setCor(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="cursor-pointer rounded-full bg-roxo px-5 py-3 font-display text-sm font-bold text-white hover:opacity-90"
      >
        Criar matéria
      </button>
      {erro && <p className="basis-full text-sm text-perigo">{erro}</p>}
    </form>
  )
}

export default NovaMateriaForm
