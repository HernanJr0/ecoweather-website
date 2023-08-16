import './Header.css'
import logo from '../../assets/ecoLogoWhite.svg'
import search_black from '../../assets/search_black.svg'

function Header() {
    return (
        <nav>
            <div id='topbar'>
                <a href='' id='c_logo'><img id='logo' src={logo} alt='logo' /></a>
                <div id='search'>
                    <input id='in-search' type='text' placeholder='Buscar' />
                    <button id='b-search'><img src={search_black} alt='search-icon' /></button>
                </div>
            </div>
        </nav>
    )
}
export default Header