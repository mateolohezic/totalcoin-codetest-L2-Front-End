import React from 'react'
import './cardPaquete.css'
import alimentoCaratulaPerro from '../../assets/alimentoCaratulaPerro.jpg'
import complementoDietarioCaratulaPerro from '../../assets/complementoDietarioCaratulaPerro.png'

function CardPaquete(props) {

    return (
    <>
        <section className='cardPaquete'>
            <header>
                <h2>Paquete Esencial</h2>
                <p>(Rinde durante un mes)</p>
            </header>
            <main>
                <article>
                    <img src={alimentoCaratulaPerro} alt="Alimento TotalCoin" />
                    <h3>Alimento Balanceado {props.paquete.alimento} Kg</h3>
                    <h4>${props.paquete.precioAlimento.toLocaleString('es-ES', { style: 'decimal', maximumFractionDigits: 2 })}</h4>
                </article>
                {
                    props.paquete.complementoDietario > 0 &&
                    <>
                        <span>+</span>
                        <article>
                            <img src={complementoDietarioCaratulaPerro} alt="Alimento TotalCoin" />
                            <h3>Complemento Dietario {props.paquete.complementoDietario} Comprimidos</h3>
                            <h4>${props.paquete.precioComplementoDietario.toLocaleString('es-ES', { style: 'decimal', maximumFractionDigits: 2 })}</h4>
                        </article>
                    </>
                }
            </main>
            <footer>
                <button type="button" onClick={props.cancelarPaquete}>Cancelar</button>
                <button type="button">Confirmar pedido</button>
            </footer>
        </section>
    </>
    )
}

export default CardPaquete
