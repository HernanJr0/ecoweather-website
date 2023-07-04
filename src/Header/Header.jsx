import './Header.css'
import logo from './assets/ecoweather-font-gustavo.png'
import search from './assets/search.png'

function Header() {
    return (
        <nav>
            <div id='topbar'>
                <img id='logo' src={logo} alt='logo' />
                <div id='search'>
                    <input id='in-search' type='text' placeholder='Buscar' />
                    <button id='b-search'><img src={search} alt='search-icon' /></button>
                </div>
            </div>
        </nav>
    )
}
export default Header