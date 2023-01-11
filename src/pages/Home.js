import React,{useState,useEffect, useContext} from 'react'
import {Link} from 'react-router-dom';
import "../styles/home.css";
import image from "../assets/cv.svg";
import {UserContext} from '../App.js';


function Home() {
  const {state,dispatch}=useContext(UserContext);

  const [name,setname]= useState('');
  const [show, setshow]= useState(false);

const callhome= async ()=>{
  try{
    const res= await fetch("http://localhost:9000/.netlify/functions/app/getdata",{
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    const data= await res.json();
    setname(data.name);
    setshow(true);
    

  } catch(err){
    console.log(err);
  }
}

  useEffect(() => {
    callhome();
  }, []);

  return (
    <div className="home">
      <img src={image} alt=''/>
      <h1> Welcome {name}</h1>
      <h2>{show? "Good To See You.":"We are the MERN Stack Developer."}</h2>
      {state?'':
      <div className="homelinks">
       <Link to="/register">Register</Link>
       <Link to="/login">SignIn</Link>
      </div>
    }
      
     
    </div>
  )
}

export default Home