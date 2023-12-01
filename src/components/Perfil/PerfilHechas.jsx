import './PerfilHechas.css'

function Hechas(props) {
  const filtrarHechas = () => {
    const actividadesFiltradas = props.actividadesHechas?.filter(
      (actividad) => {
        return actividad.usuario_actividad.estado === true
      }
    )
    return actividadesFiltradas
  }
  console.log(filtrarHechas())

  return (
    <div className="hechasContainer">
      <h2>Actividades Hechas</h2>
      <div className="hechas">
        {filtrarHechas()?.map((hecha) => {
          return (
            <div key={hecha.id}>
              <img src={hecha.image_url} />
              <p>
                {' '}
                {`${(
                  hecha.categoria.slice(0, 1).toUpperCase() +
                  hecha.categoria.slice(1)
                )
                  .split('_')
                  .join(' ')}-${hecha.nombre_actividad}`}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Hechas
