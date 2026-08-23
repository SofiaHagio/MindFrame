import { useState } from 'react'
import Dashboard from './Dashboard.jsx'
import NovaMateriaForm from './NovaMateriaForm.jsx'
import Busca from './Busca.jsx'
import MateriaCard from './MateriaCard.jsx'
import Favoritos from './Favoritos.jsx'
import Historico from './Historico.jsx'
import Lixeira from './Lixeira.jsx'

function ModoEstudo(props) {
  const {
    materias,
    historico,
    lixeira,
    onCriarMateria,
    onAdicionarFoto,
    onRemoverFoto,
    onExcluirMateria,
    onRestaurarFoto,
    onExcluirDefinitivamente,
    onAlternarFavorito,
    onSalvarAnotacao,
  } = props

  const [aba, setAba] = useState('materias')

  // usado só pra mostrar o numerozinho do lado de "Favoritos" nas abas
  const totalFavoritos = materias.reduce((total, materia) => {
    return total + materia.fotos.filter((foto) => foto.favorita).length
  }, 0)

  return (
    <section className="secao-escura modo-estudo" id="modo-estudo">
      <div className="inner">
        <p className="label">02.1 — Demonstração</p>
        <div className="titulo-com-texto">
          <h2>Teste o <span>Modo Estudo</span></h2>
          <p>Uma versão web simples das principais funções do projeto, feita em React para esta sprint.</p>
        </div>

        <Dashboard materias={materias} />
        <Busca materias={materias} />

        <div className="abas">
          <button className={aba === 'materias' ? 'ativa' : ''} onClick={() => setAba('materias')}>
            Matérias
          </button>
          <button className={aba === 'favoritos' ? 'ativa' : ''} onClick={() => setAba('favoritos')}>
            Favoritos {totalFavoritos > 0 && <span>{totalFavoritos}</span>}
          </button>
          <button className={aba === 'historico' ? 'ativa' : ''} onClick={() => setAba('historico')}>
            Histórico
          </button>
          <button className={aba === 'lixeira' ? 'ativa' : ''} onClick={() => setAba('lixeira')}>
            Lixeira {lixeira.length > 0 && <span>{lixeira.length}</span>}
          </button>
        </div>

        {aba === 'materias' && (
          <div className="conteudo-aba">
            <NovaMateriaForm materias={materias} onCriarMateria={onCriarMateria} />

            {materias.length === 0 ? (
              <div className="estado-vazio">
                <strong>Seu acervo ainda está vazio.</strong>
                <p>Crie a primeira matéria acima para começar.</p>
              </div>
            ) : (
              <div className="lista-materias">
                {materias.map((materia) => (
                  <MateriaCard
                    key={materia.id}
                    materia={materia}
                    onAdicionarFoto={onAdicionarFoto}
                    onRemoverFoto={onRemoverFoto}
                    onExcluirMateria={onExcluirMateria}
                    onAlternarFavorito={onAlternarFavorito}
                    onSalvarAnotacao={onSalvarAnotacao}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {aba === 'favoritos' && (
          <div className="conteudo-aba">
            <Favoritos
              materias={materias}
              onRemoverFoto={onRemoverFoto}
              onAlternarFavorito={onAlternarFavorito}
              onSalvarAnotacao={onSalvarAnotacao}
            />
          </div>
        )}

        {aba === 'historico' && (
          <div className="conteudo-aba"><Historico historico={historico} /></div>
        )}

        {aba === 'lixeira' && (
          <div className="conteudo-aba">
            <Lixeira
              lixeira={lixeira}
              onRestaurarFoto={onRestaurarFoto}
              onExcluirDefinitivamente={onExcluirDefinitivamente}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default ModoEstudo
