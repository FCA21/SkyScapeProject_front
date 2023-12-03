import './ActividadUp.css'


function ActividadUp({ titulo, descripcion, imagenURL }) {
  return (
    <div className="actividad-contenedor">
      <div className="texto-actividad">
        <h2>Llanos de la pez</h2>
        <p className='descripcionActividad'>Este entorno ofrece a los visitantes la oportunidad de sumergirse en un paisaje excepcional y disfrutar de actividades al aire libre.
Con su extensa área, es un lugar ideal para practicar senderismo, explorar la naturaleza y desconectar del bullicio de la vida cotidiana. Ofrece una experiencia serena en un entorno natural, perfecto para aquellos que buscan tranquilidad y conexión con la naturaleza.
La zona de acampada de Llanos de la Pez proporciona un espacio amplio y propicio para acampar, permitiendo a los visitantes disfrutar de la belleza natural y las actividades al aire libre, todo en un ambiente tranquilo y relajante.</p>
      </div>
      <div className="imagen-actividad">
        <img src='/public/camping_real.jpg' alt="Imagen de la actividad" />
      </div>
    </div>
  );
}

export default ActividadUp;
