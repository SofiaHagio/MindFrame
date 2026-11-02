import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Estudo from './pages/Estudo.jsx'
import NaoEncontrada from './pages/NaoEncontrada.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/modo-estudo"
          element={
            <ProtectedRoute>
              <Estudo />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NaoEncontrada />} />
    </Routes>
  )
}

export default App
