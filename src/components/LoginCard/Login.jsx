import './style.css'
import logoCronos from '../../assets/logoCronos.png'
import { FaIdCard } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsEye, BsEyeFill } from 'react-icons/bs';
function LoginCard(){
    return(
        <div className="contentContainer">
            <img src={logoCronos} alt="Logo-Cronos" style={{width: '50%'}}/>
            <div className="header">
                <h6 style={{fontSize: '0.8rem'}}>COMEÇE DE GRAÇA</h6>
                <h2 style={{color: 'black', fontFamily: 'Archivo', fontWeight: '700', fontSize: '1.5rem'}}>Crie uma nova conta</h2>
            </div>
            <div className="form">
                <p style={{fontSize: '0.9rem'}}>Já possui uma conta? <a href='#'>Faça login</a></p>
                <div className="nameRow">
                    <div className="inputBox">
                        <label htmlFor="inputFName">Primeiro nome</label>
                        <div className="inputComponent">
                            <input type="text" id='inputFName' name='Fnome' />
                            <FaIdCard className='icons'/>
                        </div>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="inputLName">Último nome</label>
                        <div className="inputComponent">
                            <input type="text" id='inputLName' name='Lnome'/>
                            <FaIdCard className='icons'/>
                        </div>
                    </div>
                </div>
                <div className="inputBox">
                    <label htmlFor="emailInput">E-mail</label>
                    <div className="inputComponent">
                        <input type="text" id='emailInput' name='email'/>
                        <MdEmail className='icons'/>
                    </div>
                </div>
                <div className="inputBox">
                    <label htmlFor="passwordInput">Senha</label>
                    <div className="inputComponent">
                        <input type="password" id='passwordInput' name='senha'/>
                        <BsEyeFill className='icons'/>
                    </div>
                </div>
            </div>
            <button className='loginBtn'>Criar conta</button>
        </div>
    )
}
export default LoginCard;