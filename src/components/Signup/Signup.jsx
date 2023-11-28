import React from 'react'
import './Signup.css'
import registrationPhoto from '../../../public/registration.png'
import FormSignup from './FormSignup/FormSignup'

const Signup = () => {
  return (
    <div className="containerLogin">
      <div className="left-content">
        <p>Únete a la aventura: regístrate y descubre tu próximo destino</p>
        <FormSignup/>
      </div>
      <div className="right-content">
        <img className="imagenRegistro"src={registrationPhoto} alt="ImagenDeRegistro" />
      </div>
    </div>
  )
}

export default Signup
