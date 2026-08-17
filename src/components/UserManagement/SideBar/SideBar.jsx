import './style.css'
import logoCronos from '../../../assets/logoCronos.png'
import Image from 'next/image'

import { FaAddressCard } from 'react-icons/fa'
import { FaList } from 'react-icons/fa'
import { FaPrint } from 'react-icons/fa'

function SideBar(){
    return(
                        <aside>
                            <Image className='logoCronos' src={logoCronos} alt='Cronos Auto' />
        
                            <FaAddressCard></FaAddressCard>
                            <FaList></FaList>
                            <FaPrint></FaPrint>
        
                        </aside>
    )
}
