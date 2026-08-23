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
    <section id="resolucao" className="secao-escura resolucao">
      <div className="inner">
        <p className="label">02 — Resolução</p>
        <h2>Como iremos <span>desenvolver</span></h2>

        <div className="passos">
          {passos.map((passo) => (
            <article className="passo" key={passo.numero}>
              <div className="passo-num">{passo.numero}</div>
              <div className="passo-corpo">
                <h3>{passo.titulo}</h3>
                <p>{passo.texto}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resolucao
