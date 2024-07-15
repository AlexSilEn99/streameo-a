import logo from '../../.././assets/logo.svg'
import { Link } from 'react-router-dom'

function HeaderIcon() {
    return (
        <Link className="text-decoration-none" to="/">
            <div className="text-uppercase silkscreen-regular text-white">
                <img src={logo} className="header-logo" alt="logo" />
                Streameo
            </div>
        </Link>
        
    );
}

export default HeaderIcon;