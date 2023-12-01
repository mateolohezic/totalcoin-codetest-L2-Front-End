import React, { useState } from 'react'
import './mascotas.css'
import GrillaMisMascotas from '../../Components/GrillaMisMascotas/GrillaMisMascotas'
import CrearMascota from '../../Components/CrearMascota/CrearMascota'

function Mascotas() {

    const [creating, setCreating] = useState(false)

    return (
    <>
        <main>
            {
                !creating ? 
                <>
                    <section className='contenedorMascotas'>
                        <h1>Mis Mascotas</h1>
                        <p>Desde este menú puedes administrar todas tus mascotas y realizar pedidos.</p>
                    </section>
                    <section className='contenedorCrearMascota'>
                        <div className='botonAñadirCrearMascota'>
                            <button type="button" onClick={ () => { setCreating(true) } }>+ Añadir</button>
                        </div>
                    </section>
                    <GrillaMisMascotas/>
                </>
                :
                <>
                    <CrearMascota/>
                </>
            }
        </main>
    </>
    )
}

export default Mascotas