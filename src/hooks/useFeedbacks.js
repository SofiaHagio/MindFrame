import { useEffect, useState } from 'react'
import api from '../utils/api.js'

export function useFeedbacks() {
  const [feedbacks, setFeedbacks] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  async function carregarFeedbacks() {
    setCarregando(true)
    setErro('')

    try {
      const resposta = await api.get('/feedbacks', {
        params: { sortBy: 'createdAt', order: 'desc' },
      })
      setFeedbacks(resposta.data)
    } catch {
      setErro('Não foi possível carregar os feedbacks.')
    } finally {
      setCarregando(false)
    }
  }

  async function enviarFeedback(dados) {
    const resposta = await api.post('/feedbacks', {
      ...dados,
      createdAt: new Date().toISOString(),
    })
    setFeedbacks((atual) => [resposta.data, ...atual])
  }

  useEffect(() => {
    carregarFeedbacks()
  }, [])

  return { feedbacks, carregando, erro, carregarFeedbacks, enviarFeedback }
}
