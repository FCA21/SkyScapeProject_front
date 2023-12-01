import { Button, setRef } from '@mui/material'
import './PerfilPendientes.css'
import { setHecha } from '../../services/estatoService.js'
import { useEffect, useState } from 'react'
function Pendientes(props) {
  /* console.log(
    props.actividadPendiente
  ) */

   const handleMarcarComoHecha = async (idActividad) => {
     try {
      const response = await setHecha(idActividad)
      props.setRefresh(!props.refresh)
      console.log(response)
     } catch (error) {
       console.error(error)
     }
   }

  const filtrarPendientes = () => {
    const actividadesFiltradas = props.actividadPendiente?.filter((actividad) => {
      return actividad.usuario_actividad.estado === false
    })
    return actividadesFiltradas
  }
  console.log(filtrarPendientes())
  return (
    <div className="pendientesContainer">
      <h2>Actividades Pendientes</h2>
      <div className="pendientes">
        {
          //tanto con ?. o con && tienen el mismo funcioonamiento
          filtrarPendientes() && filtrarPendientes().map((pendiente)=> {
            return (
              <div key={pendiente.id} className="pedienteItem">
                <img src={pendiente.image_url} alt={pendiente.nombre} />
                <p>
                  {`${(pendiente.categoria.slice(0,1).toUpperCase()+pendiente.categoria.slice(1)).split("_").join(" ")}-${pendiente.nombre_actividad}`}
                </p>
                <Button 
                  variant="contained"
                  sx={{
                    fontFamily: 'Work Sans-Regular, Helvetica',
                    fontWeight: '1000',
                    marginwidth: '7rem',
                    borderRadius: '15px',
                    backgroundColor: '#b3ecd2',
                    color: '#064E3B',
                    '&:hover': {
                      border: '1px solid white',
                      color: 'white',
                      backgroundColor: '#059669',
                    },
                  }} onClick ={() => handleMarcarComoHecha(pendiente.id)}
                >
                  Hecha
                </Button>
              </div>
            )
          })   
        }
        {/* <img src="/public/senderismo.png" alt="Pendiente 1" />
        <img src="/public/senderismo.png" alt="Pendiente 2" />
        <img src="/public/senderismo.png" alt="Pendiente 3" /> */}
      </div>
    </div>
  )
}

export default Pendientes;
