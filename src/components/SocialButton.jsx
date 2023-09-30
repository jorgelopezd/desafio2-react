import { Button }  from 'react-bootstrap'

const SocialButton = ({ button }) =>{
    return (
        <Button>
            <i className={`fa-brands ${button} fa-xl`} />
        </Button>
    )
}

export default SocialButton