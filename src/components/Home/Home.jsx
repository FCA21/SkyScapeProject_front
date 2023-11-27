import './Home.css'
import ImagesCard from '../ImagesCard/ImagesCard'

function Home() {
  return (
    <div className='home-container'>
      <h1 className="explore-text">Explora, conecta, vive en la naturaleza.</h1>
      <span className="subtitle">Facilita las acticvidad al aire libre</span>
        <div className="small-images">
          {/* Primer conjunto de tres imágenes */}
          <ImagesCard ima="/public/ciclismo.png" txt="Ciclismo" />
          <ImagesCard ima="/public/senderismo.png" txt="Senderismo" />
          <ImagesCard ima="/public/camping.png" txt="Camping" />
          <ImagesCard ima="/public/playa.png" txt="Playa" />
          <ImagesCard ima="/public/surf.png" txt="Surf" />
          <ImagesCard ima="/public/buceo.png" txt="Budeo" />
          <ImagesCard ima="/public/observacion.png" txt="Observacion" />
        </div>
      </div>
  
  )
}

export default Home
