import { Link } from 'react-router-dom'
import ListUsuarioImagesCard from './ListUsuarioImagesCard'
import './Usuario.css'
import UsuarioImagesCard from './UsuarioImagesCard'

function Usuario() {
  return (
    <div className="home-container">
      <h2 className="title">Categorías</h2>
      <div className="user_images">
        <Link to="/app/categoria/ciclismo">
          <UsuarioImagesCard
            ima="/ciclismo.png"
            txt="Ciclismo"
            style="categoria-foto"
          />
        </Link>
        <Link to="/app/categoria/senderismo">
          <UsuarioImagesCard
            ima="/senderismo.png"
            txt="Senderismo"
            style="categoria-foto"
          />
        </Link>
        <Link to="/app/categoria/camping">
          <UsuarioImagesCard
            ima="/camping.png"
            txt="Camping"
            style="categoria-foto"
          />
        </Link>
        <Link to="/app/categoria/playa">
          <UsuarioImagesCard
            ima="/playa.png"
            txt="Playa"
            style="categoria-foto"
          />
        </Link>
        <Link to="/app/categoria/surf">
          <UsuarioImagesCard
            ima="/surf.png"
            txt="Surf"
            style="categoria-foto"
          />
        </Link>
        <Link to="/app/categoria/buceo">
          <UsuarioImagesCard
            ima="/buceo.png"
            txt="Buceo"
            style="categoria-foto"
          />
        </Link>
        <Link to="/app/categoria/observacion_estrellas">
          <UsuarioImagesCard
            ima="/observacion.png"
            txt="Observacion"
            style="categoria-foto"
          />
        </Link>
      </div>
      <div className="activity-selection">
        <h2 className="title">Selección de actividades</h2>
      </div>
      {/*       <div className="seleccion">
        <UsuarioImagesCard ima="/playa.png" txt="Playa" />
        <UsuarioImagesCard ima="/surf.png" txt="Surf" />
        <UsuarioImagesCard ima="/buceo.png" txt="Buceo" />
        <UsuarioImagesCard ima="/observacion.png" txt="Observacion" />
      </div> */}
      <div className="list">
        <ListUsuarioImagesCard />
      </div>
    </div>
  )
}

export default Usuario
