import { useState } from 'react'
import { Form,FormGroup,FormControl, Button } from 'react-bootstrap'

const Formulario = ({mostrarForm}) => {
    const [nombre,setNombre] = useState("")
    const [email, setEmail] =useState("")
    const [contraseña, setContraseña] =useState("")
    const [confirmacion, setConfirmacion] = useState("")
    const [error, setError] = useState(false)
    const [exito, setExito] = useState(false)

    
    const validarInput = (e) => {
        e.preventDefault();

    if (nombre === '' || email === '' || contraseña ==='' || confirmacion ===''){
        setError(true);
        setExito(false);
        return;
    }

    const validaremail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validaremail){
        setError(true);
        setExito(false);
        return;
    }

    if(contraseña !== confirmacion){
        setError(true);
        setExito(false);
        return;
    }

    setError(false);
    setExito(true);


    mostrarForm({nombre, email,contraseña});
    }
    return(
        <>
            <form onSubmit={validarInput}>
                {error && <p className='error'>Ha ocurrido un error</p>}
                {exito && <p className='exito'>Registro exitoso</p> }

                <FormGroup>
                    <Form.Label>nombre</Form.Label>
                    <FormControl type='text' value={nombre} onChange={(e) => setNombre(e.target.value)}></FormControl>
                </FormGroup>

                <FormGroup>
                    <Form.Label>Correo Electronico</Form.Label>
                    <FormControl type='email' value={email} onChange={(e) => setEmail(e.target.value)}></FormControl>
                </FormGroup>

                <FormGroup>
                    <Form.Label>contraseña</Form.Label>
                    <FormControl type='password' value={contraseña} onChange={(e) => setContraseña(e.target.value)}></FormControl>
                </FormGroup>

                <FormGroup>
                    <Form.Label>confirmar contraseña</Form.Label>
                    <FormControl type='password' value={confirmacion} onChange={(e) => setConfirmacion(e.target.value)}></FormControl>
                </FormGroup>

                <Button variant="dark" type='submit'>Enviar</Button>
            </form>
        </>
    )
}

export default Formulario