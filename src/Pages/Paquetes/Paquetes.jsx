import React, { useState } from 'react'
import './paquetes.css'
import { useForm } from "react-hook-form"
import Mascota from '../../Hooks/Mascota'
import CardPaquete from '../../Components/CardPaquete/CardPaquete'

function Paquetes() {

    const { register, handleSubmit, reset, formState: { errors }} = useForm()
    const [paquete, setPaquete] = useState()

    const onSubmit = (data) => {
        const mascota = new Mascota(data.especie,data.edad, data.peso, data.esterilizado);
        setPaquete(mascota.calcularPaquete())
    }

    const cancelarPaquete = () => {
        setPaquete()
        reset()
    }

    return (
    <>
        <main>
            <section className='contenedorPaquetes'>
                <h1>¡Arma tu paquete a medida!</h1>
                <p>Encontrar el alimento adecuado para tu mascota es esencial para su bienestar. Con nuestra herramienta, podrás personalizar el paquete de alimentos que mejor se adapte a las necesidades específicas de tu compañero peludo. Proporciona algunos datos clave sobre tu mascota, como su peso, raza y otros detalles importantes, y te ayudaremos a definir el paquete perfecto para garantizar una nutrición óptima y una vida saludable para tu fiel amigo.</p>
                <h2>Completa los datos de tu mascota</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='inputPaquetes'>
                        <h3>Tu compañero es...</h3>
                        <div>
                            <label className="opcionInputPaquete">
                                <input type="radio" {...register("especie", { required: true })} value='perro'/>
                                <button type='button' className='botonOpcionInputPaquete'>Perro</button>
                            </label>
                            <label className="opcionInputPaquete">              
                                <input type="radio" {...register("especie", { required: true })} value='gato'/>
                                <button type='button' className='botonOpcionInputPaquete'>Gato</button>
                            </label>
                        </div>
                        {errors.especie && errors.especie.type === "required" && (
                            <p className="invalidInput">Campo requerido.</p>
                        )}
                    </div>
                    <div className='inputPaquetes'>
                        <label htmlFor='edad'>Edad</label>
                        <div>
                            <input
                                type="number"
                                id='edad'
                                {...register("edad", {
                                    required: true,
                                    min: 1,
                                    max: 240
                                })}
                            />
                            <span>Meses</span>
                        </div>
                        {errors.edad && errors.edad.type === "required" && (
                            <p className="invalidInput">Campo requerido.</p>
                        )}
                        {errors.edad && errors.edad.type === "min" && (
                            <p className="invalidInput">Debe ser al menos de 1 mes.</p>
                        )}
                        {errors.edad && errors.edad.type === "max" && (
                            <p className="invalidInput">Debe ser menor a 240 meses.</p>
                        )}
                    </div>
                    <div className='inputPaquetes'>
                        <label htmlFor='peso'>Peso</label>
                        <div>
                            <input
                                type="number"
                                id='peso'
                                {...register("peso", {
                                    required: true,
                                    min: 1,
                                    max: 150
                                })}
                            />
                            <span>Kg</span>
                        </div>
                        {errors.peso && errors.peso.type === "required" && (
                            <p className="invalidInput">Campo requerido.</p>
                        )}
                        {errors.peso && errors.peso.type === "min" && (
                            <p className="invalidInput">Debe ser al menos de 1 Kg.</p>
                        )}
                        {errors.peso && errors.peso.type === "max" && (
                            <p className="invalidInput">Debe ser menor a 150 Kg.</p>
                        )}
                    </div>
                    <div className='inputPaquetes'>
                        <h3>¿Tu compañero esta esterilizado?</h3>
                        <div>
                            <label className="opcionInputPaquete">
                                <input type="radio" {...register("esterilizado", { required: true })} value='si'/>
                                <button type='button' className='botonOpcionInputPaquete'>Si</button>
                            </label>
                            <label className="opcionInputPaquete">              
                                <input type="radio" {...register("esterilizado", { required: true })} value='no'/>
                                <button type='button' className='botonOpcionInputPaquete'>No</button>
                            </label>
                        </div>
                        {errors.esterilizado && errors.esterilizado.type === "required" && (
                            <p className="invalidInput">Campo requerido.</p>
                        )}
                    </div>
                    <button type="submit" className='botonCalcularPaquetes'>Calcular paquete</button>
                </form>
            </section>
            {
                paquete &&
                <CardPaquete paquete={paquete} cancelarPaquete={cancelarPaquete}/>
            }
        </main>
    </>
    )
}

export default Paquetes
