const recursos = [
  {
    icone: '🗂️',
    titulo: 'Pastas por Matéria',
    texto: 'Crie pastas com as disciplinas que desejar, com cores para identificação rápida.',
  },
  {
    icone: '🔍',
    titulo: 'Busca por OCR',
    texto: 'Busca inteligente que lê o texto dentro das fotos e retorna resultados por palavra-chave.',
  },
  {
    icone: '📸',
    titulo: 'Câmera Integrada',
    texto: 'Fotografe e salve em pastas em poucos toques, sem interromper a aula.',
  },
  {
    icone: '⚙️',
    titulo: 'Gestão Completa',
    texto: 'Renomeie, exclua pastas e mova fotos entre elas quando necessário.',
  },
  {
    icone: '⭐',
    titulo: 'Favoritos',
    texto: 'Marque os materiais mais importantes e reúna tudo em uma área de revisão rápida.',
  },
  {
    icone: '📝',
    titulo: 'Anotações',
    texto: 'Acrescente observações de texto aos materiais para complementar o que aparece na imagem.',
  },
]

function Sobre({ onAbrirVideo }) {
  return (
    <section id="sobre" className="secao">
      <p className="label">01 — Sobre</p>
      <h2>O que é o <span>Modo Estudo</span>?</h2>

      <div className="sobre-bloco">
        <div className="sobre-texto">
          <p>
            A solução propõe uma ferramenta integrada à câmera do dispositivo, voltada para estudantes
            que desejam organizar o conteúdo fotografado em sala de aula de forma simples e eficiente.
          </p>
          <p>
            O usuário pode criar pastas nomeadas com as matérias que desejar e, após tirar uma foto,
            escolhe em qual pasta salvá-la com poucos toques, sem interromper o ritmo da aula.
          </p>
          <p>
            As pastas ficam salvas e disponíveis para uso contínuo, permitindo navegar pelo acervo
            e visualizar todo o material registrado por matéria de forma organizada.
          </p>
          <p>
            Para facilitar o estudo, a ferramenta conta com uma busca inteligente baseada em OCR,
            que lê o texto visível dentro das fotos e retorna os resultados correspondentes à palavra-chave digitada.
          </p>

          <button className="btn-destaque" onClick={onAbrirVideo}>
            ▶ Ver Protótipo em Vídeo
          </button>
        </div>

        <div className="cards-bloco">
          {recursos.map((recurso) => (
            <article className="card" key={recurso.titulo}>
              <p className="card-icon">{recurso.icone}</p>
              <h4>{recurso.titulo}</h4>
              <p>{recurso.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sobre
