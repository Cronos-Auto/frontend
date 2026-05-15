import BgImg from '../../assets/LoginBgImg.jpg'
import logoCronos from '../../assets/logoCronos.png'
import LoginCard from '../../components/UserManagement/LoginCard/Login'
import './style.css'
function LoginPage(){
    return(
        <section>
            <div id='screenContainer'>
                <LoginCard />
            </div>
        </section>
    )
}
export default LoginPage;