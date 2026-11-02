import { useState } from 'react'
import Hero from '../components/Hero.jsx'
import Sobre from '../components/Sobre.jsx'
import Resolucao from '../components/Resolucao.jsx'
import Tecnologias from '../components/Tecnologias.jsx'
import Time from '../components/Time.jsx'
import VideoModal from '../components/VideoModal.jsx'

function Home() {
  const [videoAberto, setVideoAberto] = useState(false)

  return (
    <>
      <Hero />
      <Sobre onAbrirVideo={() => setVideoAberto(true)} />
      <Resolucao />
      <Tecnologias />
      <Time />
      <VideoModal aberto={videoAberto} onFechar={() => setVideoAberto(false)} />
    </>
  )
}

export default Home
