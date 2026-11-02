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

  const [abaAtual, setAbaAtual] = useState('materias')

  const aba = 'cursor-pointer border-b-2 px-4 py-3 whitespace-nowrap'
  const contadorAba = 'ml-1 rounded-full bg-roxo/20 px-1.5 py-0.5 text-xs'

  const totalFavoritos = materias.reduce((total, materia) => {
    return total + materia.fotos.filter((foto) => foto.favorita).length
  }, 0)

  return (
    <section
      className="scroll-mt-16 border-y border-borda bg-fundo px-6 py-20 md:px-10 md:py-24"
      id="modo-estudo"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-medium tracking-widest text-verde uppercase">02.1 — Demonstração</p>
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="mb-2 font-display text-4xl font-bold">Teste o <span className="text-roxo">Modo Estudo</span></h2>
          <p className="max-w-md text-left text-sm text-mudo md:text-right">Uma versão web simples das principais funções do projeto, feita em React para esta sprint.</p>
        </div>

        <Dashboard materias={materias} />
        <Busca materias={materias} />

        <div className="mt-8 flex gap-2 overflow-x-auto border-b border-borda sm:overflow-visible">
          <button
            className={`${aba} ${abaAtual === 'materias' ? 'border-roxo text-texto' : 'border-transparent text-mudo'}`}
            onClick={() => setAbaAtual('materias')}
          >
            Matérias
          </button>
          <button
            className={`${aba} ${abaAtual === 'favoritos' ? 'border-roxo text-texto' : 'border-transparent text-mudo'}`}
            onClick={() => setAbaAtual('favoritos')}
          >
            Favoritos {totalFavoritos > 0 && <span className={contadorAba}>{totalFavoritos}</span>}
          </button>
          <button
            className={`${aba} ${abaAtual === 'historico' ? 'border-roxo text-texto' : 'border-transparent text-mudo'}`}
            onClick={() => setAbaAtual('historico')}
          >
            Histórico
          </button>
          <button
            className={`${aba} ${abaAtual === 'lixeira' ? 'border-roxo text-texto' : 'border-transparent text-mudo'}`}
            onClick={() => setAbaAtual('lixeira')}
          >
            Lixeira {lixeira.length > 0 && <span className={contadorAba}>{lixeira.length}</span>}
          </button>
        </div>

        {abaAtual === 'materias' && (
          <div className="pt-6">
            <NovaMateriaForm materias={materias} onCriarMateria={onCriarMateria} />

            {materias.length === 0 ? (
              <div className="mt-4 rounded-xl border border-dashed border-white/10 px-5 py-8 text-center text-mudo">
                <strong className="text-texto">Seu acervo ainda está vazio.</strong>
                <p>Crie a primeira matéria acima para começar.</p>
              </div>
            ) : (
              <div className="mt-4 grid gap-4">
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

        {abaAtual === 'favoritos' && (
          <div className="pt-6">
            <Favoritos
              materias={materias}
              onRemoverFoto={onRemoverFoto}
              onAlternarFavorito={onAlternarFavorito}
              onSalvarAnotacao={onSalvarAnotacao}
            />
          </div>
        )}

        {abaAtual === 'historico' && (
          <div className="pt-6"><Historico historico={historico} /></div>
        )}

        {abaAtual === 'lixeira' && (
          <div className="pt-6">
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
