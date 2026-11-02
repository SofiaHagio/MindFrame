import { useLocalStorage } from './useLocalStorage.js'

const CHAVE_MATERIAS = 'mindframe_materias'
const CHAVE_HISTORICO = 'mindframe_historico'
const CHAVE_LIXEIRA = 'mindframe_lixeira'

export function useAcervo() {
  const [materias, setMaterias] = useLocalStorage(CHAVE_MATERIAS, [])
  const [historico, setHistorico] = useLocalStorage(CHAVE_HISTORICO, [])
  const [lixeira, setLixeira] = useLocalStorage(CHAVE_LIXEIRA, [])

  function registrarAcao(texto) {
    const item = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      texto,
      data: new Date().toLocaleString('pt-BR'),
    }

    setHistorico((atual) => [item, ...atual].slice(0, 50))
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

  return {
    materias,
    historico,
    lixeira,
    criarMateria,
    adicionarFoto,
    alternarFavorito,
    salvarAnotacao,
    removerFoto,
    restaurarFoto,
    excluirDefinitivamente,
    excluirMateria,
  }
}
