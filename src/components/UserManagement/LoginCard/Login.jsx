import './style.css'
import logoCronos from '../../../assets/logoCronos.png'
import FormComponent from '../FormComponent/formComp'

function LoginCard(){
    return(
        <div className="contentContainer">
            <img src={logoCronos} alt="Logo Cronos" style={{height: '10%', width: '50%'}}/>
        </div>
    )
}
export default LoginCard;