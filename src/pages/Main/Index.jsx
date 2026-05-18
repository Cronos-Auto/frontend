import './style.css'

import { FaAddressCard } from 'react-icons/fa'
import { FaList } from 'react-icons/fa'
import { FaPrint } from 'react-icons/fa'

import logoCronos from '../../assets/logoCronos.png'

function MainPage(){

    return(
        <body>
            <header>
                <p className='tittle'>
                    Cronos Auto
                </p>
            </header>

            <section>
                <aside>
                    <img className='logoCronos' src={logoCronos}></img>

                    <FaAddressCard></FaAddressCard>
                    <FaList></FaList>
                    <FaPrint></FaPrint>

                </aside>

                <p className='PageTitle'>Folha de ponto</p>

                <div>
                    <p>Selecione quais professores você deseja imprimir</p>

                    <button>Imprimir</button>

                </div>

                <div>

                </div>
            </section>
        </body>
    )
}

export default MainPage