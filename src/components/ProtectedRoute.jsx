import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'

function ProtectedRoute({ children }) {
  const { logado } = useAuth()
  const location = useLocation()

  if (!logado) {
    return <Navigate to="/login" replace state={{ voltarPara: location.pathname }} />
  }

  return children
}

export default ProtectedRoute
