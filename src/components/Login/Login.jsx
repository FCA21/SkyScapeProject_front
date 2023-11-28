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
        <p>Bienvenido explorador: Continúa la aventura</p>
        <FormLogin />
      </div>
    </div>
  )
}

export default Login
