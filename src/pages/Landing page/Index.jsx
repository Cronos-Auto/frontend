import './style.css'
import { useNavigate } from 'react-router-dom'
import bgImg from '../../assets/BackGroundImage.png'
import logoCronos from '../../assets/logoCronos.png'


function LandingPage() {
    const navigate = useNavigate();

    const registerNavigate = () => {
        navigate('/register');
    }

    const loginNavigate = () => {
        navigate('/login');
    }
    return(
        <section>
            <header>
                <p className='tittle'>
                    Conheça Cronos Auto
                </p>
            </header>
            <section>
                <div className='hero' 
                style={{
                    backgroundImage: `url(${bgImg})`,
                    height: '850px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100vw',
                    minHeight: '100vh'
                }}>
                    <div className='navBar'>
                        <img className='LogoCronos' src={logoCronos}></img>
                        <div className='ButtonSection'>
                        <button className='login' onClick={loginNavigate}>
                            Login
                        </button>
                        <button className='cadastro' onClick={registerNavigate}>
                            <p>
                                Cadastre-se
                            </p>
                        </button>
                        </div>
                    </div>
                    <p className='slogan'>
                        Conheça a NOVA Forma de AUTOMATIZAR Processos
                    </p>
                    <button className='mostrarMais'>
                        quero conhecer
                    </button>
                </div>
                <p className='desc'>
                    O que somos?
                </p>
                <p className='desc2'>
                          Resolvemos a ineficiência em um dos processos de cadastro de pontos para funcionários com uma aplicação que automatiza a criação de modelos exclusivos para cada funcionário.
                </p>
                <div className='card_1'>
                </div>                
                <div className='card_2'>                    
                </div>
                <div className='card_3'>                   
                </div>
            </section>
            <footer>
                <p>
                    Cronos Auto
                </p>
            </footer>
        </section>
    )
}

export default LandingPage