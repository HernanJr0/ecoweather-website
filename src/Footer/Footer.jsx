import logoGithub from '../assets/logoGithub.png'
import './Footer.css'

const Footer = () => {
    return (
        <div id='Footer'>
            <p>Feito com ❤️ por: Equipe Eco Weather</p>
            <a href="https://github.com/HernanJr0/ecoweather-website"><img src={logoGithub} id='logoGithub' /></a>
        </div>
    )
}

export default Footer