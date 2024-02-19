import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { login } from "../../services/auth"; 
import "./Login.css"

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('/login', {email, password});
            alert("Welcome " + response.data.user.name);
            login(response.data.accessToken);
            navigate('/home');
        } catch (error) {
            if(error.response.status === 403) {
                alert("Wrong email or password");
            } else {
                alert(error.response.data.notification);
            }
            console.warn(error);
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
                        <Button variant="primary" onClick={handleLogin}>Login</Button>
                    </Form>
                </div>
            </div> 
        </div>
    );
}

export default Login;