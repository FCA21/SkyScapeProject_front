import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material'
import './FormSignup.css'
import { useState } from 'react'
import { signup } from '../../../services/auth'
import { useNavigate } from 'react-router-dom'

function FormSignup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    email: '',
    password: '',
    repeatPassword: '',
    termsAccepted: false,
  })

  const checkPassword = () => {
    return formData.password.length > 4
  }

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const [formError, setFormError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { username, age, email, password, repeatPassword, termsAccepted } =
      formData

    if (!username || !email || !password || !repeatPassword || !termsAccepted) {
      setFormError('Por favor, completa todos los campos obligatorios.')
      return
    }


      const result = await signup(formData)
      localStorage.setItem('token', result.token)
      localStorage.setItem('rol', result.rol)
  
      console.log('Datos enviados:', formData)
      navigate('/app')


  }

  const isFormValid = () => {
    const { username, email, password, repeatPassword, termsAccepted } =
      formData
    return username && email && password && repeatPassword && termsAccepted && checkPassword()
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#ECFDF5',
        padding: '20px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TextField
        label="Usuario"
        name="username"
        value={formData.username}
        onChange={handleChange}
        fullWidth
        //required
        style={{ marginBottom: '12px' }}
        InputProps={{ style: { backgroundColor: 'white' } }}
      />
      <TextField
        label="Edad"
        name="age"
        value={formData.age}
        onChange={handleChange}
        /* VALUE={age} */
        //required
        style={{ marginBottom: '12px', backgroundColor: 'white' }}
        InputProps={{
          inputMode: 'text',
          pattern: '[0-9]',
          maxLength: '2',
        }}
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        //required
        type="email"
        style={{ marginBottom: '12px' }}
        InputProps={{ style: { backgroundColor: 'white' } }}
      />
      <TextField
        label="Contraseña"
        name="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        //required
        type="password"
        style={{ marginBottom: '12px' }}
        InputProps={{ style: { backgroundColor: 'white' } }}
      />
      <TextField
        label="Repetir contraseña"
        name="repeatPassword"
        value={formData.repeatPassword}
        onChange={handleChange}
        fullWidth
        //required
        type="password"
        style={{ marginBottom: '12px' }}
        InputProps={{ style: { backgroundColor: 'white' } }}
      />
      <FormControlLabel
        control={
          <Checkbox
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            color="primary"
            //required
          />
        }
        label="Aceptar términos y condiciones de uso de datos personales"
        style={{ marginBottom: '12px' }}
      />
      <Button
        variant="contained"
        style={{
          backgroundColor: '#65A30D',
          color: 'white',
          textTransform: 'none',
        }}
        type="submit"
        disabled={!isFormValid()}
      >
        Registrarse
      </Button>
    </form>
  )
}

export default FormSignup
