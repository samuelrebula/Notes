import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css"

function Login() {
    return (
        <div className="base">
            <div className="container">
                <div>
                    <h1 className="title">Notes</h1>
                    <Form className="inputs">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary">Login</Button>
                    </Form>
                </div>
            </div> 
        </div>
    );
}

export default Login;