import React from 'react'
import UsuarioImagesCard from './UsuarioImagesCard'
import { getAllActivities } from '../../services/actividadesService'
import { useEffect, useState } from 'react'
function ListUsuarioImagesCard() {
  const [actividades, setActividades] = useState([])
  const getDataAllActivities = async () => {
    const result = await getAllActivities()
    setActividades(result)
  }

  useEffect(() => {
    getDataAllActivities()
  }, [])



  return actividades.map((actividad, idx) => {
    return <UsuarioImagesCard key={idx} ima={actividad.image_url} txt={actividad.nombre_actividad} style='actividades-foto'  />
  })
}

export default ListUsuarioImagesCard
