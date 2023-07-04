import './Header.css'
function Header() {
    return (
        <nav>
            <div id='topbar'>
                <img id='logo' src='src/assets/ecoweather-font-gustavo.png' alt='logo' />
                <div id='search'>
                    <input id='in-search' type='text' placeholder='Buscar' />
                    <button id='b-search'><img src='src/assets/search.png' alt='search-icon' /></button>
                </div>
            </div>
        </nav>
    )
}
export default Header