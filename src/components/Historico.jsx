function Historico({ historico }) {
  if (historico.length === 0) {
    return <div className="estado-vazio">O histórico aparecerá aqui conforme você usar o Modo Estudo.</div>
  }

  return (
    <div className="lista-historico">
      {historico.map((item) => (
        <article key={item.id}>
          <span className="historico-ponto" />
          <div>
            <p>{item.texto}</p>
            <small>{item.data}</small>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Historico
