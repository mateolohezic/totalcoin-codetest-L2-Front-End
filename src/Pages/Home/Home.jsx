import React from 'react'
import './home.css'
import PortadaHome from '../../Components/PortadaHome/PortadaHome'
import CarruselProductosDestacados from '../../Components/CarruselProductosDestacados/CarruselProductosDestacados'

function Home() {

    return (
    <>
        <main>
            <PortadaHome/>
            <CarruselProductosDestacados/>
        </main>
    </>
    )
}

export default Home
