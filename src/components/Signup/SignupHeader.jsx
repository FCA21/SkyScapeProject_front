import { Link } from 'react-router-dom'
import './SignupHeader.css'

function SignupHeader()  {
  return (
    <header className="header_signup">
      <Link to={'/'}>
        <img src="/logo_recortado.webp" alt="Logo" className="logo" />
      </Link>
    </header>
  )
}

export default SignupHeader
