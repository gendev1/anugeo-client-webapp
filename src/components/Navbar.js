import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function CollapsibleNavbar({ handleLogout }) {
    const navigate = useNavigate();
    // console.log("from", localStorage.getItem("user"));

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">Anu Geo Tech</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <span className="me-auto"></span>
                    {!localStorage.getItem('token') ? (
                        <Nav>
                            <Nav.Link>
                                <Button variant="light" onClick={() => navigate('/login')}>
                                    Login
                                </Button>
                            </Nav.Link>

                            <Nav.Link>
                                <Button variant="light" onClick={() => navigate('/register')}>
                                    Register
                                </Button>
                            </Nav.Link>
                        </Nav>
                    ) : (
                        <Nav className="d-flex align-items-center">
                            <Navbar.Text>{localStorage.getItem('name')}</Navbar.Text>

                            <Nav.Link>
                                <Button variant="light" onClick={() => handleLogout()}>
                                    Logout
                                </Button>
                            </Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleNavbar;
