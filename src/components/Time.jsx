import { equipe } from '../data/equipe.js'

function Time() {
  return (
    <section id="time" className="bg-superficie px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-medium tracking-widest text-verde uppercase">04 — Time</p>
        <h2 className="mb-2 font-display text-4xl font-bold">Nosso <span className="text-roxo">Time</span></h2>

        <div className="mt-9 flex flex-wrap justify-center gap-6">
          {equipe.map((pessoa) => (
            <article
              className="group w-full overflow-hidden rounded-xl border border-borda bg-superficie2 text-center transition duration-300 hover:-translate-y-1 hover:border-roxo/40 md:w-72"
              key={pessoa.rm}
            >
              <div className="h-72 w-full overflow-hidden bg-superficie">
                <img
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={pessoa.foto}
                  alt={pessoa.nome}
                  style={{ objectPosition: pessoa.posicao }}
                />
              </div>
              <h4 className="mx-4 mt-4 mb-1 font-display text-base font-bold">{pessoa.nome}</h4>
              <p className="px-4 pb-5 text-sm text-mudo">{pessoa.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Time
