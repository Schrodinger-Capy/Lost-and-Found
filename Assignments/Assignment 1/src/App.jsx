import {
  BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavigationBar from './NavigationBar.jsx'
import LoginPage from './LoginPage.jsx'
import HomePage from './HomePage.jsx';
import Copyright from './Footer.jsx';
import RegisterPage from './RegisterPage.jsx';

function App() {
  return(
  <Router><div className='appcontainer'>
    <div className='maincontent'>
        
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
    </div>
    <Copyright></Copyright>
  </div></Router>
  );
}

export default App;
