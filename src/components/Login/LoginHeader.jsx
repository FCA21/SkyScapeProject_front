import { Link } from 'react-router-dom'
import './LoginHeader.css'

function LoginHeader()  {
  return (
    <header className="header_login">
      <Link to={'/'}>
        <img src="/logo_recortado.webp" alt="Logo" className="logo" />
      </Link>
    </header>
  )
}

export default LoginHeader
