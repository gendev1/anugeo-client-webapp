import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import LoginSvg from '../components/svgs/LoginSvg';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ handleLogin }) => {
    const navigate = useNavigate();

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: '',
    });

    const handleUserData = (e) => {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <Container className="py-5">
                <Row className="d-flex align-items-center  bg-white">
                    <Col>{/* TODO: Fill the space with something better */}</Col>
                    <Col xs={12} md={5} className=" rounded px-4 py-5 bg-light">
                        <h3 className="py-2">Sign In</h3>
                        <Form className="py-3">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" name="email" value={userLogin.email} onChange={(e) => handleUserData(e)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={userLogin.password} onChange={(e) => handleUserData(e)} />
                            </Form.Group>
                            <Link to="/register" style={{ textDecoration: 'none' }}>
                                Dont have an account? Sign up
                            </Link>
                            <br />

                            {/* TODO: Add signin with google and signin with facebook */}
                            <Button variant="primary" onClick={() => handleLogin(userLogin)} className="mt-3">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
