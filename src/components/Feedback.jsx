import { useState } from 'react'
import FeedbackModal from './FeedbackModal.jsx'

function Feedback() {
  const [aberto, setAberto] = useState(false)

  return (
    <>
      <button
        className="fixed right-4 bottom-4 z-40 cursor-pointer rounded-full bg-roxo px-6 py-3 font-display text-sm font-bold text-white shadow-lg shadow-roxo/40 transition duration-200 hover:-translate-y-1 sm:right-6 sm:bottom-6"
        onClick={() => setAberto(true)}
      >
        💬 Feedback
      </button>

      {aberto && <FeedbackModal onFechar={() => setAberto(false)} />}
    </>
  )
}

export default Feedback
