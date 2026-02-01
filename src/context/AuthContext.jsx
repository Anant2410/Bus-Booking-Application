import { createContext, useState } from "react"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  )

  const logout = () => {
    localStorage.removeItem("token")
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated, // ✅ THIS WAS MISSING / MISMATCHED
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
