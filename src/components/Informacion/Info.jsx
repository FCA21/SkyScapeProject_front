import React from 'react';
import './Info.css';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import ImagesCard from '../ImagesCard/ImagesCard';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function Info() {
  return (
    <div className='info-container'>
            <p className='infoTitle'>CATEGORÍAS</p>
      <div className="info-images">
        <div className="image-description">
          <div className="image-info">
            <ImagesCard ima="/ciclismo.png" txt="Ciclismo" />
          </div>
          <div className="text-info">
            <p>
El ciclismo, como actividad recreativa o deportiva, representa una forma versátil y enriquecedora
 de experimentar el mundo que nos rodea. Más allá de ser un ejercicio físico, el ciclismo abarca un amplio espectro: desde paseos relajantes por entornos naturales hasta emocionantes recorridos en competiciones de alto nivel. Esta práctica ofrece la posibilidad de conectar con diferentes culturas, 
explorar paisajes variados y experimentar una sensación de libertad única al desplazarse en dos ruedas. Además, fomenta la salud, el bienestar mental y físico, siendo una actividad que se adapta a distintas edades y niveles de habilidad, promoviendo la aventura, la comunidad y el respeto por el medio ambiente.
</p>
          </div>
        </div>
        <div className="image-description">
          <div className="image-info">
            <ImagesCard ima="/senderismo.png" txt="Senderismo" />
          </div>
          <div className="text-info">
            <p>El senderismo es una actividad que permite explorar el entorno natural de manera pausada y contemplativa. 
              Ofrece la oportunidad de sumergirse en la naturaleza, descubrir paisajes diversos y conectar con entornos naturales variados. A través de diferentes senderos, se puede disfrutar de experiencias únicas, desde caminatas por montañas hasta paseos junto a ríos o costas. Esta actividad no solo fomenta el ejercicio físico, sino que también promueve la calma mental al permitir desconectar de la vida cotidiana y sumergirse en un entorno natural, 
              proporcionando momentos de introspección y disfrute de la belleza escénica del paisaje.
            </p>
          </div>
        </div>
        <div className="image-description">
          <div className="image-info">
            <ImagesCard ima="/camping.png" txt="Camping" />
          </div>
          <div className="text-info">
            <p>T
            El camping es una actividad que permite sumergirse completamente en la naturaleza, 
            ofreciendo una experiencia de conexión directa con el aire libre. Al acampar, se tiene la oportunidad de escapar de la rutina diaria y disfrutar de la libertad y la tranquilidad que ofrece el entorno natural. Esta actividad proporciona la posibilidad de dormir bajo las estrellas, disfrutar de paisajes pintorescos, compartir momentos alrededor de una fogata y despertar con los sonidos de la naturaleza. El camping no solo brinda la oportunidad de desconectar de la vida urbana, 
            sino que también promueve la camaradería, la relajación y la aventura al aire libre
            </p>
          </div>
        </div>
        <div className="image-description">
          <div className="image-info">
            <ImagesCard ima="/playa.png" txt="Playa" />
          </div>
          <div className="text-info">
            <p>La playa es un espacio único que invita a relajarse y disfrutar de la naturaleza en su forma más serena. 
              Es un lugar que ofrece una combinación perfecta entre el mar, la arena y el sol, proporcionando un ambiente ideal para descansar y recrearse. Además de ser un espacio para tomar el sol y nadar, la playa ofrece oportunidades para practicar deportes acuáticos, caminar por la orilla, construir castillos de arena o simplemente disfrutar de la tranquilidad del entorno marino. La sensación de libertad que se experimenta 
              al contemplar el vasto océano y escuchar el sonido de las olas brinda una sensación de paz y conexión con la naturaleza.
            </p>
          </div>
        </div>
        <div className="image-description">
          <div className="image-info">
            <ImagesCard ima="/surf.png" txt="Surf" />
          </div>
          <div className="text-info">
            <p>El surf es un deporte acuático emocionante y desafiante que implica deslizarse sobre las olas del mar utilizando una tabla. 
              Esta actividad no solo ofrece diversión y emoción, sino que también requiere destreza, equilibrio y conexión con la naturaleza. Los surfistas disfrutan de la sensación de libertad al deslizarse sobre el agua, sintiendo la energía y la fuerza del océano. Más allá de ser un deporte, el surf también es una forma de conectar con el entorno marino, brindando momentos de aventura, 
              concentración y disfrute de la belleza natural del océano y sus olas.</p>
          </div>
        </div>
        <div className="image-description">
          <div className="image-info">
            <ImagesCard ima="/buceo.png" txt="Buceo" />
          </div>
          <div className="text-info">
            <p>El buceo es una actividad fascinante que permite sumergirse en un mundo completamente diferente bajo el agua. 
              Es una experiencia única que brinda la oportunidad de explorar e interactuar con la vida marina, descubriendo un ecosistema sorprendente y diverso. Al sumergirse en aguas profundas, los buceadores pueden admirar la belleza de los arrecifes de coral, observar peces de colores vibrantes y descubrir la fascinante vida marina en su hábitat natural. El buceo no solo es una aventura emocionante, sino que también ofrece momentos de calma y 
              serenidad al sumergirse en un entorno tranquilo y enigmático, creando una conexión única con el mundo submarino.
            </p>
          </div>
        </div>
        <div className="image-description">
          <div className="image-info">
            <ImagesCard ima="/observacion.png" txt="Observacion de estrellas" />
          </div>
          <div className="text-info">
            <p>
            La observación de estrellas es una actividad fascinante que nos permite contemplar el universo nocturno y 
            maravillarnos con la inmensidad del cosmos. Esta experiencia nos lleva a conectar con el cielo nocturno, 
            admirar la belleza de los astros y explorar la vastedad del espacio. Al alejarnos de las luces de la ciudad, se nos presenta la oportunidad de contemplar estrellas, constelaciones, planetas y fenómenos celestes, sumergiéndonos en un mundo de maravillas cósmicas. La observación de estrellas no solo ofrece una visión diferente del universo, sino que también brinda momentos de reflexión, 
            asombro y admiración por la belleza y complejidad del espacio que nos rodea.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Link to='/'>
        <Button 
                  variant="contained"
                  sx={{
                    margin:'20px',
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
                    }}}>
                  Home <HomeIcon sx={{marginLeft:'10px'}}/>
                </Button>
        </Link>
      </div>
    </div>
  );
}

export default Info;
