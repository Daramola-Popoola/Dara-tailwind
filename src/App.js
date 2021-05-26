// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Index';
import Menu from './pages/Menu';

function App() {
  const [isDroped, setIsDroped] = useState(false)
  const toggle = () =>{
    setIsDroped(!isDroped)
  }
   
  useEffect(()=>{
    const hideMenu = () => {
     if(window.innerWidth > 768 && isDroped){
       setIsDroped(false)
       console.log(`i resized`)
     }
    }
    window.addEventListener('resize', hideMenu)
    
    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isDroped={isDroped} toggle={toggle}/>
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/about" component={About} />
         <Route path="/menu" component={Menu} />
       </Switch>
      <Footer />
    </>
  );
}

export default App;
