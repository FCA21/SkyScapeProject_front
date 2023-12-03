import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './ActividadMap.css'

function MapaActividad() {

    const pos = [
      { lat: 27.966870266027723, long: -15.58353678094149, titulo: "Llanos de la Pez",  descripcion:
    ' Situado en el municipio de San Bartolomé de Tirajana, este entorno ofrece a los a los alli acampados la oportunidad de sumergirse en un paisaje excepcional y disfrutar de actividades al aire libre. Con su extensa área, es un lugar perfecto para practicar senderismo, explorar la naturaleza y desconectar del bullicio de la vida cotidiana. Los Llanos de la Pez proporcionan una experiencia serena en un entorno natural, ideal para aquellos que buscan tranquilidad y conexión con la naturaleza.' },



    ]


    function generateMarkers(){
       return  pos.map((item, index)=>{
            return (
              <Marker key={index} position={[item.lat, item.long]}>
                <Popup>
                <h2 style={{backgroundColor:'#ECFDF5', fontWeight: "bold" }}>{item.titulo}</h2>
                <img src="/public/camping_real.jpg" alt="Imagen de la actividad" style={{ maxWidth: '100%', marginBottom: '10px' }} />
                <p style={{textAlign:'justify', fontFamily: '"Work Sans-Regular", Helvetica', fontSize:'15px', backgroundColor: '#ECFDF5'}}>{item.descripcion}</p>
                </Popup>
              </Marker>
            )
        })
    }

  return (
    <div className='map'>
      <MapContainer 
        center={[27.9485,-15.6061]}
        zoom={10}
        scrollWheelZoom={true}
        style={{ height: '450px', width: '60%', marginBottom: '30px', borderRadius: '30px' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {generateMarkers()}
      </MapContainer>
    </div>
  )
}

export default MapaActividad