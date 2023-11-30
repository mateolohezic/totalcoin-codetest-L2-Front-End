import React from 'react'
import './grillaMisMascotas.css'
import CardMiMascota from '../CardMiMascota/CardMiMascota'

function GrillaMisMascotas() {
    
    return (
    <>
        <section className='grillaMascotas'>
            <CardMiMascota/>
            <CardMiMascota/>
            <CardMiMascota/>
            <CardMiMascota/>
            <CardMiMascota/>
            <CardMiMascota/>
            <CardMiMascota/>
        </section>
    </>
    )
}

export default GrillaMisMascotas
