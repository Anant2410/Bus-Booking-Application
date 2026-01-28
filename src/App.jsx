import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar />

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
    </div>
  )
}

export default App
