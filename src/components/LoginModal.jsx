import { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

function LoginModal({ onClose }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { setIsAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === "Escape") onClose()
  }

  window.addEventListener("keydown", handleEsc)
  return () => window.removeEventListener("keydown", handleEsc)
}, [onClose])

const handleLogin = async () => {
  if (!email || !password) {
    setError("Email and password required")
    return
  }

  setError("")
  setLoading(true)

  try {
    const response = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })

    if (!response.ok) {
      throw new Error("Invalid email or password")
    }

    const data = await response.json()

    //store jwt token
    localStorage.setItem("token", data.token)
    setIsAuthenticated(true)
    //close modal
    onClose()
    navigate("/main")
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <h2>Login</h2>

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="error-text">{error}</p>}
        <button className="auth-btn" onClick={handleLogin} disabled={loading}>
  {loading ? <div className="spinner"></div> : "Login"}
</button>


        <p className="close-btn" onClick={onClose}>✖ Close</p>
      </div>
    </div>
  )
}

export default LoginModal
