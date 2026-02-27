import React, { useState } from 'react'
import Navbar from './components/Navbar'
import personajesData from '../public/PersonajesTLOTR.json'
import './Personajes.css' 

const Personajes = () => {
  const [busqueda, setBusqueda] = useState('')
  const [personaje, setPersonaje] = useState(null)
  const [error, setError] = useState('')

  const buscarPersonaje = () => {
    if (!busqueda.trim()) return
    setError('')
    setPersonaje(null)

    const resultado = personajesData.find(
      (p) => p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )

    if (resultado) {
      setPersonaje(resultado)
    } else {
      setError('No se encontró ningún personaje con ese nombre.')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') buscarPersonaje()
  }

  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="main-content container mt-5">
        <div className="search-container">
          <h2 className="titulo-seccion">BUSCAR PERSONAJE</h2>

          <div className="search-controls">
            <input
              type="text"
              className="form-control-custom"
              placeholder="Ej: Gandalf, Frodo, Aragorn..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="btn-explorar" onClick={buscarPersonaje}>
              Buscar
            </button>
          </div>

          {error && <p className="error-message">{error}</p>}
        </div>

        {personaje && (
          <div className="character-display-card">
            <div className="info-column">
              <h3 className="character-name-title">{personaje.nombre}</h3>
              <div className="stats-list">
                <p><span>Raza:</span> {personaje.raza || 'Desconocida'}</p>
                <p><span>Género:</span> {personaje.genero || 'Desconocido'}</p>
                <p><span>Reino:</span> {personaje.realm || 'Desconocido'}</p>
                <p><span>Nacimiento:</span> {personaje.nacimiento || 'Desconocida'}</p>
              </div>
            </div>
            
            <div className="image-column">
              <div className="char-frame">
                {personaje.imagen ? (
                  <img src={personaje.imagen} alt={personaje.nombre} className="char-img" />
                ) : (
                  <div className="no-img">Imagen no disponible</div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="footer-custom">
        <p className="footer-text">
          The Rodro of The Rings - Derechos reservados 2026
        </p>
      </footer>
    </div>
  )
}

export default Personajes