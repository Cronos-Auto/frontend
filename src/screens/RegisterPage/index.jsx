import RegisterCard from '../../components/UserManagement/RegisterCard/Register'
import './style.css'
function RegisterPage(){
    return(
        <main className='authPage'>
            <div className='authScreen'>
                <RegisterCard />
            </div>
        </main>
    )
}
export default RegisterPage;
