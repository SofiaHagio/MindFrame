import ModoEstudo from '../components/ModoEstudo.jsx'
import { useAcervo } from '../hooks/useAcervo.js'

function Estudo() {
  const acervo = useAcervo()

  return (
    <ModoEstudo
      materias={acervo.materias}
      historico={acervo.historico}
      lixeira={acervo.lixeira}
      onCriarMateria={acervo.criarMateria}
      onAdicionarFoto={acervo.adicionarFoto}
      onRemoverFoto={acervo.removerFoto}
      onExcluirMateria={acervo.excluirMateria}
      onRestaurarFoto={acervo.restaurarFoto}
      onExcluirDefinitivamente={acervo.excluirDefinitivamente}
      onAlternarFavorito={acervo.alternarFavorito}
      onSalvarAnotacao={acervo.salvarAnotacao}
    />
  )
}

export default Estudo
