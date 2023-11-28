import React, { useState } from 'react'
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material'
import './FormSignup.css'


function FormSignup() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
    termsAccepted: false,
  })

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function RegistrationForm() {
    const [formData, setFormData] = useState('');

  }

  const [formError, setFormError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const {name, lastName, username, email, password, repeatPassword, termsAccepted } = formData;
    
    if (
      !name ||!lastName ||!username ||!email ||!password ||!repeatPassword ||!termsAccepted
    ) { setFormError('Por favor, completa todos los campos obligatorios.')
      return;
    
    }
    console.log('Datos enviados:', formData)
  }

  const isFormValid = () => {
    const {
      name,
      lastName,
      username,
      email,
      password,
      repeatPassword,
      termsAccepted,
    } = formData
    return (
      name &&
      lastName &&
      username &&
      email &&
      password &&
      repeatPassword &&
      termsAccepted
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#ECFDF5',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <TextField
        label="Nombre"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        style={{ marginBottom: '12px' }}
        InputProps={{ style: { backgroundColor: 'white' } }}
      />
      <TextField
        label="Apellidos"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        fullWidth
        required
        style={{ marginBottom: '12px' }}
        InputProps={{ style: { backgroundColor: 'white' } }}
      />
      <TextField
        label="Usuario"
        name="username"
        value={formData.username}
        onChange={handleChange}
        fullWidth
        required
        style={{ marginBottom: '12px' }}
        InputProps={{ style: { backgroundColor: 'white' } }}
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
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
        required
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
        required
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
            required
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
