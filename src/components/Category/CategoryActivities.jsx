import React from 'react'
import './CategoryActivities.css'

function Actividades({ actividades, categoria }) {
  const filtrarActividades = () => {
    const actividadesFiltradas = actividades.filter((actividad) => actividad.categoria === categoria)
    return actividadesFiltradas
  }
  return (
    <div className="activitiesContainer">
      <h4>Actividades</h4>
      <div className="activities">
      {
        filtrarActividades().map((actividad) => {
          console.log(actividad)
          return (
            <div key={actividad.id} className="image-item">
              <img src="/public/playa.png" alt="Actividad 1" />
              <p>Actividad 1</p>
            </div>
          )
        })
      }
      </div>
      {/* <div className="activities">
        <div className="image-item">
          <img src="/public/playa.png" alt="Actividad 1" />
          <p>Actividad 1</p>
        </div>
        <div className="image-item">
          <img src="/public/camping.png" alt="Actividad 2" />
          <p>Actividad 2</p>
        </div>
        <div className="image-item">
          <img src="/public/playa.png" alt="Actividad 3" />
          <p>Actividad 3</p>
        </div>
      </div>
      <div className="activities">
        <div className="image-item">
          <img src="/public/playa.png" alt="Actividad 4" />
          <p>Actividad 4</p>
        </div>
        <div className="image-item">
          <img src="/public/camping.png" alt="Actividad 5" />
          <p>Actividad 5</p>
        </div>
        <div className="image-item">
          <img src="/public/playa.png" alt="Actividad 6" />
          <p>Actividad 6</p>
        </div>
      </div> */}
    </div>
  )
}

export default Actividades
