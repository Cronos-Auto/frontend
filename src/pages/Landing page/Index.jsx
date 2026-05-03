import './style.css'
import bgImg from '../../assets/BackGroundImage.png'

function LandingPage() {


    return(
        <body>
            <header>
                <p className='tittle'>
                    Conheça Cronos Auto
                </p>
            </header>

            <section>
                <div className='hero' style={{ backgroundImage: `url(${bgImg})`, height: '850px', backgroundSize: 'cover'}}>
                    <div className='navBar'>
                        <button className='login'>
                            login
                        </button>
                        <button className='cadastro'>
                            <p>
                                cadastre-se
                            </p>
                        </button>
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

        </body>
    )
}

export default LandingPage