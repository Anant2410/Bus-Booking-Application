function Navbar({ onSignupClick, onLoginClick }) {

  return (
    <nav className="navbar">
      <div className="navbar-left">
        Blue Bus
      </div>

      <div className="navbar-right">
        <button className="btn login-btn" onClick={onLoginClick}>Login</button>
        <button className="btn signup-btn" onClick={onSignupClick}>Signup</button>

      </div>
    </nav>
  )
}

export default Navbar
