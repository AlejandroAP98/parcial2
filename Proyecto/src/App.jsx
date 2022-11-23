import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './inicio'
import './index.css'
import Tabla from './tabla'



function App() {
  return (
    <div>
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/" className="btn btn-black">Inicio</Link>
                        <Link to="/tabla" className="btn btn-black">Tabla</Link>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/tabla" element={<Tabla/>} />
            </Routes>
            <Routes>
                <Route path="/" element={<Inicio/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default App

