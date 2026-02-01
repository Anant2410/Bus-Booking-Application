import Navbar from './components/Navbar'
import SignupModal from "./components/SignupModal"
import LoginModal from "./components/LoginModal"
import { AuthProvider } from "./context/AuthContext"



import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"


function App() {
  const [showSignup, setShowSignup] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="app">
      <AuthProvider>
        <Navbar 
          onSignupClick={() => setShowSignup(true)} 
          onLoginClick={() => setShowLogin(true)} 
        />

        {showLogin && (
          <LoginModal onClose={() => setShowLogin(false)} />
        )}

        {showSignup && (
          <SignupModal onClose={() => setShowSignup(false)} />
        )}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          {/* Home page */}
          <Route path="/home"
            element={
              <main className="main-content">
                <div className="hero">
                  <div className="hero-content">
                    <h1>Book Your Bus Journey Easily</h1>
                    <p>Fast, safe and affordable bus booking experience</p>
                  </div>
                </div>
                <footer className="footer">
                  © 2026 Blue Bus. All rights reserved.
                </footer>
              </main>
            }
          />
          <Route
            path="/main_page"
            element={
                <main className="main-content">
                  <h1>Welcome to the Main Page 🚍</h1>
                  <p>You are logged in!</p>
                </main>
            }
          />
        </Routes>
    </AuthProvider>
    </div>
  )
}

export default App
