import { useState } from 'react'

function AdicionarFotoForm({ materiaId, onAdicionarFoto, onCancelar }) {
  const [tema, setTema] = useState('')
  const [arquivo, setArquivo] = useState(null)
  const [erro, setErro] = useState('')
  const [chaveInputArquivo, setChaveInputArquivo] = useState(0)

  const rotulo = 'mb-1.5 block text-xs font-medium text-mudo'
  const campo = 'w-full min-w-0 rounded-lg border border-borda bg-fundo p-3 outline-none focus:border-roxo/70'

  function salvarComImagem(imagem) {
    const nomeArquivo = arquivo?.name || `foto_${new Date().getTime()}.jpg`
    const novaFoto = {
      id: Date.now() + Math.floor(Math.random() * 10000),
      tema: tema.trim() || 'Sem tema',
      nome: nomeArquivo,
      data: new Date().toLocaleString('pt-BR'),
      imagem,
      favorita: false,
      anotacao: '',
    }

    onAdicionarFoto(materiaId, novaFoto)
    setTema('')
    setArquivo(null)
    setChaveInputArquivo((atual) => atual + 1)
    onCancelar()
  }

  function enviar(evento) {
    evento.preventDefault()
    setErro('')

    if (!arquivo) {
      salvarComImagem('')
      return
    }

    if (arquivo.size > 900000) {
      setErro('Para o teste com localStorage, escolha uma imagem menor que 900 KB.')
      return
    }

    const leitor = new FileReader()
    leitor.onload = () => salvarComImagem(leitor.result)
    leitor.onerror = () => setErro('Não foi possível ler a imagem selecionada.')
    leitor.readAsDataURL(arquivo)
  }

  return (
    <form className="mt-4 grid gap-3 rounded-xl bg-fundo/50 p-4" onSubmit={enviar}>
      <div className="grid">
        <label className={rotulo} htmlFor={`tema-${materiaId}`}>Tema do material</label>
        <input
          className={campo}
          id={`tema-${materiaId}`}
          value={tema}
          onChange={(e) => setTema(e.target.value)}
          placeholder="Ex.: Componentes React"
        />
      </div>

      <div className="grid">
        <label className={rotulo} htmlFor={`arquivo-${materiaId}`}>Imagem (opcional)</label>
        <input
          className={`${campo} text-xs text-mudo file:mr-3 file:rounded file:bg-superficie2 file:px-3 file:py-1 file:text-texto`}
          key={chaveInputArquivo}
          id={`arquivo-${materiaId}`}
          type="file"
          accept="image/*"
          onChange={(e) => setArquivo(e.target.files?.[0] || null)}
        />
      </div>

      {erro && <p className="text-sm text-perigo">{erro}</p>}

      <div className="flex items-center gap-2">
        <button
          type="submit"
          className="cursor-pointer rounded-full bg-roxo px-5 py-3 font-display text-sm font-bold text-white hover:opacity-90"
        >
          Salvar material
        </button>
        <button type="button" className="cursor-pointer p-2 text-xs text-mudo hover:text-texto" onClick={onCancelar}>Cancelar</button>
      </div>
    </form>
  )
}

export default AdicionarFotoForm
