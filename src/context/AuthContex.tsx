import { createContext, useEffect, useState, ReactNode } from 'react'
import Cookies from 'js-cookie'

// AuthContext typelari
type AuthContextType = {
  token: string | null | boolean
  isAuthenticated: boolean
  isLoading: boolean
  loginFn: (token: string) => void
  logout: () => void
}

// Default qiymatlar
export const AuthContex = createContext<AuthContextType>({
  token: null,
  isAuthenticated: false,
  isLoading: true,
  loginFn: () => {},
  logout: () => {},
})

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const savedToken = Cookies.get('token') || null
    if (savedToken) {
      setToken(savedToken)
    }
    setIsLoading(false)
  }, [])

  const loginFn = (newToken: string) => {
    Cookies.set('token', newToken) 
    setToken(newToken)
  }

  const logout = () => {
    Cookies.remove('token')
    setToken(null)
  }

  const isAuthenticated = !!token

  return (
    <AuthContex.Provider
      value={{ token, isAuthenticated, isLoading, loginFn, logout }}
    >
      {children}
    </AuthContex.Provider>
  )
}
