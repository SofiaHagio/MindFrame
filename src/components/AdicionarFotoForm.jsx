import { useState } from 'react'

function AdicionarFotoForm({ materiaId, onAdicionarFoto, onCancelar }) {
  const [tema, setTema] = useState('')
  const [arquivo, setArquivo] = useState(null)
  const [erro, setErro] = useState('')
  // input de arquivo não aceita ser "controlado" pelo React (não dá pra
  // setar o value dele por segurança do navegador). Pra limpar o campo
  // depois de salvar, mudo essa key: o React entende que é um input novo
  // e recria ele do zero, já sem o arquivo antigo selecionado
  const [chaveInputArquivo, setChaveInputArquivo] = useState(0)

  function salvarComImagem(imagem) {
    // se o usuário não escolher um arquivo, gera um nome genérico só
    // pra não ficar em branco na listagem
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

    // limite meio arbitrário, mas o localStorage tem um teto de ~5MB no total
    // e como a imagem vira base64 (fica ~33% maior), esse valor deu uma
    // margem segura nos testes que fiz
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
    <form className="form-foto" onSubmit={enviar}>
      <div className="form-campo">
        <label htmlFor={`tema-${materiaId}`}>Tema do material</label>
        <input
          id={`tema-${materiaId}`}
          value={tema}
          onChange={(e) => setTema(e.target.value)}
          placeholder="Ex.: Componentes React"
        />
      </div>

      <div className="form-campo">
        <label htmlFor={`arquivo-${materiaId}`}>Imagem (opcional)</label>
        <input
          key={chaveInputArquivo}
          id={`arquivo-${materiaId}`}
          type="file"
          accept="image/*"
          onChange={(e) => setArquivo(e.target.files?.[0] || null)}
        />
      </div>

      {erro && <p className="mensagem-erro">{erro}</p>}

      <div className="acoes-form">
        <button type="submit" className="btn-principal">Salvar material</button>
        <button type="button" className="btn-texto" onClick={onCancelar}>Cancelar</button>
      </div>
    </form>
  )
}

export default AdicionarFotoForm
