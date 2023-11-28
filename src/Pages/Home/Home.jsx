import React from 'react'
import './home.css'
import PortadaHome from '../../Components/PortadaHome/PortadaHome'
import CarruselProductosDestacados from '../../Components/CarruselProductosDestacados/CarruselProductosDestacados'
import ArmaTuPaqueteHome from '../../Components/ArmaTuPaqueteHome/ArmaTuPaqueteHome'

function Home() {

    return (
    <>
        <main>
            <PortadaHome/>
            <CarruselProductosDestacados/>
            <ArmaTuPaqueteHome/>
        </main>
    </>
    )
}

export default Home
