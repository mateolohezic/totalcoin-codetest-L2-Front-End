import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { useAutoAnimate } from '@formkit/auto-animate/react'
import './cardMiMascota.css'
import catIcon from '../../assets/catIcon.png'
import dogIcon from '../../assets/dogIcon.png'
import editIcon from '../../assets/editIcon.png'
import deleteIcon from '../../assets/deleteIcon.png'

function CardMiMascota() {

    const [animationParent] = useAutoAnimate()
    const { register, handleSubmit, reset, formState: { errors }} = useForm()
    const [editing, setEditing] = useState(false)
    const [deleting, setDeleting] = useState(false)

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
    <>
        <article className='cardMiMascota' ref={animationParent}>
            {
                !editing &&
                <>
                    <img src={dogIcon} alt="Mi mascota" />
                    <h2>Nombre</h2>
                    <ul>
                        <li>23 Meses</li>
                        <li>51 Kg</li>
                    </ul>
                    {
                        !deleting ?
                        <>
                            <div className='botonesCardMiMascota'>
                                <button type="button" onClick={ () => { setEditing(true) } }>
                                    <img src={editIcon} alt="Editar Mascota" />
                                </button>
                                <button type="button" onClick={ () => { setDeleting(true) } }>
                                    <img src={deleteIcon} alt="Editar Mascota" />
                                </button>
                            </div>
                            <button type="button">Nuevo pedido</button>
                        </>
                        :
                        <>
                            <div className='botonesEliminarMascota'>
                                <h3>¿Estas seguro?</h3>
                                <div>
                                    <button type="button" onClick={ () => { setDeleting(false) } }>Cancelar</button>
                                    <button type="button" onClick={ () => { console.log('eliminado'); } }>Eliminar</button>
                                </div>
                            </div>
                        </>
                    }
                </>
            }
            {
                editing &&
                <>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='inputEditarMascota' ref={animationParent}>
                            <h3>Tu compañero es...</h3>
                            <div>
                                <label className="opcionInputMascota">
                                    <input type="radio" {...register("especie", { required: true })} value='perro'/>
                                    <button type='button' className='botonOpcionInputMascota'>Perro</button>
                                </label>
                                <label className="opcionInputMascota">              
                                    <input type="radio" {...register("especie", { required: true })} value='gato'/>
                                    <button type='button' className='botonOpcionInputMascota'>Gato</button>
                                </label>
                            </div>
                            {errors.especie && errors.especie.type === "required" && (
                                <p className="invalidInput">Campo requerido.</p>
                            )}
                        </div>
                        <div className='inputEditarMascota' ref={animationParent}>
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
                        <div className='inputEditarMascota' ref={animationParent}>
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
                        <div className='inputEditarMascota' ref={animationParent}>
                            <h3>Esterilizado</h3>
                            <div>
                                <label className="opcionInputMascota">
                                    <input type="radio" {...register("esterilizado", { required: true })} value='si'/>
                                    <button type='button' className='botonOpcionInputMascota'>Si</button>
                                </label>
                                <label className="opcionInputMascota">              
                                    <input type="radio" {...register("esterilizado", { required: true })} value='no'/>
                                    <button type='button' className='botonOpcionInputMascota'>No</button>
                                </label>
                            </div>
                            {errors.esterilizado && errors.esterilizado.type === "required" && (
                                <p className="invalidInput">Campo requerido.</p>
                            )}
                        </div>
                        <div className='botonesEditarMascota'>
                            <button type="button" className='botonCancelarEditarMascota' onClick={ () => { setEditing(false) } }>Cancelar</button>
                            <button type="submit" className='botonConfirmarEditarMascota'>Editar</button>
                        </div>
                    </form>
                </>
            }
        </article> 
    </>
    )
}

export default CardMiMascota
