import './style.css'
import logoCronos from '../../../assets/logoCronos.png'
import FormComponent from '../FormComponent/formComp';
import { FaIdCard } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsEye, BsEyeFill } from 'react-icons/bs';
function LoginCard(){
    return(
        <div className="contentContainer">
            <img src={logoCronos} alt="Logo-Cronos" style={{width: '50%', position: 'absolute'}}/>
            <div className="header">
                <h6 style={{fontSize: '0.8rem'}}>COMEÇE DE GRAÇA</h6>
                <h2 style={{color: 'black', fontFamily: 'Archivo', fontWeight: '700', fontSize: '1.5rem'}}>Crie uma nova conta</h2>
            </div>
            <FormComponent />
        </div>
    )
}
export default LoginCard;