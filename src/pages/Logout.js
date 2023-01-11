import React,{useEffect,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {UserContext} from '../App.js';


function Logout() {
  const {state, dispatch}=useContext(UserContext);
    const history = useNavigate();
    useEffect(() => {
        fetch('http://localhost:9000/.netlify/functions/app/logout', {
            mode: "no-cors",
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
      dispatch({type:"USER", payload:false});

            history('/login');
            if(res.status!==200){
                throw new Error(res.error);
            }
        }).catch((err) => {
            console.log(err);
        })
    })
  return (
    <div>LogOut</div>
  )
}

export default Logout
