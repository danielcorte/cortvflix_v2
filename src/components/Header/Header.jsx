import './header.css'
import logo from '../../assets/images/netflix-logo.png'
import logoCorte from '../../assets/images/logo-corte.jpg'
import logoCorteFundo from '../../assets/images/logo-corte-removebg-preview.png'
import logoCorteFundoTesoura from '../../assets/images/logo-tesoura-removebg-preview.png'

export function Header() {

    return (
        <header className='container_header'>
            <img src={logoCorteFundoTesoura} alt="Logo da Netflix" />
            <h1>Corteflix</h1>
        </header>
    )
}