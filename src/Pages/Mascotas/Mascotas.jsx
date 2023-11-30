import React from 'react'
import './mascotas.css'
import GrillaMisMascotas from '../../Components/GrillaMisMascotas/GrillaMisMascotas'

function Mascotas() {
    return (
    <>
        <main>
            <section className='contenedorMascotas'>
                <h1>Mis Mascotas</h1>
                <p>Desde este menú puedes administrar todas mascotas y realizar pedidos.</p>
            </section>
            <GrillaMisMascotas/>
        </main>
    </>
    )
}

export default Mascotas