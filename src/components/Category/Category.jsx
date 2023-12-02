import './Category.css'
import CategoryUp from './CategoryUp'
import CategoryMap from './CategoryMap'
import Actividades from './CategoryActivities'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllActivitiesByCategorie } from '../../services/actividadesService'

function Category() {

  const { categoria } = useParams()

  const [actividades, setActividades]= useState([])
  

const getAllActivitieDataByCategorie = async () =>{
  const result = await getAllActivitiesByCategorie()
  setActividades(result)
}

useEffect(()=>{
  getAllActivitieDataByCategorie()
},[] )

  return (
    <div className="categoryContainer">
      <CategoryUp categoria={categoria.charAt(0).toUpperCase() + categoria.slice(1)} />
      <CategoryMap />
      <Actividades actividades={actividades} categoria={categoria} />
    </div>
  )
}

export default Category