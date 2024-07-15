import { Link} from 'react-router-dom'
function Navbar() {
    return (
          <div id="navbarContent">
              <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><Link to="/" className="nav-link text-uppercase font-weight-bold">Search</Link></li>
                    <li className="nav-item active"><Link to="/Discover" className="nav-link text-uppercase font-weight-bold">Discover</Link></li>
                    <li className="nav-item"><Link to="/MyHistory" className="nav-link text-uppercase font-weight-bold">My History</Link></li>
                    <li className="nav-item"><Link to="/AboutUs" className="nav-link text-uppercase font-weight-bold">About Us</Link></li>
                    <li className="nav-item"><Link to="/Contact" className="nav-link text-uppercase font-weight-bold">Contact</Link></li>
              </ul>
            </div>
  );
}

export default Navbar;