import { Toolbar, Button, Avatar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'
import SignpostIcon from '@mui/icons-material/Signpost'
function UsuarioHeader() {
  const navigate = useNavigate()
  function logOut() {
    localStorage.clear()
    navigate('/')
  }

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
        <Link to={'/'}>
          <Avatar
            alt="Logo"
            src="/logo_recortado.webp"
            className="logo"
            style={{ width: '80px', height: '80px', fontSize: '40px' }}
          />
        </Link>

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
                  backgroundColor: '#4caf50',
                  transform: 'scale(1.05)',
                },
              }}
              stylUsuarioHeadere={{ fontSize: '16px' }}
            >
              <PersonIcon />
            </Button>
          </Link>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#064E3B',
              '&:hover': {
                backgroundColor: '#4caf50',
                transform: 'scale(1.05)',
              },
            }}
            onClick={logOut}
            stylUsuarioHeadere={{ fontSize: '16px' }}
          >
            <LogoutIcon />
          </Button>
        </div>
      </Toolbar>
    </>
  )
}

export default UsuarioHeader
