import React,{useState, useContext} from 'react'
import Logo from '../assets/Logo.png'
import styles from '../styles/header.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import {Link} from 'react-router-dom';
import {UserContext} from "../App.js";

function Header() {
  const {state,dispatch}=useContext(UserContext);
  const [visibility,setvisibility]=useState(false);
  const setlinks=()=>{
    setvisibility(!visibility);
  }

  const MenuList=()=>{
    if(state){
      return (
        <>
          <Link to='/'>Home</Link>
          <Link to="/logout">LogOut</Link>
        </>
      )
    }
    else{
      return(
        <>
       <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>SignIn</Link>
      </>
      )
      
    }
  }

  return (
    <div className="header">
        <div className="img">
            <img src={Logo} alt=''/>
        </div>
        <div className="button">
         <MenuList/>
        </div>
        
        <div className="reorder">
          <button onClick={setlinks}>
            <ReorderIcon/>
          </button>
          <div className="ddown" id={visibility? "open": "close"}>
          <MenuList/>
        </div>
        </div>
    </div>
  )
}

export default Header