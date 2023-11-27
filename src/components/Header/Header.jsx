import React from 'react'
import { AppBar, Toolbar, Button, Avatar, Typography } from '@mui/material'

function Header() {
  return (
    <AppBar
      style={{ top: 0, left: 0, width: '100%', backgroundColor: '#65a30d' }}
    >
      <Toolbar
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 16px',
          backgroundColor: '#ECFDF5',
        }}
      >
        <Avatar
          alt="Logo"
          src="/logo_recortado.webp"
          className="logo"
          style={{ width: '60px', height: '60px', fontSize: '32px' }}
        />

        <Typography
          variant="h6"
          style={{
            color: '#65a30d',
            fontWeight: 'bold',
            transition: 'transform 0.3s',
          }}
        >
          SKYSCAPE
        </Typography>

  
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#ffffff',
            marginRight: '8px',
            gap: '8px',
            transition: 'transform 0.3s',
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#65a30d',
              '&:hover': {
                backgroundColor: '#4caf50', // Cambia el color al pasar el cursor
                transform: 'scale(1.05)', // Aumenta un poco el tamaño
              },
            }}
          >
            Registrarse
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#65a30d',
              '&:hover': {
                backgroundColor: '#4caf50', // Cambia el color al pasar el cursor
                transform: 'scale(1.05)', // Aumenta un poco el tamaño
              },
            }}
          >
            Entrar
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
