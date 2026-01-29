import Navbar from './components/Navbar'
import SignupModal from "./components/SignupModal"
import LoginModal from "./components/LoginModal"


import { useState } from "react"


function App() {
  const [showSignup, setShowSignup] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="app">
      <Navbar 
        onSignupClick={() => setShowSignup(true)} 
        onLoginClick={() => setShowLogin(true)} 
        />
      <main className="main-content">
        <div className="hero">
          <div className="hero-content">
            <h1>Book Your Bus Journey Easily</h1>
            <p>Fast, safe and affordable bus booking experience</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        © 2026 Blue Bus. All rights reserved.
      </footer>
      {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

    </div>
  )
}

export default App
