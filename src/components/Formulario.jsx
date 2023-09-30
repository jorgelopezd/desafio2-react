import { useState } from 'react';
import {FormControl, Button} from 'react-bootstrap';
import Alert from './Alert';

const Formulario = ({mostrarForm}) => {
    const [nombre,setNombre] = useState("")
    const [email, setEmail] =useState("")
    const [contraseña, setContraseña] =useState("")
    const [confirmacion, setConfirmacion] = useState("")
    const [mensajeExito,setMensajeExito] = useState("")
    const [mensajeError,setMensajeError] = useState("");


    const validarInput = (e) => {
        e.preventDefault();

        setMensajeExito("");
        setMensajeError("");


    if (nombre === '' || email === '' || contraseña ==='' || confirmacion ===''){
        setMensajeError('Completa todos los campos','danger')
        return;
    }

    const validaremail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validaremail){
        mostrarForm('Correo Electronico no valido', 'danger')
        return;

    }

    if(contraseña !== confirmacion){
        mostrarForm('Las contraseñas no coinciden', 'danger')
        return;
    }
    setMensajeExito('Registro de forma exitosa')
    inputclean();
    }

    const inputclean = () =>{
        setNombre('')
        setEmail('')
        setContraseña('')
        setConfirmacion('')
    }

    return(
        <>
            <p>O usa tu email para registrarte</p>
            <form onSubmit={validarInput}>
                <>
                    <FormControl className='frm mt-3' type='text'placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}></FormControl>
                    <FormControl className='frm mt-3'type='email' placeholder='tuemail@ejemplo.com' value={email} onChange={(e) => setEmail(e.target.value)}></FormControl>
                    <FormControl className='frm mt-3'type='password' placeholder='Contraseña' value={contraseña} onChange={(e) => setContraseña(e.target.value)}></FormControl>
                    <FormControl className='frm mt-3'type='password' placeholder='Confirmar contraseña' value={confirmacion} onChange={(e) => setConfirmacion(e.target.value)}></FormControl>
                </>

                <div className='d-grid -gap-2 mt-3'>
                <Button variant="success" size="lg" type='submit'>Registrarse</Button>
                </div>

                {mensajeError && <Alert mensaje={mensajeError} tipo={'danger'} />}
                {mensajeExito && <Alert mensaje={mensajeExito} tipo={'success'} />}
            </form>
        </>
    )
}

export default Formulario