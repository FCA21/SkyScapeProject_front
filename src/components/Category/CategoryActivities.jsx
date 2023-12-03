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
          return (
            <div key={actividad.id} className="image-item">
              <img src="/public/camping.png" alt="Actividad 1" />
              <p>Actividad 1</p>
            </div>
          )
        })
      }
      </div>
    
    </div>
  )
}

export default Actividades
