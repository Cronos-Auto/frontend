import './styles.css'

import { FaAddressCard } from 'react-icons/fa'
import { FaList } from 'react-icons/fa'
import { FaPrint } from 'react-icons/fa'

import logoCronos from '../../assets/logoCronos.png'
import Image from 'next/image'

function MainPage(){

    return(
        <main>
            <header>
                <p className='tittle'>
                    Cronos Auto
                </p>
            </header>

            <section>
                <aside>
                    <Image className='logoCronos' src={logoCronos} alt='Cronos Auto' />

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
        </main>
    )
}

export default MainPage
