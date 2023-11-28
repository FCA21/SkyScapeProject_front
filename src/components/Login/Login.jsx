import './Login.css'
import loginPhoto from '/public/login_foti.png'
import FormLogin from './FormLogin'

const Login = () => {
  return (
    <div className="containerLogin">
      <div className="left-parra">
        <img className="imageLogin" src={loginPhoto} alt="ImagenDeLogin" />
      </div>
      <div className="right-parra">
        <p>Únete a la aventura: regístrate y descubre tu próximo destino</p>
        <FormLogin />
      </div>
    </div>
  )
}

export default Login
