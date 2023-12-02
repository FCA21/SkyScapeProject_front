import React from 'react'
import './CategoryMap.css'
import Mapa from '../Mapa/Mapa'


function CategoryMap() {
  return (
    <div className="map-container">
      <h4 className="map-text">Mapa</h4>
      <div className="map-image">
        <Mapa/>
     
      </div>
    </div>
  )
}

export default CategoryMap