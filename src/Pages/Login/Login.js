import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css"

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    function login() {
        if(email === "teste@gmail.com" && password === "123"){
            alert("Welcome\n" + email);
            navigate('/home');
        } else {
            alert("Wrong email or password");
        }
    }

    return (
        <div className="base">
            <div className="container">
                <div>
                    <h1 className="title">Notes</h1>
                    <Form className="inputs">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                onChange={(e) => {setEmail(e.target.value)}} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                onChange={(e) => {setPassword(e.target.value)}}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={login}>Login</Button>
                    </Form>
                </div>
            </div> 
        </div>
    );
}

export default Login;