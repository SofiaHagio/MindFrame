const tecnologias = [
  ['React Native', 'Framework mobile para iOS e Android com uma única base de código.', 'Core'],
  ['Expo', 'Plataforma que simplifica acesso à câmera, arquivos e builds.', 'Platform'],
  ['SQLite', 'Banco de dados local para armazenar fotos, pastas e textos OCR.', 'Database'],
  ['ML Kit (OCR)', 'Reconhecimento de texto em imagens, funciona completamente offline.', 'AI/ML'],
  ['Expo FileSystem', 'Gerenciamento de arquivos de imagem no dispositivo.', 'Storage'],
  ['React Navigation', 'Navegação fluida entre telas com tabs, stacks e modais.', 'Navigation'],
  ['TypeScript', 'Tipagem estática para maior segurança e produtividade no código.', 'Language'],
  ['Jest', 'Testes unitários para garantir qualidade das funcionalidades.', 'Testing'],
]

function Tecnologias() {
  return (
    <section id="tecnologia" className="secao">
      <p className="label">03 — Tecnologias</p>
      <h2><span>Tecnologias</span> utilizadas</h2>

      <div className="tech-lista">
        {tecnologias.map(([nome, texto, tipo]) => (
          <div className="tech-item" key={nome}>
            <h4>{nome}</h4>
            <p>{texto}</p>
            <span className="badge">{tipo}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tecnologias
