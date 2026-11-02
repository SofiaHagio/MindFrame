import { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useLocalStorage('mindframe_usuario', null)

  function entrar(login, senha) {
    if (login !== 'admin' || senha !== '1234') return false

    setUsuario({ login, nome: 'Administrador', entrouEm: new Date().toISOString() })
    return true
  }

  function sair() {
    setUsuario(null)
  }

  return (
    <AuthContext.Provider value={{ usuario, logado: Boolean(usuario), entrar, sair }}>
      {children}
    </AuthContext.Provider>
  )
}
