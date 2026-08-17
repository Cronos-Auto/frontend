import LoginCard from '../../components/UserManagement/LoginCard/Login'
import './style.css'
function LoginPage(){
    return(
        <main className='authPage'>
            <div className='authScreen'>
                <LoginCard />
            </div>
        </main>
    )
}
export default LoginPage;
