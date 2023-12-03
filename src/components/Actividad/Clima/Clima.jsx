import './Clima.css'



function Clima() {
  return (
    <div>
      <h1 className='textoClima'>Prediccón del tiempo</h1>
      <img className= 'climaImagen' src="/public/tiempo.png" alt="Imagen del clima" />
    </div>
  );
}

export default Clima;
