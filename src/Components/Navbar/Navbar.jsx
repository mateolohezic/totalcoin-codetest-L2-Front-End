import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import whatsappIcon from '../../assets/whatsappIcon.png'
import emailIcon from '../../assets/emailIcon.png'
import linkedinIcon from '../../assets/linkedinIcon.png'
import instagramIcon from '../../assets/instagramIcon.png'

function Navbar() {
  return (
        <nav className="navbar navbar-expand-lg">
            <div className="contenedorNavbar">
                <a className="navbar-brand navbarBrandResponsive" href="/" draggable={false}>
                    <img src={logo} alt="Logo Barra de Navegación" draggable={false}/>
                </a>
                <button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrincipal" aria-controls="navbarPrincipal" aria-expanded="false" aria-label="Expandir Navbar">
                    <label className="burger" htmlFor="burgerButton">
                        <input type="checkbox" id="burgerButton"/>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </button>
                <div className="collapse navbar-collapse" id="navbarPrincipal">
                    <ul className="navbar-nav navbarSection1">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/" draggable={false}>Inicio</a>
                            <div className='subrayadoNavLink'></div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Nosotros" draggable={false}>Nosotros</a>
                            <div className='subrayadoNavLink'></div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Servicios" draggable={false}>Servicios</a>
                            <div className='subrayadoNavLink'></div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Clientes" draggable={false}>Clientes</a>
                            <div className='subrayadoNavLink'></div>
                        </li>
                    </ul>
                    <a className="navbar-brand navbarSection2" href="/" draggable={false}>
                        <img src={logo} alt="Logo Barra de Navegación" draggable={false}/>
                    </a>
                    <ul className="navbar-nav navbarSection3">
                        <li className="nav-item">
                            <a className="nav-link" href="/#contactForm" draggable={false}>Contacto</a>
                            <div className='subrayadoNavLink'></div>
                        </li>
                    </ul>
                </div>
            </div>
            <header className='headerRedesSociales sticky-top'>
                <a href='https://api.whatsapp.com/send/?phone=54381511666https://api.whatsapp.com/send?phone=543815690169&text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20TotalCoin!0&text&type=phone_number&app_absent=0' target='_blank' className="headerLink" draggable={false}>
                    <img src={whatsappIcon} alt="Whatsapp TotalCoin" draggable={false}/>
                    <span>+54 9 3815690169</span>
                </a>
                <a href='mailto: totalcoin@gmail.com' target='_blank' className="headerLink" draggable={false}>
                    <img src={emailIcon} alt="Correo Electronico TotalCoin" draggable={false}/>
                    <span>totalcoin@gmail.com</span>
                </a>
                <a href='https://www.linkedin.com/company/totalcoin/' target='_blank' className="headerLink" draggable={false}>
                    <img src={linkedinIcon} alt="LinkedIn TotalCoin" draggable={false}/>
                    <span>TotalCoin</span>
                </a>
                <a href='https://www.instagram.com/totalcoin/' target='_blank' className="headerLink" draggable={false}>
                    <img src={instagramIcon} alt="Instagram TotalCoin" draggable={false}/>
                    <span>@totalcoin</span>
                </a>
            </header>
        </nav>
  )
}

export default Navbar
