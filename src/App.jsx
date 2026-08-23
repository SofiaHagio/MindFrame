import { useEffect, useState } from 'react'
import Login from './components/Login.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Resolucao from './components/Resolucao.jsx'
import ModoEstudo from './components/ModoEstudo.jsx'
import Tecnologias from './components/Tecnologias.jsx'
import Time from './components/Time.jsx'
import Footer from './components/Footer.jsx'
import VideoModal from './components/VideoModal.jsx'
import Feedback from './components/Feedback.jsx'

// chaves usadas no localStorage/sessionStorage — mantive tudo prefixado
// com "mindframe_" pra não bagunçar com outras coisas do navegador
const CHAVE_MATERIAS = 'mindframe_materias'
const CHAVE_HISTORICO = 'mindframe_historico'
const CHAVE_LIXEIRA = 'mindframe_lixeira'
const CHAVE_SESSAO = 'mindframe_sessao_usuario'

// helper genérico pra não ficar repetindo try/catch em todo lugar que
// lê algo do localStorage (se o JSON tiver salvo errado, cai no padrão)
function lerLocalStorage(chave, valorPadrao) {
  try {
    const valor = localStorage.getItem(chave)
    return valor ? JSON.parse(valor) : valorPadrao
  } catch {
    return valorPadrao
  }
}

function App() {
  const [usuario, setUsuario] = useState(() => {
    try {
      const valor = sessionStorage.getItem(CHAVE_SESSAO)
      return valor ? JSON.parse(valor) : null
    } catch {
      return null
    }
  })
  const [materias, setMaterias] = useState(() => lerLocalStorage(CHAVE_MATERIAS, []))
  const [historico, setHistorico] = useState(() => lerLocalStorage(CHAVE_HISTORICO, []))
  const [lixeira, setLixeira] = useState(() => lerLocalStorage(CHAVE_LIXEIRA, []))
  const [videoAberto, setVideoAberto] = useState(false)

  // um useEffect pra cada "tabela" — dá pra juntar tudo em um só, mas
  // separado fica mais fácil de debugar quando alguma coisa não salva
  useEffect(() => {
    localStorage.setItem(CHAVE_MATERIAS, JSON.stringify(materias))
  }, [materias])

  useEffect(() => {
    localStorage.setItem(CHAVE_HISTORICO, JSON.stringify(historico))
  }, [historico])

  useEffect(() => {
    localStorage.setItem(CHAVE_LIXEIRA, JSON.stringify(lixeira))
  }, [lixeira])

  function registrarAcao(texto) {
    // Date.now() sozinho às vezes gerava id repetido quando duas ações
    // aconteciam muito rápido em sequência, por isso o Math.random() junto
    const item = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      texto,
      data: new Date().toLocaleString('pt-BR'),
    }

    // guarda só os últimos 50 pra não deixar o localStorage gigante
    setHistorico((atual) => [item, ...atual].slice(0, 50))
  }

  function entrar(nome) {
    const dados = { nome, loginEm: new Date().toISOString() }

    // O login vale somente para a sessão atual.
    // Ao fechar a aba/navegador e abrir novamente, a tela de login aparece de novo.
    sessionStorage.setItem(CHAVE_SESSAO, JSON.stringify(dados))
    setUsuario(dados)
  }



  function criarMateria(nome, cor) {
    const novaMateria = {
      id: Date.now() + Math.floor(Math.random() * 10000),
      nome: nome.trim(),
      cor,
      fotos: [],
      criadaEm: new Date().toLocaleDateString('pt-BR'),
    }

    setMaterias((atual) => [...atual, novaMateria])
    registrarAcao(`Matéria “${novaMateria.nome}” criada`)
  }

  function adicionarFoto(materiaId, foto) {
    setMaterias((atual) => atual.map((materia) => {
      if (materia.id !== materiaId) return materia
      return { ...materia, fotos: [foto, ...materia.fotos] }
    }))

    // busca de novo em "materias" (estado antigo) só pra pegar o nome pro
    // texto do histórico — não dá pra confiar no setMaterias acima porque
    // ele roda de forma assíncrona
    const materia = materias.find((item) => item.id === materiaId)
    registrarAcao(`Material “${foto.tema}” adicionado em ${materia?.nome || 'uma matéria'}`)
  }

  function alternarFavorito(materiaId, fotoId) {
    const materia = materias.find((item) => item.id === materiaId)
    const foto = materia?.fotos.find((item) => item.id === fotoId)
    if (!materia || !foto) return

    const novoValor = !foto.favorita

    setMaterias((atual) => atual.map((item) => {
      if (item.id !== materiaId) return item

      const fotosAtualizadas = item.fotos.map((imagem) => {
        if (imagem.id !== fotoId) return imagem
        return { ...imagem, favorita: novoValor }
      })

      return { ...item, fotos: fotosAtualizadas }
    }))

    registrarAcao(
      novoValor
        ? `Material “${foto.tema}” adicionado aos favoritos`
        : `Material “${foto.tema}” removido dos favoritos`
    )
  }

  function salvarAnotacao(materiaId, fotoId, anotacao) {
    const materia = materias.find((item) => item.id === materiaId)
    const foto = materia?.fotos.find((item) => item.id === fotoId)
    if (!materia || !foto) return

    setMaterias((atual) => atual.map((item) => {
      if (item.id !== materiaId) return item

      const fotosAtualizadas = item.fotos.map((imagem) => {
        if (imagem.id !== fotoId) return imagem
        return { ...imagem, anotacao }
      })

      return { ...item, fotos: fotosAtualizadas }
    }))

    registrarAcao(
      anotacao
        ? `Anotação salva no material “${foto.tema}”`
        : `Anotação removida do material “${foto.tema}”`
    )
  }

  function removerFoto(materiaId, fotoId) {
    const materia = materias.find((item) => item.id === materiaId)
    const foto = materia?.fotos.find((item) => item.id === fotoId)
    if (!materia || !foto) return

    setMaterias((atual) => atual.map((item) => {
      if (item.id !== materiaId) return item
      return { ...item, fotos: item.fotos.filter((imagem) => imagem.id !== fotoId) }
    }))

    setLixeira((atual) => [
      { ...foto, materiaId, materiaNome: materia.nome, removidaEm: new Date().toLocaleString('pt-BR') },
      ...atual,
    ])
    registrarAcao(`Material “${foto.tema}” movido para a lixeira`)
  }

  function restaurarFoto(itemLixeira) {
    // tenta achar pelo id primeiro; se a matéria foi excluída e recriada
    // com o mesmo nome (id novo), cai no fallback comparando pelo nome
    const materiaDestino = materias.find((materia) =>
      materia.id === itemLixeira.materiaId ||
      materia.nome.toLowerCase() === itemLixeira.materiaNome.toLowerCase()
    )

    if (!materiaDestino) return false

    const fotoRestaurada = { ...itemLixeira }
    delete fotoRestaurada.materiaId
    delete fotoRestaurada.materiaNome
    delete fotoRestaurada.removidaEm

    setMaterias((atual) => atual.map((materia) => {
      if (materia.id !== materiaDestino.id) return materia
      return { ...materia, fotos: [fotoRestaurada, ...materia.fotos] }
    }))
    setLixeira((atual) => atual.filter((item) => item.id !== itemLixeira.id))
    registrarAcao(`Material “${itemLixeira.tema}” restaurado`)
    return true
  }

  function excluirDefinitivamente(fotoId) {
    setLixeira((atual) => atual.filter((item) => item.id !== fotoId))
    registrarAcao('Um material foi excluído definitivamente')
  }

  function excluirMateria(materiaId) {
    const materia = materias.find((item) => item.id === materiaId)
    if (!materia) return

    const fotosParaLixeira = materia.fotos.map((foto) => ({
      ...foto,
      materiaId,
      materiaNome: materia.nome,
      removidaEm: new Date().toLocaleString('pt-BR'),
    }))

    if (fotosParaLixeira.length > 0) {
      setLixeira((atual) => [...fotosParaLixeira, ...atual])
    }

    setMaterias((atual) => atual.filter((item) => item.id !== materiaId))
    registrarAcao(`Matéria “${materia.nome}” removida`)
  }

  if (!usuario) {
    return <Login onLogin={entrar} />
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre onAbrirVideo={() => setVideoAberto(true)} />
        <Resolucao />
        <ModoEstudo
          materias={materias}
          historico={historico}
          lixeira={lixeira}
          onCriarMateria={criarMateria}
          onAdicionarFoto={adicionarFoto}
          onRemoverFoto={removerFoto}
          onExcluirMateria={excluirMateria}
          onRestaurarFoto={restaurarFoto}
          onExcluirDefinitivamente={excluirDefinitivamente}
          onAlternarFavorito={alternarFavorito}
          onSalvarAnotacao={salvarAnotacao}
        />
        <Tecnologias />
        <Time />
      </main>
      <Footer />
      <VideoModal aberto={videoAberto} onFechar={() => setVideoAberto(false)} />
      <Feedback />
    </>
  )
}

export default App
