import React from 'react'
import './armaTuPaqueteHome.css'

function ArmaTuPaqueteHome() {
    return (
    <>
        <section className='contenedorPaqueteHome'>
            <div className='contenidoPaqueteHome'>
                <h2>¡Arma tu paquete a medida!</h2>
                <h3>Mediante el uso de nuestra herramienta, conoce el paquete que mejor se adapte a tu mascota.</h3>
                <p>Te ofrecemos la posibilidad de armar a medida un paquete para tu mascota, de manera única y adaptada. Con solo ingresar el peso tu compañero peludo, nuestra herramienta calculará y recomendará el combo de alimentos perfecto, teniendo en cuenta sus necesidades específicas. Ya sea que tenga un perro pequeño de raza toy o un gran pastor de tamaño gigante, tenemos opciones ideales para cada uno. ¡Asegúrate de que tu mascota reciba la nutrición adecuada con nuestros paquetes personalizados!</p>
            </div>
            <div className='botonPaqueteHome'>
                <a href="/paquetes">
                    <button type='button'>¡Arma tu paquete!</button>
                </a>
            </div>
        </section>
    </>
    )
}

export default ArmaTuPaqueteHome
