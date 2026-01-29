import { useEffect } from "react"
import { useState } from "react"
function LoginModal({ onClose }) {
    const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState("")
const [loading, setLoading] = useState(false)
    useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === "Escape") onClose()
  }

  window.addEventListener("keydown", handleEsc)
  return () => window.removeEventListener("keydown", handleEsc)
}, [])

const handleLogin = () => {
  if (!email || !password) {
    setError("Email and password required")
    return
  }

  setError("")
  setLoading(true)

  setTimeout(() => {
    setLoading(false)
    alert("Login successful (API later)")
    onClose()
  }, 1200)
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
