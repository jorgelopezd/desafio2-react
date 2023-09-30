
import React from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import {faFacebook,faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons"

const Registro = () => {
    const iconFacebookClick =() =>{
    }

    const iconGithubClick =() =>{
    }

    const iconLinkedinClick =() =>{
    }

    return(
        <>
        <div className="container-form bg-ligth p-4 rounded-5">
            <h1>Crea una cuenta</h1>
            <SocialButton icon={faFacebook} onClick={iconFacebookClick} />
            <SocialButton icon={faGithub} onClick={iconGithubClick} />
            <SocialButton icon={faLinkedin} onClick={iconLinkedinClick} />
            <Formulario />
        </div>
        </>
    )
}

    export default Registro