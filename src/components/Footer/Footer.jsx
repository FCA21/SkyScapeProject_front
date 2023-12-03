import { Link } from 'react-router-dom'
import { Typography, Grid } from '@mui/material'

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#064E3B',
        color: '#ffffff',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <img className='logoFooter'
            src="/logo_recortado.webp"
            alt="Logo"
            style={{ maxWidth: 75, height: 'auto', marginBottom: '10px' }}
          />
        </Grid>
        <Grid item>
          <Link
            to="/about"
            style={{ color: '#ffffff', textDecoration: 'none' }}
          >
            <Typography variant="body1">Sobre nosotros</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Typography variant="body2">&copy;SkyScape 2024</Typography>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
