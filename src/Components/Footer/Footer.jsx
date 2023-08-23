import logoGithub from '../../assets/Github.svg'
import './Footer.css'

const Footer = () => {
    return (
        <div id='Footer'>
            <p id='devmsg'>Made with ❤️ by: Eco Weather Team |</p>
            <div id='links'>
                <a href="https://github.com/HernanJr0/ecoweather-website" id='git'>
                    <img src={logoGithub} className='logo' />
                </a>
            </div>
        </div>
    )
}

export default Footer