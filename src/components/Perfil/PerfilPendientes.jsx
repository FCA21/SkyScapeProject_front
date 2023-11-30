import './PerfilPendientes.css'

function Pendientes() {
  return (
    <div className="pendientesContainer">
      <h2>Actividades Pendientes</h2>
      <div className="pendientes">
        <img src="/public/senderismo.png" alt="Pendiente 1" />
        <img src="/public/senderismo.png" alt="Pendiente 2" />
        <img src="/public/senderismo.png" alt="Pendiente 3" />
      </div>
    </div>
  )
}

export default Pendientes;
