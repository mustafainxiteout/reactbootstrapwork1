import React from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Admin from './components/Admin';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route exact path="/signup" element={<Register/>}></Route>
    <Route exact path="/signin" element={<Login/>}></Route>
    <Route exact path='/admin' element={<Sidebar navs={<Admin/>}/>}/>
    <Route exact path='/home' element={<Sidebar navs={<Home/>}/>}/>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
