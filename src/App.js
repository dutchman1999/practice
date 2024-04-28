import './App.css';
import Company from './components/company';
import Cities from './components/city';
import Employee from './components/employee';
import Customer from './components/customer';
import Items from './components/item';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import SignUp from './components/signUp';
import Hook2 from './components/StudentFormFill';
import SignIN from './components/signIn';
import BootStrapLayout from './components/bootstrapLaout';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter className="navbar navbar-expand-sm navbar-dark bg-dark p-3 sticky-top">
          <header>
            <Link to="/"> Company </Link>
            <Link to="/Cities"> Cities </Link>
            <Link to="/Employee"> Employee </Link>
            <Link to="/Customer"> Customer </Link>
            <Link to="/Items"> Items </Link>
            <Link to="/SignUp">Sign-Up</Link>
            <Link to="/FormFillup">Form Fill-up</Link>
            <Link to="/SignIn">Sign In</Link>
            <Link to = "/BootStrapLayout"> BootStrapLayout</Link>
            <img align='left' src="https://blog.tubikstudio.com/wp-content/uploads/2016/10/horsy_animation_logo_tubik_studio-1.gif" alt="bug" height={100} />
          </header>
          <Routes>
            <Route exact path='/' element={<Company />}  > </Route>
            <Route exact path='/Cities' element={<Cities />}>  </Route>
            <Route exact path='/Employee' element={<Employee />}>  </Route>
            <Route exact path='/Customer' element={<Customer />}>  </Route>
            <Route exact path='/Items' element={<Items />} > </Route>
            <Route exact path='/SignUp' element={<SignUp />} ></Route>
            <Route exact path='/FormFillup' element={<Hook2 />}></Route>
            <Route exact path='/SignIn' element={<SignIN/>}></Route>
            <Route exact path='/BootStrapLayout' element= {<BootStrapLayout/>}></Route>
          </Routes>
        </HashRouter>


      </header>
    </div>
  );
}

export default App;
