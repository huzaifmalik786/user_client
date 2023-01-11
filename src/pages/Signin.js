import React, { useState,useContext } from 'react'
import image from "../assets/login.svg";
import {useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../styles/login.css";
import {UserContext} from '../App.js';

function Signin() {

  const {state, dispatch}=useContext(UserContext);
  const navigate= useNavigate();
  const [data, setdata] = useState({
    email: "",
    password: ""
  });

  const handlelogin=async (e)=>{
    e.preventDefault();
    const {email, password} = data;
    const res = await fetch('http://localhost:9000/.netlify/functions/app/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({email, password})
    })
    const user = await res.json();
    if(user.message){
      window.alert(user.message);
    }
    else{
      dispatch({type:"USER", payload:true});
      window.alert("Login Successful");
      navigate("/");
    }
  }

  return (
    <div className="signin">
      <h1>Sign in</h1>
      <div className="body" alt="">
        <img src={image} />
        <Form method="POST">
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={data.email} type="email" placeholder="Enter email" required
              onChange={(event) => {
                setdata({ ...data, email: event.target.value })
              }} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control value={data.password} type="password" placeholder="Password" required
              onChange={(event) => {
                setdata({ ...data, password: event.target.value })
              }} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handlelogin}>
            Submit
          </Button>
        </Form>
      </div>
    </div >
  )
}

export default Signin