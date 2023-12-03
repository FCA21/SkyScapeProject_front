import './ActividadUp.css';

const ActividadUp = ({ actividad }) => {
  // Define la información de las actividades
  const actividadesInfo = {
    'Llanos de la Pez': {
      descripcion: 'Descripción de Llanos de la Pez...',
      imagenSrc: '/public/llanos_de_la_pez.png',
      alt: 'Llanos de la Pez',
    },
    'Corral de los Juncos': {
      descripcion: 'Descripción de Corral de los Juncos...',
      imagenSrc: '/public/corral_de_los_juncos.png',
      alt: 'Corral de los Juncos',
    },
    // Agrega más actividades según sea necesario
  };

  const renderActividadInfo = () => {
    if (actividadesInfo[actividad]) {
      const { descripcion, imagenSrc, alt } = actividadesInfo[actividad];
      return (
        <>
          <div className="activity-info">
            <h6>{descripcion}</h6>
            <img src={imagenSrc} alt={alt} />
          </div>
        </>
      );
    }
  };

  return (
    <div className="activity-container">
      <div className="activity-title">
        <h4>{actividad}</h4>
      </div>
      {renderActividadInfo()}
    </div>
  );
};

export default ActividadUp;
