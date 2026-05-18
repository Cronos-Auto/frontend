import './style.css'
import logoCronos from '../../../assets/logoCronos.png'
import FormComponent from '../FormComponent/formComp';
function LoginCard(){
    return(
        <div className="contentContainer">
            <img src={logoCronos} alt="Logo-Cronos" style={{height: '10%', width: '50%'}}/>
            <div className="header">
                <h6 style={{fontSize: '0.8rem'}}>COMEÇE DE GRAÇA</h6>
                <h2 style={{color: 'black', fontFamily: 'Archivo', fontWeight: '700', fontSize: '1.5rem'}}>Crie uma nova conta</h2>
            </div>
            <FormComponent />
        </div>
    )
}
export default LoginCard;