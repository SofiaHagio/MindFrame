import { equipe } from '../data/equipe.js'

function Time() {
  return (
    <section id="time" className="secao-escura">
      <div className="inner">
        <p className="label">04 — Time</p>
        <h2>Nosso <span>Time</span></h2>

        <div className="time-lista">
          {equipe.map((pessoa) => (
            <article className="membro" key={pessoa.rm}>
              <div className="foto-wrap">
                <img
                  src={pessoa.foto}
                  alt={pessoa.nome}
                  style={{ objectPosition: pessoa.posicao }}
                />
              </div>
              <h4>{pessoa.nome}</h4>
              <p>{pessoa.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Time
