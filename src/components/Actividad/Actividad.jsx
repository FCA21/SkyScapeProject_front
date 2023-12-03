import React from 'react'
import './Actividad.css'
import ActividadUp from './ActividadUp/ActividadUp'
import BasicDateCalendar from './Calendario/Calendario'
import MapaActividad from './ActividadMap/ActividadMap'
import Clima from './Clima/Clima'



function Actividad() {
  return (
    <div className='activityContainer'>
      <ActividadUp/>
      <div className='actividadparra'>
      <BasicDateCalendar/>
      <div className='mapaActividad'>
      <p>Localización de la actividad</p>
      <MapaActividad />
      <div className='climate'>
      <Clima/>
      </div>
      </div>
</div>


    </div>
  )
}

export default Actividad