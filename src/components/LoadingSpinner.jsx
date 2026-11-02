function LoadingSpinner({ texto = 'Carregando...' }) {
  return (
    <div className="flex flex-col items-center gap-3.5 p-6 text-sm text-mudo">
      <span className="size-9 animate-spin rounded-full border-4 border-roxo/20 border-t-roxo" />
      <p>{texto}</p>
    </div>
  )
}

export default LoadingSpinner
