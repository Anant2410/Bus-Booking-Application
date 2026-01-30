import { useEffect } from "react"
import { useState } from "react"

function SignupModal({ onClose }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)}, [])

  const handleSignup = async () => {
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

  try {
    const response = await fetch(
      "http://localhost:8080/api/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    )

    const data = await response.json().catch(() => null)

    if (!response.ok) {
      throw new Error(data?.error || "Signup failed")
    }

    alert("Signup successful 🎉")
    onClose()

  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
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
