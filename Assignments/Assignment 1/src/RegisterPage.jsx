import iitklogo from './assets/iitklogo.jpg'
import {Link} from 'react-router-dom'
function RegisterPage(){
    return(
        <div className="logincontainer">
            <div>
                    <img src={iitklogo} alt='IIT Kanpur Logo' id="iitklogo"/>
                    <p className="headinglp">Username : </p>
                    <input
                    className="inputloginpage"
                    type='text'
                    placeholder='Create your Username'
                    />
                    <p className="headinglp">Password : </p>
                    <input
                    className="inputloginpage"
                    type='text'
                    placeholder='Create your Password'
                    /><br></br><br></br>
                    <button className='loginpagebutton'>Register</button><br></br><br></br>
                    <Link to="/login" id='rptolp'>Already have an account? Login Here!</Link>
            </div>
        </div>
    );
}
export default RegisterPage;