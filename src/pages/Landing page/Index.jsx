import './style.css'
import { useNavigate } from 'react-router-dom'
import bgImg from '../../assets/BackGroundImage.png'
import logoCronos from '../../assets/logoCronos.png'
import { FaLinkedin, FaPray } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaAddressCard } from 'react-icons/fa'
import { FaList } from 'react-icons/fa'
import { FaPrint } from 'react-icons/fa'


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
                        <div className='slogandiv'>
                        <p className='slogan'>
                            Conheça a <span>NOVA</span> Forma de
                        </p>
                        <p className='slogan'>
                            <span>AUTOMATIZAR</span> Processos
                        </p>
                    </div>

                    <div className='buttonSlogan'>
                        <button className='mostrarMais'>
                            Quero conhecer
                        </button>
                    </div>
                </div>

                <div className='descContainer'>
                    <p className='desc'>
                        O que somos?
                    </p>
                    <p className='desc2'>
                            Resolvemos a ineficiência em um dos processos de cadastro de pontos para funcionários com uma aplicação que automatiza a criação de modelos exclusivos para cada funcionário.
                    </p>
                </div>

                <div className='cardsContainer'>
                    <div className='card_1'>
                        <div className='iconTitle'>
                            <FaAddressCard className='iconCards'></FaAddressCard>
                            <p className='cardTitle'> Cadastro </p>
                        </div>

                        <p className='cardSub'>
                            Registre os dados dos funcionario nos sistema.
                        </p>
                    </div>
                    
                    <div className='card_2'>
                        <div className='iconTitle'>
                            <FaList className='iconCards'></FaList>
                            <p className='cardTitle'> Seleção </p>
                        </div>

                        <p className='cardSub'>
                            Selecione quais funcionários deseja baixar o modelo.
                        </p>
                        
                    </div>

                    <div className='card_3'>
                        <div className='iconTitle'>
                            <FaPrint className='iconCards'></FaPrint>
                            <p className='cardTitle'> Imprima </p>
                        </div>

                        <p className='cardSub'>
                            Imprima sua folha de ponto rapidamente.
                        </p>
                    </div>

                </div>
            </section>
            <footer>
                <p className='tittle'>
                    Cronos Auto
                </p>

                <p className='subTittle'>Conheça os integrantes:</p>

                <div className='contactUs'>
                    <p><FaLinkedin></FaLinkedin> Linkedin</p>
                    <ul>
                        <li>Diogo André</li>
                        <li>Gabriel Domingues</li>
                    </ul>
                    <p><FaGithub></FaGithub> GitHub</p>
                    <ul>
                        <li>Diogoamss</li>
                        <li>GabrielDominguesSantos</li>
                    </ul>
                </div>
            </footer>
        </section>
    )
}

export default LandingPage