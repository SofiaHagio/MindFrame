import { Link } from 'react-router-dom'

function NaoEncontrada() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-10 text-center">
      <p className="mb-2 text-xs font-medium tracking-widest text-verde uppercase">Erro 404</p>
      <h1 className="mb-4 font-display text-3xl font-black md:text-4xl">
        Página não <span className="text-roxo">encontrada</span>
      </h1>
      <p className="mb-8 max-w-md text-mudo">O endereço que você tentou acessar não existe ou foi movido.</p>
      <Link to="/" className="mb-8 inline-block rounded-full bg-roxo px-9 py-3.5 font-display text-sm font-bold text-white shadow-lg shadow-roxo/40 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-roxo/60">Voltar para o início</Link>
    </div>
  )
}

export default NaoEncontrada
