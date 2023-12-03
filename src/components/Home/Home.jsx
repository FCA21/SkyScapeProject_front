import './Home.css'
import ImagesCard from '../ImagesCard/ImagesCard'
import HomeImage from '../HomeImage/HomeImage'
import HowWork from '../HowWork/HowWork'
import Benefits from '../Benefits/Benefits'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <div className='home-container'>
      <HomeImage/>
      <h1 className="explore-text">Explora, conecta, vive en la naturaleza.</h1>
      <span className="subtitle">Facilita las acticvidad al aire libre</span>
        <div className="small-images">
          {/* Primer conjunto de tres imágenes */}
          <Link to='/info'>
          <ImagesCard ima="/ciclismo.png" txt="Ciclismo" />
          </Link>
          <Link to='/info'>
          <ImagesCard ima="/senderismo.png" txt="Senderismo" />
          </Link>
          <Link to='/info'>
          <ImagesCard ima="/camping.png" txt="Camping" />
          </Link>
          <Link to='/info'>
          <ImagesCard ima="/playa.png" txt="Playa" />
          </Link>
          <Link to='/info'>
          <ImagesCard ima="/surf.png" txt="Surf" />
          </Link>
          <Link to='/info'>
          <ImagesCard ima="/buceo.png" txt="Buceo" />
          </Link>
          <Link to='/info'>
          <ImagesCard ima="/observacion.png" txt="Observacion de estrellas" />
          </Link>
        </div>
        <div><HowWork/>
        </div>
        <div><Benefits/>
        </div> 
      </div>
    
  
  )
}

export default Home
