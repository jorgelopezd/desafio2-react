import React from 'react';
import { Button }  from 'react-bootstrap';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SocialButton = ({ icon, onClick }) =>{
    return (
        <Button className='btn btn-light m-2' size='lg' onClick={onClick}>
            <FontAwesomeIcon icon={icon}/>
        </Button>
    )
}

export default SocialButton