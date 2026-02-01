import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"


function Navbar({ onSignupClick, onLoginClick }) {
const { isAuthenticated, logout } = useContext(AuthContext)
  return (
    <nav className="navbar">
      <div className="navbar-left">
        Blue Bus
      </div>

      <div className="navbar-right">
        {/* {!isAuthenticated? (<button className="btn login-btn" onClick={onLoginClick}>Login</button>)
        : (<button className="btn login-btn" onClick={logout}>Logout</button>)}
        
        <button className="btn signup-btn" onClick={onSignupClick}>Signup</button> */}

        {!isAuthenticated ? (
  <>
    <button className="btn login-btn" onClick={onLoginClick}>Login</button>
    <button className="btn signup-btn" onClick={onSignupClick}>Signup</button>
  </>
) : (
  <button className="btn logout-btn" onClick={
    () => {
      logout()
      Navigate("/home")  // Redirect to home after logout
    }
  }>Logout</button>
)}

      </div>
    </nav>
  )
}

export default Navbar
