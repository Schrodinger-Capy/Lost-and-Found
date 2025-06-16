import iitklogo from './assets/iitklogo.jpg'
import {Link} from 'react-router-dom'
function LoginPage(){
    return(<>
        <div className="logincontainer">
            <div>
            <img src={iitklogo} alt='IIT Kanpur Logo' id="iitklogo"/>
            <p className="headinglp">Username : </p>
            <input
            className="inputloginpage"
            type='text'
            placeholder='Enter your Username'
            />
            <p className="headinglp">Password : </p>
            <input
            className="inputloginpage"
            type='text'
            placeholder='Enter your Password'
            /><br></br><br></br>
            <button className='loginpagebutton'>Login</button><br></br><br></br>
            <Link to="/register" id='lptorp'>New User? Register Here!</Link>
            </div>
        </div>
        </>
    );
}
export default LoginPage;