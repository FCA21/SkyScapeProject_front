import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Mapa.css'

function Mapa() {

    const pos = [
      { lat: 27.92134, long: -15.67068, titulo: "Presa de Las Niñas"},
      { lat: 27.966870266027723, long: -15.58353678094149, titulo: "Llanos de la Pez" },
      { lat: 27.93018, long: -15.62621, titulo: "Morro de Santiago" },
      { lat: 28.06278, long: -15.62973, titulo: "Monte Pavón" },
      { lat: 27.82705, long: -15.66268, titulo: "El Pinillo" },
      { lat: 27.97465, long: -15.58901, titulo: "Corral de los Juncos" },


    ]


    function generateMarkers(){
       return  pos.map((item, index)=>{
            return (
              <Marker key={index} position={[item.lat, item.long]}>
                <Popup>
                  <h2 style={{backgroundColor: "orange"}}>{item.titulo}</h2>
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

export default Mapa