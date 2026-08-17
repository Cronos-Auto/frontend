import './style.css'
import logoCronos from '../../../assets/logoCronos.png'
import FormComponent from '../FormComponent/formComp';
import Link from 'next/link';
import Image from 'next/image';
function RegisterCard(){
    return(
        <div className="contentContainer">
            <Image src={logoCronos} alt="Logo Cronos" style={{height: 'auto', width: '50%'}} priority />
            <div className="header">
                <h6 style={{fontSize: '0.8rem'}}>COMEÇE DE GRAÇA</h6>
                <h2 style={{color: 'black', fontFamily: 'Archivo', fontWeight: '700', fontSize: '1.5rem'}}>Crie uma nova conta</h2>
            </div>
            <p style={{fontSize: '0.9rem'}}>Já possui uma conta? <Link href='/login'>Faça login</Link></p>
            <FormComponent />
        </div>
    )
}
export default RegisterCard;
