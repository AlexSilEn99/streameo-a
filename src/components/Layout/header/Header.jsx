import HeaderIcon from './HeaderIcon';
import './Header.css'
import Navbar from './Navbar';


function Header() {
    return (
        <header className="navbar navbar-expand-xl header-bg">
            <div className="container">
                <HeaderIcon/>
                <Navbar/>
            </div>
        </header>
  );
}

export default Header;