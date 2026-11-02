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
  const paragrafo = 'mb-4 text-base text-mudo'

  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
      <p className="mb-2 text-xs font-medium tracking-widest text-verde uppercase">01 — Sobre</p>
      <h2 className="mb-2 font-display text-4xl font-bold">O que é o <span className="text-roxo">Modo Estudo</span>?</h2>

      <div className="mt-10">
        <div className="mb-10 max-w-2xl">
          <p className={paragrafo}>
            A solução propõe uma ferramenta integrada à câmera do dispositivo, voltada para estudantes
            que desejam organizar o conteúdo fotografado em sala de aula de forma simples e eficiente.
          </p>
          <p className={paragrafo}>
            O usuário pode criar pastas nomeadas com as matérias que desejar e, após tirar uma foto,
            escolhe em qual pasta salvá-la com poucos toques, sem interromper o ritmo da aula.
          </p>
          <p className={paragrafo}>
            As pastas ficam salvas e disponíveis para uso contínuo, permitindo navegar pelo acervo
            e visualizar todo o material registrado por matéria de forma organizada.
          </p>
          <p className={paragrafo}>
            Para facilitar o estudo, a ferramenta conta com uma busca inteligente baseada em OCR,
            que lê o texto visível dentro das fotos e retorna os resultados correspondentes à palavra-chave digitada.
          </p>

          <button
            className="mt-5 inline-block cursor-pointer rounded-full border-2 border-verde bg-transparent px-7 py-3 font-display text-sm font-bold text-verde transition-colors duration-200 hover:bg-verde hover:text-fundo"
            onClick={onAbrirVideo}
          >
            ▶ Ver Protótipo em Vídeo
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {recursos.map((recurso) => (
            <article
              className="rounded-xl border border-borda bg-superficie2 p-6 transition duration-300 hover:-translate-y-1 hover:border-roxo/50"
              key={recurso.titulo}
            >
              <p className="mb-2.5 text-sm text-mudo">{recurso.icone}</p>
              <h4 className="mb-2 font-display text-base font-bold">{recurso.titulo}</h4>
              <p className="text-sm text-mudo">{recurso.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sobre
