import './style.css'
import { FaIdCard } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsEye, BsEyeFill } from 'react-icons/bs';
import { useState } from 'react';
function FormComponent(){
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return(
        <div id='container'>
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
                        <input type={isPasswordVisible ? 'text' : 'password'} id='passwordInput' name='senha'/>
                        {isPasswordVisible ? (
                            <BsEye
                            className='icons passwordToggle'
                            onClick={() => setIsPasswordVisible(false)}
                            />
                        ) : (
                            <BsEyeFill 
                            className='icons passwordToggle'
                            onClick={() => setIsPasswordVisible(true)}
                            />
                        )}
                    </div>
                </div>
            </div>
            <button className='loginBtn'>Criar conta</button>
        </div>
    )
}
export default FormComponent;