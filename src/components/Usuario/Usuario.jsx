import ListUsuarioImagesCard from './ListUsuarioImagesCard'
import './Usuario.css'
import UsuarioImagesCard from './UsuarioImagesCard'

function Usuario() {
  return (
    <div className="home-container">
      <h2 className="title">Categorías</h2>
      <div className="user_images">
        {/* Primer conjunto de tres imágenes */}
        <UsuarioImagesCard
          ima="/ciclismo.png"
          txt="Ciclismo"
          style="categoria-foto"
        />
        <UsuarioImagesCard
          ima="/senderismo.png"
          txt="Senderismo"
          style="categoria-foto"
        />
        <UsuarioImagesCard
          ima="/camping.png"
          txt="Camping"
          style="categoria-foto"
        />
        <UsuarioImagesCard
          ima="/playa.png"
          txt="Playa"
          style="categoria-foto"
        />
        <UsuarioImagesCard ima="/surf.png" txt="Surf" style="categoria-foto" />
        <UsuarioImagesCard
          ima="/buceo.png"
          txt="Budeo"
          style="categoria-foto"
        />
        <UsuarioImagesCard
          ima="/observacion.png"
          txt="Observacion"
          style="categoria-foto"
        />
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
