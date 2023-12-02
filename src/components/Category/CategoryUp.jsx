import './CategoryUp.css'


const beneficiosAcampada = [
  "Bienestar mental: Reducción del estrés y mejora del estado de ánimo.",
  "Ejercicio físico: Senderismo y actividades al aire libre para mejorar la salud cardiovascular.",
  "Exposición al aire fresco: Fortalecimiento del sistema inmunológico y mejora de la función pulmonar.",
  "Experiencia sensorial: Estímulos visuales, auditivos y táctiles para aumentar la percepción sensorial.",
  "Descanso de dispositivos electrónicos: Reducción de la fatiga digital y mejora de la calidad del sueño.",
  "Vinculación social: Fortalecimiento de relaciones y sentido de pertenencia.",
  "Recarga de energía: Sensación de revitalización y renovación positiva."
];
const CategoryUp = ({categoria}) => {
  const mostrarDescripcion = () =>  {
    if(categoria === 'Camping') {
      return (
        <>
          <h6>Descripcion de camping</h6>
          <p>La actividad de acampada en Gran Canaria ofrece la oportunidad de disfrutar de la naturaleza en un entorno diverso y único. Los campamentos suelen llevarse a cabo en áreas designadas y permitidas, como parques naturales o zonas habilitadas, donde se puede experimentar la belleza de la isla, sus paisajes volcánicos, bosques, playas y miradores.
          Los campistas pueden realizar actividades al aire libre como senderismo, observación de aves, exploración de cuevas, disfrutar de vistas panorámicas y pasar noches bajo un cielo estrellado, todo ello inmersos en la tranquilidad y la belleza natural de Gran Canaria.
          </p>
          <h6>Beneficios para la salud del camping</h6>
          <ul>
          {beneficiosAcampada.map((beneficio, index) => (
          <li key={index}>{beneficio}</li>
        ))}
          </ul>
        </>
      )
    }
    else if (categoria === 'playa') {
       return <h6>Descripcion de playa</h6>
    }
  }
  return (
    <div className="box">
      <div className="categoryGroup">
        <div className="categoryText">
          <h4>{categoria}</h4>
          {mostrarDescripcion()}
          <p></p>
          <p></p>
        </div>
      </div>
      <div className="categoriaImage">
        <img alt="ImagenCategoria" src="/public/camping.png" />
      </div>
    </div>
  )
}

export default CategoryUp
