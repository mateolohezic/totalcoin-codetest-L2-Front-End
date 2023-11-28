import React from 'react'
import './portadaHome.css'

function PortadaHome() {
    return (
    <>
        <section className='portadaHome'>
            <div className="contenidoPortadaHome">
                <h1>Bienvenido a <b>TotalCoin Veterinaria</b></h1>
                <p>¡Conoce más acerca de todos nuestros productos!</p>
                <a href="/productos">
                    <button type="button">Nuestros productos</button>
                </a>
            </div>
        </section>
    </>
    )
}

export default PortadaHome
