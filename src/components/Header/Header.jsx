import { Toolbar, Button, Avatar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import SignpostIcon from '@mui/icons-material/Signpost'

function Header() {
  return (
    <>
      <Toolbar
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#064E3B',
        }}
      >
        <Avatar
          alt="Logo"
          src="/logo_recortado.webp"
          className="logo"
          style={{ width: '80px', height: '80px', fontSize: '40px' }}
        />

        <Typography
          variant="h3"
          style={{
            color: '#65a30d',
            fontFamily: 'Pacifico',
            fontStyle: 'italic',
          }}
        >
          SKYSCAPE <SignpostIcon sx={{fontSize:'50px'}}/>
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
          <Link to="/signup">
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#65a30d',
                '&:hover': {
                  backgroundColor: '#4caf50', // Cambia el color al pasar el cursor
                  transform: 'scale(1.05)', // Aumenta un poco el tamaño
                },
              }}
              style={{ fontSize: '16px' }}
            >
              Registrarse <LockOpenIcon sx={{ marginLeft: '10px' }} />
            </Button>
          </Link>
          <Link to="/login">
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#059669',
                '&:hover': {
                  backgroundColor: '#4caf50',
                  transform: 'scale(1.05)',
                },
              }}
              style={{ fontSize: '16px' }}
            >
              Entrar <LoginIcon sx={{ marginLeft: '10px' }} />
            </Button>
          </Link>
        </div>
      </Toolbar>
    </>
  )
}

export default Header
