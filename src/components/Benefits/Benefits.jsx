import './Benefits.css'
import './Benefits.css'

export const Benefits = () => {
  return (
    <div className="small-cards">
      <div className="heading-container">
        <div className="work">Ventajas de unirte</div>
        <div className="text">Accede a contenido exclusivo</div>
      </div>
      <div className="feature-grid">
        <div className="feature">
          <img
            className="icon"
            alt="Icon musho icon"
            src="camarita.png"
          />
          <div className="div">Información del tiempo</div>
          <div className="work-2">
            Detalles del tiempo, optimiza tu experiencia.
          </div>
        </div>
        <div className="feature">
          <img
            className="icon"
            alt="Icon musho icon"
            src="camarita.png"
          />
          <div className="div">Organizar tu actividad</div>
          <div className="work-2">
            Experiencias guiadas.
          </div>
        </div>
        <div className="feature">
          <img
            className="icon"
            alt="Icon musho icon"
            src="camarita.png"
          />
          <div className="div">Soporte de la comunidad</div>
          <div className="work-2">
            Opiniones de otros aventureros.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits