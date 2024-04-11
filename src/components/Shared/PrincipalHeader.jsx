import { Link } from "react-router-dom"
import './styles/PrincipalHeader.css'

const PrincipalHeader = () => {
  return (
    <header className="header">
        <h1 className="header-title"><Link to='/'>Hotels <span>App</span></Link>            
        </h1>
        <nav className="header-nav">
            <ul className="header-ul">
              <li className="header-li">
                <Link to='/reservations' >
                  Reservation
                </Link>
              </li>
                <li className="header-li"><Link to='/register'>Register</Link></li>
                <li className="header-li"><Link to='/login'>Login</Link></li>
            </ul>
        </nav>
        
    </header>
  )
}

export default PrincipalHeader
