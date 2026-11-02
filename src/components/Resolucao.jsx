const passos = [
  {
    numero: '01',
    titulo: 'Estrutura do Aplicativo',
    texto: 'Desenvolver em React Native com navegação por abas: Câmera, Pastas e Busca. Usar banco de dados local com SQLite para armazenar fotos e pastas.',
  },
  {
    numero: '02',
    titulo: 'Módulo de Câmera',
    texto: 'Integrar expo-camera. Após tirar a foto, um modal aparece para escolher a pasta de destino. A foto é salva localmente.',
  },
  {
    numero: '03',
    titulo: 'OCR — Leitura de Texto',
    texto: 'Usar ML Kit para reconhecer texto nas fotos, funcionando offline. O texto extraído é salvo junto com a foto.',
  },
  {
    numero: '04',
    titulo: 'Busca Inteligente',
    texto: 'Busca por palavra-chave no texto OCR salvo. Retorna fotos de qualquer pasta que contenham o termo buscado.',
  },
  {
    numero: '05',
    titulo: 'Personalização e Gestão',
    texto: 'Interface para criar, renomear e excluir pastas com seleção de cor. Possibilidade de mover fotos entre pastas.',
  },
  {
    numero: '06',
    titulo: 'Favoritos e Anotações',
    texto: 'Permitir que o estudante destaque materiais importantes e adicione observações próprias para facilitar revisões e complementar o conteúdo das fotos.',
  },
]

function Resolucao() {
  return (
    <section id="resolucao" className="bg-superficie px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-medium tracking-widest text-verde uppercase">02 — Resolução</p>
        <h2 className="mb-2 font-display text-4xl font-bold">Como iremos <span className="text-roxo">desenvolver</span></h2>

        <div className="mt-12 border-l-2 border-roxo pl-5 md:pl-10">
          {passos.map((passo) => (
            <article className="mb-12 flex flex-col gap-6 last:mb-0 md:flex-row" key={passo.numero}>
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-roxo font-display text-sm font-bold text-white shadow-lg shadow-roxo/40">{passo.numero}</div>
              <div>
                <h3 className="mb-2 font-display text-lg font-bold">{passo.titulo}</h3>
                <p className="mb-3 text-sm text-mudo">{passo.texto}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resolucao
