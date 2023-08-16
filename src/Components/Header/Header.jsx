import './Header.css'
import logo from '../../assets/ecoLogoWhite.svg'
import search_black from '../../assets/search_black.svg'

import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <div id='topbar'>
                <Link to='/' id='c_logo'>
                    <img id='logo' src={logo} alt='logo' />
                </Link>
                <div id='search'>
                    <input id='in-search' type='text' placeholder='Buscar' />
                    <button id='b-search'><img src={search_black} alt='search-icon' /></button>
                </div>
            </div>
        </nav>
    )
}
export default Header