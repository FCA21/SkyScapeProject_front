// Favoritos.js
import './PerfilFavoritos.css'

function Favoritos({ favUsers }) {
  
  return (
    <div className="favoritosContainer">
      <h2>Favoritos</h2>
      <div className="favoritos">
        {favUsers?.map((favorito) => {
          return (
            <div key={favorito.id}>
              <img src={favorito.image_url} />
              <p>{`${(favorito.categoria.slice(0,1).toUpperCase()+favorito.categoria.slice(1)).split("_").join(" ")}-${favorito.nombre_actividad}`}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Favoritos
