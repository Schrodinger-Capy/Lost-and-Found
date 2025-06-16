import {Link} from 'react-router-dom'
function NavigationBar(){
    return(
        <header className="header">
            <h1 id="websitename">Lost and Found</h1>
            <Link to="/login"><button className = "loginbutton">Login</button></Link>
            
        </header>
    );
}
export default NavigationBar;