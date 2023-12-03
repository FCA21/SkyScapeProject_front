import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Mapa.css'

function Mapa() {

    const pos = [
      { lat: 27.92134, long: -15.67068, titulo: "Presa de Las Niñas", descripcion:
    'Ubicado en el municipio de San Bartolomé de Tirajana, es un espacio natural en el que se puede disfrutar de actividades al aire libre y acampar en un entorno tranquilo y pintoresco. Este lugar ofrece la oportunidad de acampar cerca de la presa, rodeado de un paisaje natural impresionante, perfecto para explorar, relajarse y disfrutar de la serenidad que brinda la naturaleza. Es un destino ideal para los amantes del aire libre y para aquellos que buscan una experiencia de camping única en un entorno natural.'},
      { lat: 27.966870266027723, long: -15.58353678094149, titulo: "Llanos de la Pez", descripcion:
    ' Situado en el municipio de San Bartolomé de Tirajana, este entorno ofrece a los a los alli acampados la oportunidad de sumergirse en un paisaje excepcional y disfrutar de actividades al aire libre. Con su extensa área, es un lugar perfecto para practicar senderismo, explorar la naturaleza y desconectar del bullicio de la vida cotidiana. Los Llanos de la Pez proporcionan una experiencia serena en un entorno natural, ideal para aquellos que buscan tranquilidad y conexión con la naturaleza.' },
      { lat: 27.93018, long: -15.62621, titulo: "Morro de Santiago", descripcion:
    ' Zona de acampada de pequeño tamaño, con unas bellas panorámicas del sur grancanario y con capacidad máxima para 10 personas. Se encuentra situada dentro del Parque Rural del Nublo y de la Reserva de la Biosfera de Gran Canaria. Dispone de vigilante pero carece de instalaciones, estas características deben ser tenidas en cuenta a la hora de decidirse por utilizar esta zona de acampada.' },
      { lat: 28.06278, long: -15.62973, titulo: "Monte Pavón", descripcion:
    'Dotada de todos los servicios mínimos, se encuentra a 1.200 metros de altitud, rodeada de un pinar joven de repoblación con pinos foráneos que se combinan con zonas de pastos usados en ganadería y barrancos en donde perviven algunos de los últimos reductos de laurisilva. Desde aquí podrás tener excelentes panorámicas del norte de Gran Canaria.' },
      { lat: 27.82705, long: -15.66268, titulo: "El Pinillo", descripcion:
    'Está rodeado de un hermoso paisaje de montañas y perfecto para aquellos aventureros amantes de las bicicletas. Y si hay algo que me termino de enamorar es el amplio espacio que hay a su alrededor, donde a tan solo 20 km hay una reserva natural intacta. A esto hay que agregarle la amabilidad de la gente que vive por los alrededores, que ayudan a contribuir con esa tranquilidad que tanto se busca.' },
      { lat: 27.97465, long: -15.58901, titulo: "Corral de los Juncos", descripcion:
    'Esta zona de acampada es exclusiva para caravanas y autocaravanas. Cuenta con 81 parcelas de 7 por 7 metros y con todos los servicios básicos a disposición de los usuarios. Se trata de una de las zonas de acampada más populares y mejor valoradas de la isla entre los usuarios con caravana. Se encuentra a 1.700 metros de altitud en una plataforma de la Cumbre Central, rodeada de pinar y con espectaculares vistas del Roque Nublo, Bentayga y la Cuenca de Tejeda, Llanos de Acusa y Macizo de Tamadaba.' },


    ]


    function generateMarkers(){
       return  pos.map((item, index)=>{
            return (
              <Marker key={index} position={[item.lat, item.long]}>
                <Popup>
                <h2 style={{backgroundColor:'#ECFDF5', fontWeight: "bold" }}>{item.titulo}</h2>
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

export default Mapa