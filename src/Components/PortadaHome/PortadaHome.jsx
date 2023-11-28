import React from 'react'
import './portadaHome.css'

function PortadaHome() {
    return (
    <>
        <section className='portadaHome'>
            <div className="contenidoPortadaHome">
                <h1>Bienvenido a <b>TotalCoin Veterinaria</b></h1>
                <p>¡Conoce el Paquete ideal para tu mascota!</p>
                <a href="/productos">
                    <button type="button">Arma tu paquete</button>
                </a>
            </div>
        </section>
    </>
    )
}

export default PortadaHome
