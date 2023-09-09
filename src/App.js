// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Fragment } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/*' element={"ERROR PAGE"} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
