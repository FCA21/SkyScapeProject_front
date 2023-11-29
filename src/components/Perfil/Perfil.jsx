import './Perfil.css';
import Favoritos from './PerfilFavoritos'
import Pendientes from './PerfilPendientes'
import Hechas from './PerfilHechas'
import Config from './Config'

function Perfil() {
  return (
    <div className="perfilContainer">
      <img className="userAvatar" alt="userAvatar" src="/ciclismo.png" />
        <div className="nombre">John Doe</div>
        <input className="perfilBarra" alt='perfilBarra' placeholder='Búsqueda'/>
      <Config />
      <Favoritos />
      <Pendientes />
      <Hechas />
    </div>
  );
}

export default Perfil;
