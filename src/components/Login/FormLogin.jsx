import React, { useState } from 'react'
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material'
import './FormLogin.css'


function FormLogin() {
  const [formData, setFormData] = useState({

    email: '',
    password: '',

  })

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const [formError, setFormError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const { email, password } = formData;
    
    if (
      !email ||!password 
    ) { setFormError('Por favor, completa todos los campos obligatorios.')
      return;
    
    }
    console.log('Datos enviados:', formData)
  }

  const isFormValid = () => {
    const {

      email,
      password,

    } = formData
    return (

      email &&
      password 

    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#ECFDF5',
        padding: '20px',
        borderRadius: '8px',
        display: "flex",
        flexDirection: "column"
      }}
    >



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

export default FormLogin
