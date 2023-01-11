import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/register.css';
import image from "../assets/registration.svg";

function Register() {
  const history = useNavigate();
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: ""
  })

  const handlesubmit= async (e)=>{
    e.preventDefault();
    const {name, email, phone, work, password, cpassword} = data;

    const res= await fetch("http://localhost:9000/.netlify/functions/app/register",{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, phone, work, password, cpassword})
    })
    const user = await res.json();
    if(user.message){
      window.alert(user.message);
    }
    else{
      window.alert("Registration successful");
      history("/signin");
    }
  }
  return (
    <div className="register">
      <h1>Enter the Details</h1>
      <div className="body">
        <img src={image} alt=""/>
        <Form method="POST">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control value={data.name} type="text" placeholder="Name" required
              onChange={(event) => {
                setdata({ ...data, name: event.target.value })
              }} />
          </Form.Group>
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

          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control value={data.phone} type="number" placeholder="Mobile Number" required
              onChange={(event) => {
                setdata({ ...data, phone: event.target.value })
              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="work">
            <Form.Label>Work</Form.Label>
            <Form.Control value={data.work} type="text" placeholder="Work" required
              onChange={(event) => {
                setdata({ ...data, work: event.target.value })
              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control value={data.password} type="password" placeholder="Password" required
              onChange={(event) => {
                setdata({ ...data, password: event.target.value })
              }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cpassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control value={data.cpassword} type="password" placeholder="Confirm Password" required
              onChange={(event) => {
                setdata({ ...data, cpassword: event.target.value })
              }} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handlesubmit}>
            Submit
          </Button>
        </Form>
      </div>

    </div>
  )
}

export default Register