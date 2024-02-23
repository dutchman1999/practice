
import './App.css';

import Company from './components/company';
import Cities from './components/city';
import Employee from './components/employee';
import Customer from './components/customer';
import Items from './components/item';
import {HashRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter className = "Container">
            <header>
              <Link to="/"> Company </Link>
              <Link to="/Cities"> Cities </Link>
              <Link to="/Employee"> Employee </Link>
              <Link to="/Customer"> Customer </Link>
              <Link to="/Items"> Items </Link>
            </header>
            <Routes>
              <Route exact path='/' element = {  <Company/> }  > </Route>
              <Route exact path='/Cities' element= { <Cities/> }>  </Route>
              <Route exact path='/Employee' element = {<Employee/>}>  </Route>
              <Route exact path='/Customer' element = { <Customer/> }>  </Route>
              <Route exact path='/Items' element = { <Items/> } > </Route>
            </Routes>
        </HashRouter>
      

      </header>
    </div>
  );
}

export default App;
