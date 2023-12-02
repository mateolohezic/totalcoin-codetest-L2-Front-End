import React from 'react'
import './crearMascota.css'
import { useForm } from "react-hook-form"
import Mascota from '../../Hooks/Mascota'

function CrearMascota() {

    const { register, handleSubmit, reset, formState: { errors }} = useForm()

    const onSubmit = (data) => {
        const mascota = new Mascota(data.nombre, data.especie,data.edad, data.peso, data.esterilizado);
        console.log(mascota);
    }
    
    return (
    <>
        <section className='contenedorMascotas'>
            <h1>Añadir una mascota</h1>
            <p>Desde este menú puedes añadir un nuevo miembro a tu familia.</p>
            <div className='contenedorCrearMascota'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='inputPaquetes'>
                        <label htmlFor='nombre'>Nombre</label>
                        <input
                            type="text"
                            id='nombre'
                            maxLength={30}
                            {...register("nombre", {
                                required: true,
                                minLength: 1,
                                maxLength: 30
                            })}
                        />
                        {errors.nombre && errors.nombre.type === "required" && (
                            <p className="invalidInput">Campo requerido.</p>
                        )}
                        {errors.nombre && errors.nombre.type === "minLength" && (
                            <p className="invalidInput">Debe contener al menos 1 caractér.</p>
                        )}
                        {errors.nombre && errors.nombre.type === "maxLength" && (
                            <p className="invalidInput">No puede contener más de 30 caracterés.</p>
                        )}
                    </div>
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
                    <button type="submit" className='botonCalcularPaquetes'>Añadir</button>
                </form>
            </div>
        </section>
      
    </>
    )
}

export default CrearMascota
