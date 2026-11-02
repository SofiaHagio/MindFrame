import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-borda bg-superficie px-10 py-9 text-center">
      <Link className="block font-display text-xl font-black text-texto" to="/#inicio">Mind<span className="text-roxo">Frame</span></Link>
    </footer>
  )
}

export default Footer
