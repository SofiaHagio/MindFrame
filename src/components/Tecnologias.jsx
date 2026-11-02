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
    <section id="tecnologia" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
      <p className="mb-2 text-xs font-medium tracking-widest text-verde uppercase">03 — Tecnologias</p>
      <h2 className="mb-2 font-display text-4xl font-bold"><span className="text-roxo">Tecnologias</span> utilizadas</h2>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {tecnologias.map(([nome, texto, tipo]) => (
          <div
            className="rounded-xl border border-borda bg-superficie2 px-5 py-6 transition duration-300 hover:-translate-y-1 hover:border-verde/40"
            key={nome}
          >
            <h4 className="mb-2 font-display text-base font-bold">{nome}</h4>
            <p className="mb-3.5 text-sm text-mudo">{texto}</p>
            <span className="inline-block rounded-full border border-verde/20 bg-verde/10 px-2.5 py-1 font-mono text-xs font-bold tracking-widest text-verde uppercase">
              {tipo}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tecnologias
