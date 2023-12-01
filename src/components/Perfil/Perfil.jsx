import './Perfil.css'
import Favoritos from './PerfilFavoritos'
import Pendientes from './PerfilPendientes'
import Hechas from './PerfilHechas'
import Config from './Config'
import { useState, useEffect } from 'react'
import { getPerfil } from '../../services/usuarioService'

function Perfil() {
  const [profile, setProfile] = useState({})
const [refresh, setRefresh] = useState(false)


  const getPerfilbyId = async () => {
    const result = await getPerfil()
    setProfile(result)
  }

  //console.log(profile.actividads)
  useEffect(() => {
    getPerfilbyId()
  }, [refresh])

  return (
    <div className="perfilContainer">
      <img className="userAvatar" alt="userAvatar" src="/ciclismo.png" />
      <div className="nombre"> {profile.username}</div>

      <Config />
      <Favoritos favUsers={profile.userFav} />
      <Pendientes actividadPendiente={profile.actividads} refresh={refresh} setRefresh={setRefresh} />
      <Hechas actividadesHechas = {profile.actividads} />
    </div>
  )
}

export default Perfil
