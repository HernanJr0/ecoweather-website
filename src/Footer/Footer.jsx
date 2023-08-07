import logoGithub from '../assets/Github.svg'
import logoGoogle from '../assets/Google.svg'
import logoInstagram from '../assets/Instagram.svg'
import logoLinkedIn from '../assets/LinkedIn.svg'
import './Footer.css'

const Footer = () => {
    return (
        <div id='Footer'>
            <p id='devmsg'>Feito com ❤️ por: Equipe Eco Weather |</p>
            <div id='links'>
                <div>
                    <a href="https://github.com/HernanJr0/ecoweather-website" id='git'>
                        <img src={logoGithub} className='logo'/>
                    </a>

                    <a href="">
                        <img src={logoGoogle} className='logo' />
                    </a>

                    <a href="">
                        <img src={logoInstagram} className='logo' />
                    </a>

                    <a href="">
                        <img src={logoLinkedIn} className='logo' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer