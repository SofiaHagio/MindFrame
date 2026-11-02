import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Feedback from './Feedback.jsx'

function Layout() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash, key])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Feedback />
    </>
  )
}

export default Layout
