import { useEffect } from "react"
import { useState } from "react"

function SignupModal({ onClose }) {
    useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === "Escape") onClose()
  }

  window.addEventListener("keydown", handleEsc)
  return () => window.removeEventListener("keydown", handleEsc)
}, [])
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState("")
const [loading, setLoading] = useState(false)
const handleSignup = () => {
  if (!name || !email || !password) {
    setError("All fields are required")
    return
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters")
    return
  }

  setError("")
  setLoading(true)

  setTimeout(() => {
    setLoading(false)
    alert("Signup successful (API will be added later)")
    onClose()
  }, 1500)
}

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        {error && <p className="error-text">{error}</p>}
        <button className="auth-btn" onClick={handleSignup} disabled={loading}>
  {loading ? <div className="spinner"></div> : "Signup"}
</button>
        <p className="close-btn" onClick={onClose}>✖ Close</p>
      </div>
    </div>
  )
}

export default SignupModal
