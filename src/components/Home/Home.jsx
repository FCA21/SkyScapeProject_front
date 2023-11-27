import './Home.css'
import ImagesCard from '../ImagesCard/ImagesCard'
import HomeImage from '../HomeImage/HomeImage'
import HowWork from '../HowWork/HowWork'

function Home() {
  return (
    <div className='home-container'>
      <HomeImage/>
      <h1 className="explore-text">Explora, conecta, vive en la naturaleza.</h1>
      <span className="subtitle">Facilita las acticvidad al aire libre</span>
        <div className="small-images">
          {/* Primer conjunto de tres imágenes */}
          <ImagesCard ima="/ciclismo.png" txt="Ciclismo" />
          <ImagesCard ima="/senderismo.png" txt="Senderismo" />
          <ImagesCard ima="/camping.png" txt="Camping" />
          <ImagesCard ima="/playa.png" txt="Playa" />
          <ImagesCard ima="/surf.png" txt="Surf" />
          <ImagesCard ima="/buceo.png" txt="Budeo" />
          <ImagesCard ima="/observacion.png" txt="Observacion" />
        </div>
        <div><HowWork/></div>
      </div>
    
  
  )
}

export default Home
